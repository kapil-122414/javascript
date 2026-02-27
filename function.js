
// {
// function hello(){
// return "hello bro";
// }
// let f=hello();    
// console.log(f);

// }


// {
 
// let a;
// let b;
//   function sum(a,b ){
//     return a*b;
//   }
//   let mul=sum(3,2);
//   let mul2=sum(2,8);
//   console.log(mul);
//   console.log(mul2);
// }

// local variable 
// {
//     function local(){
//         let local1="local"

//     }
//     console.log(local1);
// }
//function use and variable;

//{
// let x=sum(7);
// function sum(x){
//     return x;
// }
// console.log(x);
// }

{
    // function myfunction(){
    //     return "hello";
    // }
    // console.log(myfunction());
}

// {
//     function sum(a,b){
//         console.log( "sum"+ a+b);
//     }
//     sum(10,39);
//     sum(10,30);
//     sum(20,50);
// }






{
//     const arrowfunction=(a , b)=>{
//         console.log(a+b);
//     }
//     arrowfunction(3,9)
   

}
 {
//     const countvawol=(str)=>{
//         let count=0;
//         for(let i=0;i<=str.length+1;i++){
//             let vol=str[i];
//             if(vol==="a"||vol==="e"||vol==="i"||vol==="o"||vol==="u"){
//                 count=count+1;
//             }
            
//         }
//         console.log(count);
//     }

//     countvawol("iii");
}

{
    // let arr=[1,2,4,45,5,5,3,46];
    // arr.forEach((val2)=>{
    //     console.log(val2);
    // })


    // const ar=[1,2,3,4,5,6,7];
    // ar.forEach((value , index,ar)=>{
        
    
    //     console.log(value ,index,ar);

    // })
}



{
    // let array=[1,2,3,4,5];
    // array.forEach((value)=>{
    //     // console.log(value*value);
    //     let a=value*2;
    //     console.log(a);

    // })
    
    // console.log(array);

// let array = [1,2,3,4,5];

// let newArray = array.forEach((value) => {
//     return value * value;
// });

// console.log(newArray); // [1,4,9,16,25]
// console.log(array);    // [1,2,3,4,5]
}


{

    //function expressions
//     const sum=function(x){
//  return x*x;
//     }
//     console.log(sum(3))
// arrow function
// const add=(a,b)=>{
//    return a+b;

// }
// let result=add(99,87);
// console.log(result);

}


{
    // let array=[12,87,54,44,24,64];
    // let even=array.filter((value)=>{
    //      return value%2===0;
    // });
    // console.log( even);
    //  console.log( array);
}

//reduce function
{
// let array=[1,2,3,4,5,6];
//     let reduce=array.reduce((Result,value)=>{
//     return Result+value;
  
// });
//   console.log(reduce);

//large number of array
// let reduce=array.reduce((larg,val)=>{
//      return larg > val ? larg:val;
// });
//  console.log(reduce); 
}
//find the 90+ number
{
// let array=[98,38,76,90,94,98];
// let number=array.filter((value)=>{
//     if(value>=90){
//   return  value;
//     }
  
// });
// console.log(number);
}

{

    // function name(){
    //     return "kapil";
    // }
    // const obj={
    //     name:"kapil",
    //     rollno:"124324",
    //     course:"bca",
    //     a:name()
    // }
    // console.log(obj.a);
}

//nested object
{
const nested={
    name:"kapil",
    rollno:"24567io",
    mynested:{
        skill:"c",
    }
}
console.log(nested.mynested.skill);
}