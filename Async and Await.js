function fnTimeConsumingWork(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
          resolve('response is:2 seconds have passed')
       }, 2000);
    })
 }
 async function my_AsyncFunc(){
    console.log('inside my_AsyncFunc')
    const response = await fnTimeConsumingWork();// clean and readable
    console.log(response)
 }
 my_AsyncFunc();
 console.log("end of script")