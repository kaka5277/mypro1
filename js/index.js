
// console.log("hello world");
// let my_name="jun"
// console.log(my_name);
// let firstName = "jun",
//   lastName = "lin";
// firstName = undefined;
// firstName = null;
// console.log(firstName, lastName);

// {
//   let a = 1;
//   console.log(a);
//   let b = "this is a b";
//   let b_1 = "this is a b_1";
//   let b_3 = 'he said:"ddsfasfaf"';
//   let b_4 = `he said:${b}`;
//   console.log(b_4);
//   let b_5 = "he said: " + b;
//   console.log(b_5);

//   let b_66 = "he said: " + a;
//   console.log(b_66);

//   let b_6 = "" + 1;
//   console.log(b_6, typeof b_6);
//   let b_7 = +"1";
//   console.log(b_7, typeof b_7);

//   let c = true;
//   let d = undefined;
//   let e = null;
//   if (c) {
//     console.log("good");
//   } else if (d) {
//     console.log("bad");
//   } else if (e) {
//     console.log("ok");
//   } else {
//   }
// }

// {
//     let obj={
//         name:"jun",
//         age:18,
//         income:{
//             a:3457,
//             b:2457
//         }
//     }
//     console.log(obj);
//     console.table(obj)
//     obj.incomes=0
//     console.table(obj);

//     obj.neme="juns"
//     console.table(obj);

//     obj['name']="kaka"
//     console.table(obj);

// }

{
  let obj = {
    name: "jun",
    age: 19,
  };
  let a = 1;
  let b = a;

  console.log(a, b);
  b = 2;
  console.log(a, b);

  let obj_2 = obj;
  console.log(obj, obj_2);
  obj_2.age = 30;
  console.log(obj, obj_2);

  let obj_3 = { ...obj };
  console.log(obj, obj_3);
  obj_3.age = 100;
  console.log(obj, obj_3);

  let user = {
    name: "kaka",
    age: 18,
    profile: {
      cv: "https://xxxx",
      id: 121212,
    },
  };
  let user2 = { ...user };
  user2.name = "Petter";
  console.log(user, user2);

  user2.profile.id = 7878;
  console.log(user, user2);

  for(let i=0;i<10;i++){
      console.log(i)
  }

  for(let i=0;i<10;i++){
    console.log(i)
}


let array=[1,2,3,"4",true,{name:"ray"}]
console.log(array[6]);

array[0]="sdufsd"
console.table(array);

let array_1=array
array_1[4]=false
console.table(array);


console.log(array.length);
console.log(array[6]);
array[100]=78
console.log(array[100])
console.log(array.length)













array[100].name="kika"
console.log(array[100])
console.log(array[100].name);




array[101]={}
array[101].name="kika"
console.log(array[101]);

}

{ //const 锁定 ，不能更改
    // const password='dsfyhjggghgf'
    // password='asddsaaffg'
    // console.log(password);



    // let password='dsfyhjggghgf'
    // password='asddsaaffg'
    // console.log(password);

const obj={
    name:"fsksdf"
}
obj.name='dfffdf'
// obj=1212
console.log(obj);


}



{
let x=10
let y=0
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%3)
console.log(x**3)
console.log(x+y)
console.log(Math.sqrt(100));
console.log(x++)
console.log(x)
console.log(x--)
console.log(x)
console.log(++x)
console.log(x)
console.log(--x)
console.log(x)





}

{
    let x=10
    x++
    x=x+5
    x+=5

    x??5
}


{
    let x=1
    console.log(x>1);
    console.log(x>=1);
    console.log(x<1);
    console.log(x<=1);

    console.log(x=1);
    console.log(x==1);
    console.log(x===1); 
    //==判断 数值是否相等 justify only value
    console.log(0==false);
    console.log(0!=false);
    console.log(0===false);
    console.log(0!==false);
    // ===justify type & value
    console.log(true==1);
    console.log(true==2);

}

{
    let points=99
    if (points>100){
        console.log('gold')
    } else {
        console.log('silver')
    }

    console.log(points>100?'gold':'silver');
}
{
    console.log(true&true)
   let dayTime=8
    if (dayTime>18 && dayTime<24){
        console.log('night');
    } else {
        console.log('day')
    }


    console.log(false||true)
    if ((dayTime>18 &&dayTime<24)||
    (dayTime>0&&dayTime<6)){
        console.log('night');

    } else {
        console.log('day')
    }
    console.log(0||false)
    console.log(null||false)
    console.log(undefined||false)
    console.log(NaN||false)

    console.log(3||false)
    console.log(false||10)
    console.log(4 || 10)

    const port=5666

    // const PORT=process.env.PORT ||port
    console.log(true==2)
console.log(!2)
}