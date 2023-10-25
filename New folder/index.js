let a= 10;
let b=20;
let sum;

sum = a + b;
 

// const x = 40;
// const y = 50;
// const sum;




// document.write(sum);
// console.log(sum);


// let heading1 = document.querySelector(".heading");
// heading1.innerHTML = `result = ${sum}`

//  heading1.style.color="red";
//  heading1.style.backgroundColor="blue"

// let object1 = {color:"cyan","background-color":"green"}
// Object.assign(heading1.style,object1);

// let intro1 = document.querySelectorAll(".intro");

// for(let i=0;i<intro1.length;i++)
// {

// intro1[i].innerHTML="futura labs"

// intro1[i].style.color="red"
// }

// const intro;

// document.getElementsByClassName("intro").innerHTML = "HEYY"

// for( let i=0; i < intro.length; i++)

// intro[i].innerHTML = "How are you"

// var box = {id:"toybox", no:"4", place:"calicut"};
// document.write (box.id + " number " + box.no + " must be delivered at " + box.place );




/***** Object Oriented Programming ****/



// var employee={id:100, name:'shyam kumar', salary:40000}
// document.write(employee.id + " " + employee.name + " " + employee.salary);







/***** How to define a class ****/



// class Employee {

//       constructor(name,id) {

//             this.id=id;
//             this.name=name;
//       }

//       detail(){
//             document.write(this.id + " " + this.name)
//       }
// }

// var box=new Employee("nidal","100");

// box.detail();





/***** Inheritence ****/




// class Employee {

//       box() {

//             document.write ("marks");
//       }
// }
// class child extends Employee
// {
//       box1(){
//             document.write("demo");
//       }
// }
// var ob=new child()
//       ob.box()
//       ob.box1()









/****** Encapsulation ****/






class Student {

      constructor(name,marks) {
            var name;
            var marks;
      }

      setname(name) {
            this.name=name;
            document.write("hai")
      }

      setname(marks) {
            this.marks=marks;
      }

      getname() {
           document.write("hai")
      }

      getmarks() {
            return this.marks;
      }
}

var stud=new Student();
stud.setname("nidal");
stud.setmarks(99);
stud.getname()
// document.write(stud.getname()+""+stud.getmarks())

