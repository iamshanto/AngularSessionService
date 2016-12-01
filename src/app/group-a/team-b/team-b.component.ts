import { Component, OnInit } from '@angular/core';
import {LogService} from "../../log.service";

@Component({
  selector: 'team-b',
  templateUrl: './team-b.component.html',
  styleUrls: ['./team-b.component.css']
})
export class TeamBComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getLog();
  }

  onLog(value: string){
    this.logService.writeLog(value);
  }

  onStore(value: string){
    console.log(value);
  }

  get logMessages():any[]{
    return this.logService.getLog();
  }

}
