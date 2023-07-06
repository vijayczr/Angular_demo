import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {

  serverId : number = 10;
  serveStatus : string = "Offline";
  allownewserver = false;
  serverName = "";

  constructor(){
    setTimeout(()=> {
      this.allownewserver = true;
    },2000);
  }

  getserverstatus(){
    return this.serveStatus;
  }

  oncreateserver(){
    this.serveStatus = "server was created!";
  }

  onupdateserver(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}
