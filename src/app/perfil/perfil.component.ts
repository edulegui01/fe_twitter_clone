import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { PerfilService } from './perfil.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor( private sidebarService:SidebarService, private perfilService:PerfilService, private route: ActivatedRoute) {
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

}
