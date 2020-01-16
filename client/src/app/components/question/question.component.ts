import { Component, OnInit, EventEmitter, Input,Output  } from '@angular/core';

import { QuestionService } from '../../services/question/question.service';
import { LocalStorageService } from '../../services/local-storage.service';


import TypeIt from 'typeit';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question:any;
  @Output() questionOutput = new EventEmitter();
  @Output() autoText = new EventEmitter();
  @Output() childrens = new EventEmitter();

  choice:any = false;
  onlyChoice = false;
  childrensChoice:any;
  option:any = false;
  text:string;

  constructor(
    private _question:QuestionService,
    private _localStorage:LocalStorageService
  ) { }

  ngOnInit() {
  }



  async selectChoice(choice:any){

    this._localStorage.set('proyect.type',choice.title);

    if (choice.type == 'multiple') {
      this.choice = choice;
      this.choice.questions[0].selected = true;
    }

    this.outputText(choice.text);

  }

  insideQuestion(question){
    this.option = true;
  }

  selectOption(question,option){

    this._localStorage.set(question.title,option.value);
    let index = this.choice.questions.findIndex((c) => c === question);

    this.choice.questions[index].selected = false;

    if (this.choice.questions[index + 1] == undefined) {
      this.choice = false;
      this.questionOutput.emit({question:this.question});
    }else{
      this.choice.questions[index + 1].selected = true;
    }

    if (option.text) {
      this.outputText(option.text);
    }

  }


  selectOptionSimple(question,option){

    console.log(question,option)

    if (option.text) {
      this.outputText(option.text);
    }

    let data = {
      value:option.value,
      description: option.description,
      period: option.period
    };

    this._localStorage.set(question.title,data);
    this.questionOutput.emit({question:this.question});
  }

  outputText(text){
    // this.text += text;

    this.autoText.emit({text:text});
  }



}
