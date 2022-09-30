const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User{
    constructor(obj){
		Object.assign(this, obj);
    };
    render(){
		return `<div class="user">
							<div class="user__info">
								<div class="user__info--data">
									<img src="images/users/${this.name}.png" alt="Jack Smith" height="50">
									<div class="user__naming">
										<p>Name: <b>${this.name}</b></p>
										<p>Age: <b>${this.age}</b></p>
									</div>
								</div>
								<div class="user__info--role student">
									<img src="images/roles/student.png" alt="student" height="25">
									<p>${this.role}</p>
								</div>
							</div>`;
    };
	renderCourses() {
		
	};
};
class Student extends User{
    constructor(obj){
        super(obj);
    };
	render() {
		return super.render() + `<div class="user__courses">
								${this.renderCourses()}
							</div>
						</div>`;
	};
	renderCourses() {
		let course = ``;
		if (this.courses) {
			for (let i=0; i<this.courses.length; i++) {
				let newKeyMin = 0;
				for (let key in gradation) {
					let newKeyMax = Number(key);
					if (newKeyMin < this.courses[i].mark && this.courses[i].mark <= newKeyMax) {
						this.courses[i].mark = gradation[key]
					};
					newKeyMin += newKeyMax - newKeyMin;
				};
				course += `<p class="user__courses--course student">${this.courses[i].title} <span class="${this.courses[i].mark}">${this.courses[i].mark}</span></p>`;
			};
		} else {
			course = ``;
		};
		return course;
	};
};
class Admin extends User{
    constructor(obj){
        super(obj);
    };
	render() {
		return super.render() + `<div class="user__courses admin--info">
						${this.renderCourses()}
					</div>
				</div>`;
	};
	renderCourses(){
		let course = ``;
		if (this.courses) {
			for (let i=0; i<this.courses.length; i++) {
				let newKeyMin = 0;
				for (let key in gradation) {
					let newKeyMax = Number(key);
					if (newKeyMin < this.courses[i].score && this.courses[i].score <= newKeyMax) {
						this.courses[i].score = gradation[key]
					};
					newKeyMin += newKeyMax - newKeyMin;
				};
				course += `<div class="user__courses--course admin">
								<p>Title: <b>${this.courses[i].title}</b></p>
								<p>Admin's score: <span class="${this.courses[i].score}">${this.courses[i].score}</span></p>
								<p>Lector: <b>${this.courses[i].lector}</b></p>
							</div>`;
			};
		} else {
			course = ``;
		};
		return course;
	};
};
class Lector extends User{
    constructor(obj){
        super(obj);
    };
	render() {
		return super.render() + `<div class="user__courses admin--info">
						${this.renderCourses()}
					</div>
				</div>`;
	};
	renderCourses(){
		let course = ``;
		if (this.courses) {
			for (let i=0; i<this.courses.length; i++) {
				let newKeyMin = 0;
				for (let key in gradation) {
					let newKeyMax = Number(key);
					if (newKeyMin < this.courses[i].score && this.courses[i].score <= newKeyMax) {
						this.courses[i].score = gradation[key]
					};
					newKeyMin += newKeyMax - newKeyMin;
				};
				for (let key in gradation) {
					let newKeyMax = Number(key);
					if (newKeyMin < this.courses[i].studentsScore && this.courses[i].studentsScore <= newKeyMax) {
						this.courses[i].studentsScore = gradation[key]
					};
					newKeyMin += newKeyMax - newKeyMin;
				};
				course += `<div class="user__courses--course lector">
							<p>Title: <b>${this.courses[i].title}</b></p>
							<p>Lector's score: <span class="${this.courses[i].score}">${this.courses[i].score}</span></p>
							<p>Average student's score: <span class="${this.courses[i].studentsScore}">${this.courses[i].studentsScore}</span></p>
						</div>`;
			};
		} else {
			course = ``;
		};
		return course
	};
};
let newUsers = JSON.parse(JSON.stringify(users));
for (let i=0; i<newUsers.length; i++) {
	let userInfo = ``;
	if (newUsers[i].role === "student") {
		userInfo = new Student(newUsers[i]);
	} else {
		newUsers[i].role === "admin" ? userInfo = new Admin(newUsers[i]) : userInfo = new Lector(newUsers[i]);
	};
	document.write(userInfo.render());
};