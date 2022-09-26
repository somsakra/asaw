(()=>{
    // function simulateAsycAPI(text, timeout) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             if(text === 'Z') return reject('Z got rejected')
    //             console.log(text)
    //             resolve()
    //         }, timeout)
    //     })
    // }

    // the above function working as same as the function below

    async function simulateAsycAPI(text, timeout) {
        await new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(text === 'Z') return reject('Z got rejected') 
                console.log(text)
                resolve()
            }, timeout)
        })

    }

    run = async ()=>{
        try {
            await simulateAsycAPI('A', 1000)
            await simulateAsycAPI('B', 500)
            await simulateAsycAPI('C', 100)      
        } catch (error) {
            console.error(error)
        }

    }

    run()
})()