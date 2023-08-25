import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit{
  ngOnInit() {
    window.location.href = 'https://esncard.org/discover/list?query=mechelen'
  }
}