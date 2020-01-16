import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  @Input() stage:any = false;
  @Output() stageOutput = new EventEmitter();
  @Output() autoText = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.stage.questions[0].selected = true;
  }

  moveQuestion($event){


    let question = $event.question;
    let index = this.stage.questions.findIndex((c) => c === question);

    this.stage.questions[index].selected = false;

    if (this.stage.questions[index + 1] == undefined) {
      alert('pasar al siguiente stage')
      this.stageOutput.emit({stage:this.stage});
    }else{
      this.stage.questions[index + 1].selected = true;
    }

  }

  outputText($value){
    this.autoText.emit({text:$value.text});
  }

}
