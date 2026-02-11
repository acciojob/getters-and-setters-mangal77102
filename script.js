//complete this code
class Person {
	constuctor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	get name()
	{
		return this.name;
		
	}
	set age(value)
	if(value>0)
	{
		this.age=value;
	}
}

class Student extends Person {
	constuctor(name,age)
	{
		super(name,age)
	}
	study()
	{
		console.log(`${this.name} is studying`);
	}
	
}

class Teacher extends Person {

	constuctor(name,age)
	{
		super(name,age)
	}
	teach()
	{
		console.log(`${this.name} is teaching`);
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
