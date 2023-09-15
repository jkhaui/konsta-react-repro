class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent = (studentToRegister) => {
    if (studentToRegister && studentToRegister.email) {
      let emailExists = false;

      this.students.filter(({ email }) => {
        email === studentToRegister.email
          ? emailExists = true
          : undefined;
      });

      if (emailExists) {
        return;
      }

      this.students.push(studentToRegister);
    }
  };

}

const students = [
  new Student('Joe', 'joe@example.com', 'Vegas'),
  new Student('Frank', 'franke@example.com', 'Vegas'),
  new Student('Bob', 'bob@example.com', 'Vegas'),
  new Student('Sarah', 'sarah@example.com', 'Vegas'),
];

// Try changing the email here and this new student will be added to the `JavaScript` Bootcamp array of students.
const Bob2 = new Student('Bob', 'bob@example.com', 'Vegas');

const JavaScript = new Bootcamp('JavaScript', 'Beginner', students);
JavaScript.registerStudent(Bob2);

console.log(JavaScript.students);