import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    { url: 'https://www.esntilburg.nl/wp-content/uploads/2021/08/IESNGoesToCologne-001-scaled.jpg', title: 'About' },
    { url: 'https://www.esntilburg.nl/wp-content/uploads/2021/08/20210814_IESN_BAMReunion-024-scaled.jpg', title: 'Events' },
    { url: 'https://www.esntilburg.nl/wp-content/uploads/2021/08/20201112-BAM-Promo-Spring-2021-084-scaled.jpg', title: 'Volunteer' },
    { url: 'https://www.esntilburg.nl/wp-content/uploads/2021/08/IESNWinterTopWeekTequila-061-scaled.jpg', title: 'Events' },
    { url: 'https://www.esntilburg.nl/wp-content/uploads/2021/08/20191002_IC_TCB_Fotografie-Jules-van-Iperen_008-Copy-scaled.jpg', title: 'ESNcard' },
    { url: 'https://www.esntilburg.nl/wp-content/uploads/2021/08/20210330_BAM_Isabel-036-scaled.jpg', title: 'Buddies' }
    // ... add more image objects
  ];
}
