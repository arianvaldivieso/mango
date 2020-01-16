import { Component, OnInit } from '@angular/core';


import { QuestionService } from '../../services/question/question.service';
import { StageService } from '../../services/stage/stage.service';
import { LocalStorageService } from '../../services/local-storage.service';

import TypeIt from 'typeit';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  stages:any;
  question:any;
  questions;
  tempQuestion:any;
  text:string = '';

  constructor(
    private _question:QuestionService,
    private _stage:StageService,
    private _localStorage:LocalStorageService
  ) { }

  ngOnInit() {
    // this.getFirstQuestions();

    this.getStages();
    this._localStorage.clear();
  }


  async getStages(){
    this.stages = await this._stage.getStages();

    this.stages[0].selected = true;
  }

  moveStage($event){


    let stage = $event.stage;
    let index = this.stages.findIndex((c) => c === stage);

    console.log(stage,index)
    console.log(this.stages)

    this.stages[index].selected = false;

    if (this.stages[index + 1] == undefined) {
      alert('finalizado todo')
    }else{
      this.stages[index + 1].selected = true;
    }

  }


  getFirstQuestions(){
    this._question.getFirstQuestions().subscribe((question) => {
      this.question = question[0];
    });
  }

  showQuestion(question){

    this.question = question;
  }



  autoText($event):void{

    // this.autoTextString += $event.text;

  }

  completeText($event){
    this.text += ' '+$event.text;
  }

  childrens($event):void{
    // let questions = $event.questions;

    this.tempQuestion = $event.questions;

    this.showQuestion(this.tempQuestion[0])

  }

}
