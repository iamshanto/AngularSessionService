import {EventEmitter} from "@angular/core";
export class LogService {

  logMessages:any[] = [];

  userLoggedIn = new EventEmitter<string>();
  systemHacked = new EventEmitter<string>();

  constructor() { }

  writeLog(msg:string){

    if (msg == 'login') {
      this.userLoggedIn.emit(msg);
    }

    if (msg == 'hack') {
      this.systemHacked.emit(msg);
    }

    this.logMessages.push(msg);
    console.log(msg);
  }

  getLog(){
    return this.logMessages;
  }

}
