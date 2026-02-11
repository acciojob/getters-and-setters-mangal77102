class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	// Getter for name
	get name() {
		return this._name;
	}

	// Setter for name
	set name(value) {
		this._name = value;
	}

	// Getter for age
	get age() {
		return this._age;
	}

	// Setter for age
	set age(value) {
		if (value > 0) {
			this._age = value;
		}
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}

	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}

	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

