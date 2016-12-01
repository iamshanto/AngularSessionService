import { Component, OnInit } from '@angular/core';
import {LogService} from "../../log.service";

@Component({
  selector: 'team-a',
  templateUrl: './team-a.component.html',
  styleUrls: ['./team-a.component.css']
})
export class TeamAComponent implements OnInit {
  prefix = 'Team A: ';

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
