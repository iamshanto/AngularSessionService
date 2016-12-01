import { Component, OnInit } from '@angular/core';
import {LogService} from "../../log.service";

@Component({
  selector: 'team-c',
  templateUrl: './team-c.component.html',
  styleUrls: ['./team-c.component.css']
})
export class TeamCComponent implements OnInit {

  msg:string = '';

  constructor(private logService: LogService) {

    this.logService.userLoggedIn.subscribe(
        data => alert(data)
    );
  }

  ngOnInit() {

  }

}
