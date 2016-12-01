import {Component, OnInit, EventEmitter, OnDestroy} from '@angular/core';
import {LogService} from "../../log.service";

@Component({
  selector: 'team-d',
  templateUrl: './team-d.component.html',
  styleUrls: ['./team-d.component.css']
})
export class TeamDComponent implements OnInit, OnDestroy {

  msg:string = '';
  hachSubs;
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.hachSubs = this.logService.systemHacked.subscribe(
        data => alert(data)
    );
  }

  ngOnDestroy(){
    this.hachSubs.unsubscribe();
    alert('destroy');
  }

}
