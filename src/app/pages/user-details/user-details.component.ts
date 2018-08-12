import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'et-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: string;
  editable = false;

  constructor(private router: ActivatedRoute) {
    this.userId = router.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.router.queryParamMap.subscribe(query => {
      this.editable = query.get('edit') === 'true';
    });
  }

}
