import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){
    localStorage.removeItem('signup-data');
  }

}
