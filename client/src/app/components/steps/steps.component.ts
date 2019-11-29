import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  previous:any;

  inputValue:any = 10;

  steps = [
    {
      title:'Cosa farai rimodellamento?',
      choices:[
        {
          img:'/assets/icons/png/001-apartment.png',
          title:'APPARTAMENTO /  LOFT',
          key:'type_of_remodeling',
          value:'apartment',
          selected:false,
          questionChildren:[
            {
              title:'Metri quadri?',
              img:'/assets/icons/png/area.png',
              type:'choice',
              key:'square-meter',
              selected:true,
              choices:[
                {
                  title:'se',
                  img:'/assets/icons/png/positive-vote.png',
                  key:'lot',
                  value:1
                },
                {
                  title:'noe',
                  img:'/assets/icons/png/negative-vote.png',
                  key:'lot',
                  value: () => {
                      let landUse = 150;
                      this.localStorageService.set('land_use',landUse);
                      // let squareMeter = parseInt(this.localStorageService.get('square-meter'));
                     return 0;
                  }
                }
              ]
            },
            {
              title:'A CHE PIANO SI TROVA ?',
              img:'/assets/icons/png/sketch.png',
              type:'input',
              inputType:'text',
              key:'plan',
              selected:false
            },
            {
              title:'HAI UN AREA PRIVATA PER LO SCARICO MATERIALE E DEPOSITO MACERIE',
              img:'/assets/icons/png/distribution.png',
              type:'choice',
              key:'lot',
              selected:false,
              choices:[
                {
                  title:'se',
                  img:'/assets/icons/png/positive-vote.png',
                  key:'lot',
                  value:1
                },
                {
                  title:'noe',
                  img:'/assets/icons/png/negative-vote.png',
                  key:'lot',
                  value: () => {
                      let landUse = 150;
                      this.localStorageService.set('land_use',landUse);
                      // let squareMeter = parseInt(this.localStorageService.get('square-meter'));
                     return 0;
                  }
                }
              ]
            }
          ]
        },
        {
          img:'/assets/icons/png/016-house.png',
          title:'VILLA INDIPENDENTE',
          key:'type_of_remodeling',
          value:'independent_villa',
          selected:false,
          questionChildren:[
            {
              title:'Metri quadri?',
              img:'/assets/icons/png/area.png',
              type:'input',
              inputType:'number',
              key:'square-meter',
              selected:true
            },
            {
              title:'DI QUANTI PIANI?',
              img:'/assets/icons/png/sketch.png',
              type:'input',
              inputType:'number',
              key:'numbers-plans',
              selected:false
            },
            {
              title:'HAI UNA MANSARDA',
              img:'/assets/icons/png/windows.png',
              type:'choice',
              key:'windows',
              selected:false,
              choices:[
                {
                  title:'se',
                  img:'/assets/icons/png/positive-vote.png',
                  key:'windows',
                  value:1
                },
                {
                  title:'noe',
                  img:'/assets/icons/png/negative-vote.png',
                  key:'windows',
                  value:0
                }
              ]
            },
            {
              title:'HAI UNA TAVERNETTA',
              img:'/assets/icons/png/absinthe.png',
              type:'choice',
              key:'bar',
              selected:false,
              choices:[
                {
                  title:'se',
                  img:'/assets/icons/png/positive-vote.png',
                  key:'bar',
                  value:1
                },
                {
                  title:'noe',
                  img:'/assets/icons/png/negative-vote.png',
                  key:'bar',
                  value:0
                }
              ]
            }

          ]
        },
        {
          img:'/assets/icons/png/020-house-3.png',
          title:'CASA SU PIU\' PIANI',
          key:'type_of_remodeling',
          value:'house_in_plans',
          selected:false,
          questionChildren:[
            {
              title:'Metri quadri?',
              img:'/assets/icons/png/area.png',
              type:'input',
              inputType:'number',
              key:'square-meter',
              selected:true
            },
            {
              title:'A CHE PIANO SI TROVA?',
              img:'/assets/icons/png/sketch.png',
              type:'input',
              inputType:'text',
              key:'plan',
              selected:false
            },
            {
              title:'HAI UNA MANSARDA?',
              img:'/assets/icons/png/windows.png',
              type:'choice',
              key:'windows',
              selected:false,
              choices:[
                {
                  title:'se',
                  img:'/assets/icons/png/positive-vote.png',
                  key:'windows',
                  value:1
                },
                {
                  title:'noe',
                  img:'/assets/icons/png/negative-vote.png',
                  key:'windows',
                  value:0
                }
              ]
            },
            {
              title:'HAI UNA TAVERNETTA?',
              img:'/assets/icons/png/absinthe.png',
              type:'choice',
              key:'bar',
              selected:false,
              choices:[
                {
                  title:'se',
                  img:'/assets/icons/png/positive-vote.png',
                  key:'bar',
                  value:1
                },
                {
                  title:'noe',
                  img:'/assets/icons/png/negative-vote.png',
                  key:'bar',
                  value:0
                }
              ]
            }
          ]
        }
      ],
      selected:true
    }
  ];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {

    // this.selectChoice(this.steps[0].choices[2],this.steps[0]);
  }

  selectChoice(choice,step,value = null){

    this.previous = this.steps;

    step.choices.forEach((choice) => {choice.selected = false;});



    choice.selected = true;

    if (choice.questionChildren) {
      setTimeout(() => {
        this.steps = choice.questionChildren;
      },1000)
    }else{

      let value;

      if (typeof choice.value === 'function') {
        this.localStorageService.set(choice.key,choice.value());
      }else{
        this.localStorageService.set(choice.key,choice.value);
      }

      let found = this.steps.findIndex((s) => {
        return s == step;
      });

      this.steps[found].selected = false;

      if ((found + 1) <= (this.steps.length - 1)) {
        this.steps[found + 1].selected = true;
      }

    }


  }

  setValue(key,step){

    let found = this.steps.findIndex((s) => {
      return s == step;
    });

    this.localStorageService.set(key,this.inputValue);

    this.inputValue = null;

    this.steps[found].selected = false;

    if ((found + 1) <= (this.steps.length - 1)) {
      this.steps[found + 1].selected = true;
    }

  }

}
