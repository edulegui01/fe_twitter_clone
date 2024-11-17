import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { PerfilService } from './perfil.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {


  username:string|null ='';
  followersCount!:number;
  followingCount!:number;
  tweets:any = [];

  constructor( private sidebarService:SidebarService, private perfilService:PerfilService, private route: ActivatedRoute,private router: Router,) {
    this.username = this.route.snapshot.paramMap.get('username');
    
  }


  ngOnInit(){

    this.sidebarService.getFollowersCount(this.username).subscribe(result => {
      this.followersCount = result;
    })

    this.sidebarService.getFollowingsCount(this.username).subscribe(result => {
      this.followingCount = result;
    })

    this.perfilService.getTweets(this.username).subscribe(result => {
      this.tweets = result;
    })

    

  }


  goFollowers(){
    this.router.navigate([`/list/${this.username}`], { state: {followers:true } });
  }

  goFollowing(){
    this.router.navigate([`/list/${this.username}`], { state: {followers:false } });
  }

}
