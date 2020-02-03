import { Component, OnInit } from '@angular/core';


import { QuestionService } from '../../services/question/question.service';
import { StageService } from '../../services/stage/stage.service';
import { LocalStorageService } from '../../services/local-storage.service';

// import { TypewriterService, TypewriterContent } from "ng2-typewriter";

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
  instance;
  strings = [];

  constructor(
    private _question:QuestionService,
    private _stage:StageService,
    private _localStorage:LocalStorageService
  ) { }

  ngOnInit() {
    // this.getFirstQuestions();


    this.instance = new TypeIt("#auto-text", {
      speed: 100,
      startDelay: 900,
      waitUntilVisible:true
    }).go();

    // this.instance = new TypeIt("#auto-text", {
    //   strings: "After 500ms, pause for 3 seconds and resume."
    // }).go();

    // setTimeout(() => {
    //   instance.freeze();
    //   console.log('pause')

    //   setTimeout(() => {
    //     instance.unfreeze();
    //     console.log('start')
    //   }, 3000);
    // }, 3000);







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
     // this.instance.unfreeze();


    this.strings.push(' '+$event.text);

    // let class = ".string-"+(this.strings.length -1);

    this.instance = new TypeIt("#string-"+(this.strings.length -1), {
      speed: 100,
      startDelay: 900,
      string:' '+$event.text,
      waitUntilVisible:true
    }).go();

    console.log(this.strings.length)


    // this.instance.reset();
    // this.instance.type(' '+$event.text);

    // this.instance.freeze();





  }

  childrens($event):void{
    // let questions = $event.questions;

    this.tempQuestion = $event.questions;

    this.showQuestion(this.tempQuestion[0])

  }

}
