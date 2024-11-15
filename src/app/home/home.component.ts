import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeService } from './home.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tweetForm!: FormGroup;

  totalTweets:any = [];
  tweetData!:any;


  constructor( private homeService:HomeService,private formBuilder: FormBuilder,) {
    this.tweetForm = this.formBuilder.group({
      tweet: ['', [Validators.required, Validators.maxLength(280)]],
    });
    
  }


  ngOnInit(){
    this.homeService.getTotalTweets().subscribe(result => {
      this.totalTweets = result;
    })
  }


  saveTweet(){
    this.tweetData = {
      userId: localStorage.getItem('username'),
      tweet: this.tweetForm.controls['tweet'].value,
    }


    this.homeService.saveTweet(this.tweetData).subscribe({
      next: (result) => {
        this.homeService.getTotalTweets().subscribe(result => {
          this.totalTweets = result;
        })

        this.tweetForm.get('tweet')?.setValue('');
      },
      error: (err) => {
        alert('El tweet supera los 280 caracteres')
      }
    })
  }




}
