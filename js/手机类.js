console.log("hello1");
// let phone1={
//     number:"123",
//     year:2020,
//     is_waterproof:false,
//     phone_age:function(){
//         return 2022-this.year;
//     }

// }
// console.log(phone1.number,phone1.phone_age)
// console.table(phone1 )

class phone {
  constructor(number, year, is_waterproof) {
    this.number = number;
    this.year = year;
    this.is_waterproof = is_waterproof;
  }
  phone_age() {
    let date=new Date();
    return date.getFullYear() - this.year;
  }
}


let phone1=new phone("0456879549",2016,false);  
document.write("phone_number:",phone1.number);
document.write(",phone_age=",phone1.phone_age());
document.getElementById("demo").innerHTML="手机买了"+phone1.phone_age()+"年了";
