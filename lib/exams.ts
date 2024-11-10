/*
content is the following
allExams=[{mathExam}, {ArabicExam}, .....]

*/

class Exam{
  static id =1
  constructor(name: String, duration:Object = 20, quesArray: Object[]) {
    this.id = Exam.id++;
    this.name = name;
    this.duration = duration;
    this.quesArray = quesArray
  };
  //methods
}
class Question{
  // this class will be called when the teacher enter his question many times
  static id = 1;
  static choiceId = 1;
  constructor(QHead: String, choices: (String | Number)[], correctAns: String | Number ) {
    this.id = Question.id++;
    this.QHead = QHead;
    this.choices = choices;
    this.correctAns = correctAns;
  }
  
}

const allExams = [new Exam("Maths", {min:2,hr:0}, [
  new Question("What is 1+2", [1, 2, 3, 4], 3),
  new Question("what is 10/2", [5, 10, 15, 20], 5),
  new Question("what is output of this equation 50-5*6", [10, 20, 30, 40], 20),
  new Question("What is the process of this sign (+)", ["Addition", "Subtraction", "Multiplication", "Division"], "Addition"),
]), new Exam("English", {min:2, hr:0}, [new Question("What is the letter after B in alphabet", ["A","B","C","D"], "C"),
  new Question("He .... playing football", ["is", "was", "were", "does"], "is"),
  new Question("I .... fine, Thanks.", ["am", "is", "were", "does"], "am"),
  new Question("Why .... you late?",["are", "were", "does", "car"],"are")
]), new Exam("IQ", {min:3,hr:0}, [new Question("1+3 is equal to 3+1?", ["Yes, but sometimes No.", "That's true", "That's false", "I don't know"], "That's true"),
  new Question("How many fingers in your both hands?", [5, 10, 15, 20], 10), new Question("Is Giraff taller than ant?", ["true", "false"], "true")
]),
];

export default allExams;

// console.log(allStudents[0]._news());
