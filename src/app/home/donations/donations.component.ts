import { Component, OnInit } from '@angular/core';
import {  IUser } from 'src/app/core/interfaces/IUser';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

   public donators: IUser[];


  constructor() {
        this.donators = [
            { id: 1,
                name: 'Eleonora Saimaon',
                image: '../../../assets/images/user1.png',
                amount: 60,
                date: '22 Oct 16:04'
            },
            { id: 1,
                name: 'Anna Smith',
                image: '../../../assets/images/user2.png',
                amount: 40,
                date: '22 Oct 16:04'
            },
            { id: 1,
                name: 'Romen Joseph Smith',
                image: '',
                amount: 50,
                date: '22 Oct 16:04'
            },
            { id: 1,
                name: 'Eleonora Saimaon',
                image: '../../../assets/images/user4.png',
                amount: 70,
                date: '22 Oct 16:04'
            },
            { id: 1,
                name: 'Tontri Qutier',
                image: '../../../assets/images/user5.png',
                amount: 80,
                date: '22 Oct 16:04'
            },
            { id: 1,
                name: 'Gilian Silence',
                image: '../../../assets/images/user6.png',
                amount: 150,
                date: '22 Oct 16:04'
            }
        ];
  }

  ngOnInit(): void {
  }

}
