import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public finishDate = new Date(2020, 10, 25);
  public donateNumber = 1982;
  public currentDate = new Date();
  public collactedDonates = 1132500;
  public numberOfDonators = 1982;


  constructor() {}

  ngOnInit(): void {
  }

}
