{
    // function hello(){
    //     console.log("hello");
        
    // }
    // setTimeout(hello,2000) ///2s =2000ms

    // setTimeout(() => {
    //     console.log("hello bro")
        
    // }, 4000);
}

//asynchronous 
{
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("three");
// }, 20);
// console.log("four");
// console.log("five");
// // setTimeout(()=>{
// // console.log("four");
// // console.log("five");
// // },0)

}
//callbacks
{
    function sum(a,b){
        console.log(a+b);
    }
    function callback(a ,b ,callbacks){
    callbacks(a,b);
    }
    callback(1,2 ,sum)

}