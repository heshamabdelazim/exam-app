class Student {
  static id = 1;
  constructor(name, userName, password, examsIds, image, grade) {
    this.id = Student.id++;
    this.name = name;
    this.userName = userName;
    this.password = password;
    this.examsIds = examsIds;
    this.image = image;
    this.grade = grade;
    this.examsFinished = this._examsFinished();
    this.totalScore = this._totalScore();
    this.progress = this._progress();
    this.gradeLetter = this._gradeLetter();
  }

  _examsFinished() {
    return this.examsIds.filter((exam) => exam.score);
  }
  _progress() {
    //4=>100%     (all exams)
    //2=>?        (exams done)
    //ans 2*100   /4
    let ans = (this._examsFinished().length * 100) / this.examsIds.length;
    return Math.floor(ans).toString();
  }
  _totalScore() {
    // 65 + 70 + 76 =>211  //over all 300
    const scoresArr = this._examsFinished().map((obj) => obj.score); //[65,70,76]
    const sumAll = scoresArr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    //211=>?
    //300=>100
    const ans = (sumAll * 100) / (this._examsFinished().length * 100);
    return ans.toFixed(2);
  }
  _gradeLetter() {
    switch (true) {
      case this._totalScore() >= 85:
        return "A";
      case this._totalScore() >= 75:
        return "B";
      case this._totalScore() >= 65:
        return "C";
      case this._totalScore() >= 50:
        return "D";
      default:
        return "F";
    }
  }
}

export const allStudents = [
  new Student(
    "Hesham Abdelazim Kamel Ahmed",
    "Hesh-Abdo",
    "Hesham@98",
    [
      { examId: 1, score: 20 },
      { examId: 2, score: 90 },
      { examId: 3, score: 60 },
    ],
    "/stud3.jpg",
    9
  ),
  new Student(
    "Hossam Ahmed Hassan Ahmed",
    "Hos-Ahmed",
    "Hossam@98",
    [
      { examId: 1, score: null },
      { examId: 2, score: 75 },
      { examId: 3, score: null },
    ],
    // [1, 2, 3],
    "/stud2.jpg",
    9
  ),
  new Student(
    "Basma Essa Ga'fr khaled",
    "Basma-Essa",
    "Basma@98",
    [
      { examId: 1, score: 65 },
      { examId: 2, score: 70 },
      { examId: 3, score: 76 },
      { examId: 4, score: null },
    ],
    "/female-stud.png",
    10
  ),
];

// const test = new Student(
//   "Basma Essa Ga'fr khaled",
//   "Basma-Essa",
//   "Basma@98",
//   [
//     { examId: 1, score: 65 },
//     { examId: 2, score: 70 },
//     { examId: 3, score: 76 },
//     { examId: 4, score: null },
//   ],
//   "/female-stud.png",
//   10
// );
// console.log(test._totalScore());
// console.log(test);
