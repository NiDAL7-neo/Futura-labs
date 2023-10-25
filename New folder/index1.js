class Student {

      constructor(name,marks) {
            var name;
            var marks;
      }
     

      setname(name) {
            this.name=name;
            document.write("hai")
      }

      setmarks(marks) {
            this.marks=marks;
      }

      getname() {
            return this.name;
       }

      getmarks() {
            return this.marks;
      }
}

var stud=new Student();
stud.setname("nidal");
stud.setmarks(99);
// stud.getname()
document.write(stud.getname()+""+stud.getmarks())
