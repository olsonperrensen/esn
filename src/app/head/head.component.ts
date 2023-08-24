import {Component, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;
  public isMenuOpen: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  public onSidenavClick(): void {
    this.sidenav.toggle();
    this.isMenuOpen = false;
  }
}
