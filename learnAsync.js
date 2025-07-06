function sayhelloasync(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hello: this will appear late")
        resolve()
    },2000)
   })
}
 async function doingSomeWork(){
    console.log("in function");
     await sayhelloasync();   // hello: this will appear late
    console.log("bye function");
}

// const doingSomeWork= (name)=>{

// }
// main code 
// ---------------------

console.log("before")
doingSomeWork()
console.log("after")