import { Component, OnInit, EventEmitter, Input,Output  } from '@angular/core';


import TypeIt from 'typeit';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question:string;
  @Output() autoText = new EventEmitter();
  @Output() nextQuestion = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectChoice(choice,question){
    // alert(choice.autoText)

    this.autoText.emit({text:choice.autoText})
    this.nextQuestion.emit({question:question});
  }

}
