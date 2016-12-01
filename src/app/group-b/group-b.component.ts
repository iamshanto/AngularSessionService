import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'group-b',
  templateUrl: './group-b.component.html',
  styleUrls: ['./group-b.component.css']
})
export class GroupBComponent implements OnInit {

  showTeamC: boolean= true;
  showTeamD: boolean= true;

  constructor() { }

  ngOnInit() {
  }

}
