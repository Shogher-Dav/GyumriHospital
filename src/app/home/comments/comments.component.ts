import { Component, OnInit } from '@angular/core';
import {IComment} from 'src/app/core/interfaces/IComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    public comments: IComment[];
    // public comments: any;

  constructor() {
        this.comments = [{
                id: 1,
                text: 'Very good job!',
                image: '',
                user:  {
                    id: 1,
                    name: 'Adam Smith',
                    image: '../../../assets/images/user7.png',
                    amount: 56,
                    date: 'Oct 29 16:47'
                }
            },
            {
                id: 2,
                text: '',
                image: '../../../assets/images/coment-img.png',
                user: {
                    id: 2,
                    name: 'James Stewart',
                    image: '../../../assets/images/user8.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },

            {
                id: 3,
                text: 'Lets get together!!!!',
                image: '',
                user: {
                    id: 3,
                    name: 'Andrew Ralphen-Sow',
                    image: '../../../assets/images/user9.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },


            {
                id: 4,
                text: 'Very good job!',
                image: '',
                user: {
                    id: 4,
                    name: 'Elisabeth Jefferson',
                    image: '../../../assets/images/user10.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },

            {
                id: 5,
                text: 'Very good job!',
                image: '',
                user: {
                    id: 5,
                    name: 'Adam Smith',
                    image: '../../../assets/images/user7.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },

            {
                id: 6,
                text: 'I am glad that some foundation is trying to make our city more beautiful',
                image: '',
                user: {
                    id: 6,
                    name: 'James Stewart',
                    image: '../../../assets/images/user11.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },

            {
                id: 7,
                text: 'Lets get together!!!',
                image: '',
                user: {
                    id: 7,
                    name: 'Andrew Ralphen-Sow',
                    image: '../../../assets/images/user12.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },
            {
                id: 7,
                text: 'Lets get together!!!',
                image: '',
                user: {
                    id: 7,
                    name: 'Andrew Ralphen-Sow',
                    image: '../../../assets/images/user12.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },
              {
                id: 8,
                text: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
                image: '',
                user: {
                    id: 8,
                    name: 'Anna Jefferson',
                    image: '../../../assets/images/user13.png',
                    amount: 56,
                    date: 'Oct 29 16:47',

                }
            },

        ];
    }


  ngOnInit(): void {
  }

}
