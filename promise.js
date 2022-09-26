(()=>{
    function simulateAsycAPI(text, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(text === 'Z') return reject('Z got rejectes')
                console.log(text)
                resolve()
            }, timeout)
        })
    }

    simulateAsycAPI('A', 1000).then(()=> {
        return simulateAsycAPI('B', 500)
    }).then(()=>{
        return simulateAsycAPI('C', 100)
    }).catch((err)=>{
        console.error(err)
    })
})()