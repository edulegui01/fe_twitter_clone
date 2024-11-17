import { Component } from '@angular/core';
import { FollowersService } from './followers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  standalone: true,
  imports: [],
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.css'
})
export class FollowersComponent {

  followersList!:any;
  username:string | null='';
  state:any;

  constructor(private followersService:FollowersService, private route: ActivatedRoute){
    this.state = history.state;
    
    this.username = this.route.snapshot.paramMap.get('username');

    console.log(this.state)
  }


  ngOnInit(){
    this.followersService.getFollowers(this.username,this.state.followers).subscribe(result => {
      this.followersList = result;
    })
  }

}
