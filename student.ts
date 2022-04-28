 export default class Students {
  //field
  fName: string;
  lName: string;
  //constructor
  constructor(fName: string, lName: string) {
    this.fName = fName;
    this.lName = lName;
  }
  //function
  GetFullName(): string {
    return this.fName + "..." + this.lName;
  }
}
