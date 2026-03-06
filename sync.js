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
  // function sum(a,b){
  //     console.log(a+b);
  // }
  // function callback(a ,b ,callbacks){
  // callbacks(a,b);
  // }
  // callback(1,2 ,sum)
}
//callback hell
{
  // function callback(a ,getdata){
  //     setTimeout(()=>{
  // console.log(a);
  // if(getdata){
  // getdata();
  // }
  //     },2000);
  // }
  // callback(1,()=>{
  //     console.log("running 2 ");
  //   callback(2,()=>{
  //     console.log("running 3");
  //     callback(3,()=>{
  //         console.log("running 4");k
  //         callback(4)
  //     });
  //   });
  // });
}

{
  // function setdta(x){
  //     setTimeout(() => {
  //         console.log(x);
  //     }, 4000);
  // }
  // setdta(1);
  // setdta(2);
  // setdta(3);
}

//promises
{
  //     let promises=new Promise((resolve ,reject)=>{
  // console.log("i promises");
  // resolve("successfuly");
  //     })
  //     console.log(promises);
  // function getdata(data){
  //     return  new Promise((resolve,reject)=>{
  //       setTimeout(()=>{
  //         console.log("i promise",data);
  //         resolve("sucess");
  //       },5000)
  //     })
  // }
  // console.log(getdata(12))
}
//promise.then
{
  //     const getpromise=()=>{
  // return new Promise((resolve ,reject)=>{
  // console.log("i promises");
  // //  resolve("successfuly");
  // reject("404 error");
  //     })
  //     };
  //     let promise=getpromise();
  //  promise.then((res)=>{
  //     console.log("fulfiled",res);
  //  })
  //  promise.catch((err)=>{
  //     console.log("reject ",err);
  //  })
}

//promise chaining
{
  //   const   getdata=()=>{
  //     return new Promise((resolve,reject)=>{
  //         setTimeout(() => {
  //             console.log("i am promise");
  //         resolve("successfully");
  //         }, 2000);
  //     });
  // }
  // const getdata1=()=>{
  //     return new Promise((resolve,reject)=>{
  //         setTimeout(()=>{
  //           console.log("i am promise2");
  //         resolve ("successfly2");
  //         } ,2000);
  //     });
  // }
  //  const getdata3=()=>{
  //     return new Promise((resolve,reject)=>{
  //         setTimeout(()=>{
  //           console.log("i am promise3");
  //         resolve ("successfly3");
  //         } ,2000);
  //     });
  // }
  // let p1=getdata();
  // p1.then((res)=>{
  //     console.log(" data insert",res);
  //     let p2=getdata1();
  //     p2.then((res)=>{
  //         console.log("data 2 insert " ,res);
  //         let p3=getdata3();
  //     p3.then((res)=>{
  //     console.log("successfuly dta 3",res);
  //     });
  //     });
  // });
}

//async or await
{
//  ' function getdata() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("api fetch");
//         resolve("sucess");
//       }, 2000);
//     });
//   }


//   async function myfunction() {
//     await getdata(); // 1 time call
//     await getdata(); //2 time
//   }'

//iife
//   (async function myfunction() {
//     await getdata(); // 1 time call
//     await getdata(); //2 time
//   })();
}

//api

{
   // const url="https://catfact.ninja/fact";
   
// const url ="https://dog.ceo/api/breeds/list/all";
   

//     async function show(){

//         let responce= await fetch(url);
//         console.log(responce);
        
//       let data =await responce.json();
//       console.log(data.status);

      
//     }

//     console.log(show());
// 
}

{
  // const url="https://dog.ceo/api/breeds/image/random";

  //    async function getimg(){
      
  //     let responce= await fetch(url);
  //     console.log(responce);
  //     let object=await responce.json();
  //     setTimeout(() => {
  //       console.log(object);
  //     },2000);
      

  //     document.getElementById("fact").src=object.message;
  // }
  // console.log(getimg());
}



{
  // const url="https://dragonball-api.com/api/characters/22";
  
  // async function anmi(){
  //      let responce=await fetch(url);
  //      console.log(responce);
  //      let jsn=await responce.json();
  //      console.log(jsn);
  //      document.getElementById("fact").src=jsn.image;
  //      document.getElementById("facttext").innerText= jsn.description;
  // }
  // console.log(anmi());
}
{
  // const arr=[1,2,3,[4,5,5]];
  // //  const arr1=[...arr,45]; //spred operater
  // //  console.log(arr1);
  // //  console.log(arr);
  //    const newaa=[...arr];  //shallocopy
  //    newaa[0]=9;
  //    newaa[3][1]=10;
  //    console.log(newaa);
  //    console.log(arr);     


}
//deep copy
{
  const onj={name:"kapil",
    rollno:"34",
    subj:{eng:"eng",c:"c"}
  }

  console.log(onj);

   const newobj=structuredClone(onj);

  newobj.subj.eng="hindi";
  console.log(newobj);



}