import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule
  ],
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  // user: any;
  loading: boolean = false;
  showHome: boolean = false;

  constructor(public userService: UserService) { }

  user = {
    "totalUrlPost": 18,
    "urlPost": [
      {
        "status": "02",
        "account_name": "sey.over.90",
        "posts": "This Account is locked or not available",
        "url": "https://www.facebook.com/sey.over.90"
      },
      {
        "status": "00",
        "account_name": "chheang.long.684128",
        "posts": "https://www.facebook.com/chheang.long.684128/posts/pfbid0285KdKqNJ6RYF54V68J1GiA4DWXfvRCnowvcEKpUU1dLSY25jErwdhrKnvz91ZF44l"
      },
      {
        "status": "01",
        "account_name": "mengkong.seakgdi",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "ho.ng.862980",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "ri.tz.12177",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "monyroth.pichh",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "chea.bunya",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "theom.phannyin",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "leng.kimleangnith",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "theary.sou.7",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "sivlysamnang",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "cheab.soktieng",
        "posts": "No new post found today."
      },
      {
        "status": "01",
        "account_name": "kimsok.pozzslot",
        "posts": "No new post found today."
      },
      {
        "status": "02",
        "account_name": "Ps071001",
        "posts": "This Account is locked or not available",
        "url": "https://www.facebook.com/Ps071001"
      },
      {
        "status": "02",
        "account_name": "da.neit.718",
        "posts": "This Account is locked or not available",
        "url": "https://www.facebook.com/da.neit.718"
      },
      {
        "status": "02",
        "account_name": "Dalisakancy",
        "posts": "This Account is locked or not available",
        "url": "https://www.facebook.com/Dalisakancy"
      },
      {
        "status": "02",
        "account_name": "thim.phally.1",
        "posts": "This Account is locked or not available",
        "url": "https://www.facebook.com/thim.phally.1"
      },
      {
        "status": "02",
        "account_name": "sundary.ven",
        "posts": "This Account is locked or not available",
        "url": "https://www.facebook.com/sundary.ven"
      }
    ]
  };

  fetchUser() {
    this.loading = true;
    this.showHome = true;
    console.log("loading ...");
    this.loading = false;

    // this.userService.getUser().subscribe({
    //   next: (data) => {
    //     this.user = data;
    //     console.log("User data:", this.user);
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //     this.loading = false;
    //   }
    // });
  }

}



