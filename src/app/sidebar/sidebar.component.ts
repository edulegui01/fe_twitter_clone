import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{

  username = localStorage.getItem('username');
  nombre = localStorage.getItem('nombre');
  apellido = localStorage.getItem('apellido');

  followersCount!:number;
  followingCount!:number;

  constructor( private sidebarService:SidebarService,  private router: Router,) {

    
  }


  ngOnInit(){

    this.sidebarService.getFollowersCount(this.username).subscribe(result => {
      this.followersCount = result;
    })

    this.sidebarService.getFollowingsCount(this.username).subscribe(result => {
      this.followingCount = result;
    })

    console.log("fasdfds");

  }


  goHome(){
    this.router.navigate(['/home'])
  }

  goPerfil(){
    this.router.navigate([`/perfil/${this.username}`])
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();

    this.router.navigate([''])

  }

}
