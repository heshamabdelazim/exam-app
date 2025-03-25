/*
content is the following
allExams=[{mathExam}, {ArabicExam}, .....]

*/

interface examDuration {
  min: number;
  hr: number;
}

class Exam {
  static examId: number = 1;

  private examId: number;
  private name: String;
  private duration: examDuration;
  private quesArray: Question[];

  constructor(
    name: String,
    duration: examDuration = { hr: 0, min: 20 },
    quesArray: Question[]
  ) {
    this.examId = Exam.examId++;
    this.name = name;
    this.duration = duration;
    this.quesArray = quesArray;
  }

  //getters
  public quesArrayGetter(): Question[] {
    return this.quesArray;
  }
  public examIdGetter(): number {
    return this.examId;
  }
}
class Question {
  // this class will be called when the teacher enter his question many times
  static id: number = 1;

  private id: number;
  private QHead: String;
  private choices: (String | number)[];
  private correctAns: String | number;

  constructor(
    QHead: String,
    choices: (String | number)[],
    correctAns: String | number
  ) {
    this.id = Question.id++;
    this.QHead = QHead;
    this.choices = choices;
    this.correctAns = correctAns;
  }
}

const allExams: Exam[] = [
  new Exam("Maths", { min: 2, hr: 0 }, [
    new Question("What is 1+2", [1, 2, 3, 4], 3),
    new Question("what is 10/2", [5, 10, 15, 20], 5),
    new Question(
      "what is output of this equation 50-5*6",
      [10, 20, 30, 40],
      20
    ),
    new Question(
      "What is the process of this sign (+)",
      ["Addition", "Subtraction", "Multiplication", "Division"],
      "Addition"
    ),
  ]),
  new Exam("English", { min: 2, hr: 0 }, [
    new Question(
      "What is the letter after B in alphabet",
      ["A", "B", "C", "D"],
      "C"
    ),
    new Question(
      "He .... playing football",
      ["is", "was", "were", "does"],
      "is"
    ),
    new Question("I .... fine, Thanks.", ["am", "is", "were", "does"], "am"),
    new Question("Why .... you late?", ["are", "were", "does", "car"], "are"),
  ]),
  new Exam("IQ", { min: 3, hr: 0 }, [
    new Question(
      "1+3 is equal to 3+1?",
      ["Yes, but sometimes No.", "That's true", "That's false", "I don't know"],
      "That's true"
    ),
    new Question("How many fingers in your both hands?", [5, 10, 15, 20], 10),
    new Question("Is Giraff taller than ant?", ["true", "false"], "true"),
  ]),
];

export default allExams;
