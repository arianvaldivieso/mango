import { Component, OnInit } from '@angular/core';

import TypeIt from 'typeit';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  questions = [
    {
        level: 0,
        title: "Cosa vuoi rinnovare?",
        type:'choice',
        choices: [
          {
            img:'/assets/icons/png/001-apartment.png',
            title:'APPARTAMENTO /  LOFT',
            key:'type_of_remodeling',
            value:'apartment',
            autoText: 'Voglio rinnovare a <b>APPARTAMENTO /  LOFT</b>',
            choices:[
              {
                title:'Raccontaci i metri quadrati',
                type:'choice',
                key:'mq',
                choices:[
                  40,50,60,70,80,90,100,110,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400
                ]
              }

            ]
          },
          {
            img:'/assets/icons/png/016-house.png',
            title:'VILLA INDIPENDENTE',
            key:'type_of_remodeling',
            value:'independent_villa',
            autoText: 'Voglio rinnovare a <b>VILLA INDIPENDENTE</b>',
          },
          {
            img:'/assets/icons/png/020-house-3.png',
            title:'CASA SU PIU\' PIANI',
            key:'type_of_remodeling',
            value:'house_in_plans',
            autoText: 'Voglio rinnovare a <b>CASA SU PIU\' PIANI</b>',
          }
        ],
     }
   ];

   question;
   questionTitle;
   autoTextString = '';


  constructor() { }

  ngOnInit() {

    this.questionTitle = new TypeIt('#question-title', {
      speed: 0
    })


    this.showQuestion(this.questions[0]);

  }

  showQuestion(question){

    this.question = question;

    this.questionTitle.empty()
      .type(question.title)
      .go();
  }



  autoText($event):void{

    this.autoTextString += $event.text;

  }

  nextQuestion($event):void{
    let question = $event.question;

    if(question.level === 0){

    }


  }

}
