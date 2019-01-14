export class Quote {
  public showDescription:boolean; //responsible for output property binding displaying
  constructor(public id:number, public quot:string, public author:string ,public submitter:string){
  this.showDescription=false;
}
}
