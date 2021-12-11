import { Tutorial } from './../../models/tutorial.model';
import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  tutorial:Tutorial = {
    id:0,
    title:'',
    description:'',
    published:true,
  }
  public submitted:boolean = false;

  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
    console.log(this.tutorial)
    console.log(this.newTutorial())
  }

  public saveTutorial():void{
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
      this.tutorialService.create(data)
        .subscribe(response =>{
          this.submitted = true
        console.log(response)
    },
    error =>{
      console.log(error);
    });

  }

  public newTutorial():void{
    this.submitted = false;
    this.tutorial = {
      id: 0,
      title:'',
      description:'',
      published:false
    };
  }
  
}
