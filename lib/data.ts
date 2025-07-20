/*
  Content 
  -interface studentGrades
  -class Student
  -class StudentBuilder
  -const allStudents
*/

import allExams from "./exams";

interface studentGrades {
  score: null | number;
  examId: number;
}

class Student {
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
    name: String,
    userName: String,
    password: String,
    examsIds: studentGrades[],
    image: String,
    grade: number,
    quote: String,
    yearBorn: number,
    location: String,
    hobbies: String[],
    personalNews: String[]
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
  private _examsFinished(examInputs: studentGrades[]): studentGrades[] {
    // console.log(examInputs);

    // console.log(examInputs.filter(x => x.score))
    return examInputs.filter((exam) => exam.score);
  }
  private _progress(examsIds: studentGrades[]): String {
    //4=>100%     (all exams)
    //2=>?        (exams done)
    //ans 2*100   /4
    const ans = (this.examsFinished.length * 100) / examsIds.length;
    return Math.floor(ans).toString();
  }
  private _totalScore(): String {
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
  private _gradeLetter(): String {
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
  private _age(): number {
    return new Date().getFullYear() - this.yearBorn;
  }
  private _firstMsg(): String {
    const ifRemaining = this.examsIds.length !== this.examsFinished.length;
    const { examsFinished: x, examsIds: a } = this;
    const trueRemained = `You have finished ${x.length} ${
      x.length > 1 ? "exams" : "exam"
    }, But still ${a.length - x.length} remaining.`;
    const noRemaining = `Good Job, You have finished your all exams successfully.`;
    return ifRemaining ? trueRemained : noRemaining;
  }
  private _news(): String[] {
    // general news to all students
    const generalNews = [
      "The school reached semi-final competition of karate.",
    ];
    return generalNews;
  }
  private _examDetails() {
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
class StudentBuilder {
  private name: String;
  private userName: String;
  private password: String;
  private examsIds: studentGrades[];
  private image: String;
  private grade: number;
  private quote: String;
  private yearBorn: number;
  private location: String;
  private hobbies: String[];
  private personalNews: String[] = [];

  public setName(name: String) {
    this.name = name;
    return this;
  }
  public setUserName(userName: String) {
    this.userName = userName;
    return this;
  }
  public setPassword(password: String) {
    this.password = password;
    return this;
  }
  public setExamsIds(examsIds: studentGrades[]) {
    this.examsIds = examsIds;
    return this;
  }
  public setImage(image: String) {
    this.image = image;
    return this;
  }
  public setGrade(grade: number) {
    this.grade = grade;
    return this;
  }
  public setQuote(quote: String) {
    this.quote = quote;
    return this;
  }
  public setYearBorn(yearBorn: number) {
    this.yearBorn = yearBorn;
    return this;
  }
  public setLocation(location: String) {
    this.location = location;
    return this;
  }
  public setHobbies(hobbies: String[]) {
    this.hobbies = hobbies;
    return this;
  }
  public setPersonalNews(personalNews: String[]) {
    this.personalNews = personalNews;
    return this;
  }
  public build() {
    return new Student(
      this.name,
      this.userName,
      this.password,
      this.examsIds,
      this.image,
      this.grade,
      this.quote,
      this.yearBorn,
      this.location,
      this.hobbies,
      this.personalNews
    );
  }
}

export const allStudents: Student[] = [
  new StudentBuilder()
    .setImage("/stud3.jpg")
    .setGrade(9)
    .setExamsIds([
      { examId: 1, score: 12 },
      { examId: 2, score: 49 },
      { examId: 3, score: 60 },
    ])
    .setUserName("Hesh-Abdo")
    .setPassword("Hesham@98")
    .setQuote("being active, It does mean eagle eye.")
    .setYearBorn(1998)
    .setName("Hesham Abdelazim Kamel Ahmed")
    .setLocation("Alexandria - Egypt")
    .setPersonalNews([
      "Please come to the adminstration with your parents.",
      "You have assigned in the Musium Trip.",
    ])
    .setHobbies(["Passionate", "Active", "Games", "Fast Tasker"])
    .build(),
  new StudentBuilder()
    .setName("Hossam Ahmed Hassan Ahmed")
    .setUserName("Hos-Ahmed")
    .setPassword("Hossam@98")
    .setExamsIds([
      { examId: 1, score: null },
      { examId: 2, score: 30 },
      { examId: 3, score: 55 },
    ])
    .setGrade(5)
    .setImage("/stud2.jpg")
    .setQuote("I believe I can fly.")
    .setYearBorn(1990)
    .setLocation("Mansora - Egypt")
    .setHobbies(["Hard Worker", "vision", "social", "kind"])
    .setPersonalNews([
      "Excellent big champ Hossam on Karate, Please go to the Adminstration for reward.",
      "You have assigned in the Musium Trip.",
    ])
    .build(),
  new StudentBuilder()
    .setName("Basma Essa Ga'fr khaled")
    .setUserName("Basma-Essa")
    .setGrade(10)
    .setImage("/female-stud.png")
    .setPassword("Basma@98")
    .setExamsIds([
      { examId: 1, score: 70 },
      { examId: 2, score: null },
      { examId: 3, score: 80 },
    ])
    .setYearBorn(1994)
    .setQuote("I'm learning to serve people on earth to seek Allah's path.")
    .setLocation("Cairo - Egypt")
    .setHobbies(["Decision Maker", "Case Studying", "Movies"])
    .setPersonalNews([
      "Excellent Basma, You've got the highest marks on Maths.",
      "Please, Go to the Adminstration to reward you.",
      "You have assigned in the Musium Trip.",
    ])
    .build(),
];
