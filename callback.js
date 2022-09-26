(()=>{
    function simulateAsyncAPI(text, timeout, callback){
        setTimeout(()=>{
            console.log(text)
            callback()
        }, timeout)
    }
    simulateAsyncAPI('A', 1000, ()=>{
        simulateAsyncAPI('B', 500, ()=>{
            simulateAsyncAPI('C', 100, ()=>{
            })
        })
    })
})()