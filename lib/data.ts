// import allExams from "./exams";
import allExams from "./exams";

interface studentGrades{
  score: null | number
  examId:number
}

export class Student {
  static id: number = 1;

  private userId: number;
  private name: String;
  private userName: String;
  private yearBorn: number;
  private quote: String;
  private image: String;
  private grade: number;
  private location: String;
  private hobbies: String[];
  private personalNews: String[];
  private password: String;
  private examsIds: studentGrades[];
  private examsFinished: studentGrades[];
  private totalScore: String;
  private age: number;
  private gradeLetter: String;
  private progress: String;
  private news: String[];
  // private examDetails: studentGrades[];
// You need to define data types first here


  constructor(
    name : String,
    userName: String,
    password : String,
    examsIds: studentGrades[],
    image:String,
    grade:number,
    quote:String,
    yearBorn:number,
    location:String,
    hobbies:String[],
    personalNews:String[],
  ) {
    this.userId = Student.id++;
    this.name = name;
    //personal details
    this.userName = userName;
    this.yearBorn = yearBorn;
    this.quote = quote;
    this.image = image;
    this.password = password;
    this.location = location;
    this.hobbies = hobbies;
    //academic details
    this.examsIds = examsIds;
    this.grade = grade;
    this.examsFinished = this._examsFinished(examsIds);
    this.progress = this._progress(examsIds);
    this.totalScore = this._totalScore();
    this.gradeLetter = this._gradeLetter();
    this.age = this._age();
    this.news = [this._firstMsg(), ...personalNews, ...this._news()];
    this.examDetails = this._examDetails();
  }
  _examsFinished(examInputs:studentGrades[]): studentGrades[]  {
    console.log(examInputs)
    
    // console.log(examInputs.filter(x => x.score))
    return examInputs.filter((exam) => exam.score);
  }
  _progress(examsIds:studentGrades[]):String {
    //4=>100%     (all exams)
    //2=>?        (exams done)
    //ans 2*100   /4
    const ans = (this.examsFinished.length * 100) / examsIds.length;
    return Math.floor(ans).toString();
  }
  _totalScore():String {
    // 65 + 70 + 76 =>211  //over all 300
    const scoresArr = this.examsFinished.map((obj) => obj.score); //[65,70,76]
    const sumAll = scoresArr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    //211=>?
    //300=>100
    const ans = (sumAll * 100) / (this.examsFinished.length * 100);

    return ans.toFixed(2);
  }
  _gradeLetter() :String {
    switch (true) {
      case this.totalScore >= "85":
        return "A";
      case this.totalScore >= "75":
        return "B";
      case this.totalScore >= "65":
        return "C";
      case this.totalScore >= "50":
        return "D";
      default:
        return "F";
    }
  }
  _age():number {
    return new Date().getFullYear() - this.yearBorn;
  }

  _firstMsg() :String {
    const ifRemaining = this.examsIds.length !== this.examsFinished.length;
    const { examsFinished: x, examsIds: a } = this;

    return ifRemaining
      ? `You have finished ${x.length} ${
          x.length > 1 ? "exams" : "exam"
        }, But still ${a.length - x.length} remaining.`
      : `Good Job, You have finished your all exams successfully.`;
  }

  _news() :String[] {
    // general news to all students
    const generalNews = [
      "The school reached semi-final competition of karate.",
    ];
    return generalNews;
  }
  _examDetails() {
    // this method should be done in SQL to query examId in the exam table
    const arrayHasExams = [];
    for (let i = 0; i < this.examsIds.length; i++) {
      // getting the exam Object from all Exams
      const indexFinder = allExams.find(
        (examObj) => examObj.examIdGetter() == this.examsIds[i].examId
      );

      // getting the questions array of that exam we got it (why I made it? because the output was [Question, Question] that done by class)
      //so Redux does not understand that object unless I made it plain object like this output [{..}, {..}]
      const questionsArray = indexFinder.quesArrayGetter().map((que) => {
        return { ...que }; //why this way of object? It is plain object for Redux
      });

      arrayHasExams.push({
        ...indexFinder,
        ...this.examsIds[i],
        quesArray: questionsArray,
      });
      //  O(n square) => for loop * nested find loop
    }
    return arrayHasExams;
  }
}

export const allStudents : Student[] = [
  new Student(
    "Hesham Abdelazim Kamel Ahmed",
    "Hesh-Abdo",
    "Hesham@98",
    [
      { examId: 1, score: 12 },
      { examId: 2, score: 49 },
      { examId: 3, score: 60 },
    ],
    "/stud3.jpg",
    9,
    "being active, It does mean eagle eye.",
    1998,
    "Alexandria - Egypt",
    ["Passionate", "Active", "Games", "Fast Tasker"],
    [
      "Please come to the adminstration with your parents.",
      "You have assigned in the Musium Trip.",
    ]
  ),
  new Student(
    "Hossam Ahmed Hassan Ahmed",
    "Hos-Ahmed",
    "Hossam@98",
    [
      { examId: 1, score: null },
      { examId: 2, score: 30 },
      { examId: 3, score: 55 },
    ],
    // [1, 2, 3],
    "/stud2.jpg",
    9,
    "I believe I can fly.",
    1990,
    "Mansora - Egypt",
    ["Hard Worker", "vision", "social", "kind"],
    [
      "Excellent big champ Hossam on Karate, Please go to the Adminstration for reward.",
      "You have assigned in the Musium Trip.",
    ]
  ),
  new Student(
    "Basma Essa Ga'fr khaled",
    "Basma-Essa",
    "Basma@98",
    [
      { examId: 1, score: 70 },
      { examId: 2, score: null },
      { examId: 3, score: 80 },
    ],
    "/female-stud.png",
    10,
    "I'm learning to serve people on earth to seek Allah's path.",
    1994,
    "Cairo - Egypt",
    ["Decision Maker", "Case Studying", "Movies"],
    [
      "Excellent Basma, You've got the highest marks on Maths.",
      "Please, Go to the Adminstration to reward you.",
      "You have assigned in the Musium Trip.",
    ]
  ),
];

// console.log(allStudents[0]._news());
// console.log(allStudents[0]._test(), "we got it");
