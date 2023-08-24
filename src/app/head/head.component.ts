import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  public isMenuOpen: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
