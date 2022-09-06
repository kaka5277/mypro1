
function func4(array){
    let cum=0
    array.forEach(num=>{
        cum+=num
    })
    console.log(cum);

}

func4([1,2,3,4,5,10,-100])
function func4_1(a,b,...rest){
    let cum=a+b;
    rest.forEach(num=>{
        cum+=num
    })
    console.log(cum);
}


func4_1(1,2,3,4,5,-100)

function func5(a,b){
    console.log("here 1");
    return a+b
    console.log("here 2");
}

let cum=func5(1,2)
console.log(cum);


const obj={
    name:"Raymond",
    age:18
}
function func6(obj){
    console.log("name:",obj.name);
    console.log("age:",obj.age);
    obj.name="kaka",
    obj.age=30
}
func6(obj)
console.log(obj);
function func7({name,age}){
    name="vincent",
    age=20
    return{name,age}
}
const newobj=func7(obj)
console.log(newobj);
console.log(obj);

const radius=1
const location={x:1,y:2}
const isVisble=true
const draw=function(){
    console.log('draw');
}
draw();


// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:2
//     },
//     isVisble:true,
//     draw1:function(){ //draw2()
//         console.log('draw');
//     }
//     }


//     circle.draw1()
//     circle.draw2()