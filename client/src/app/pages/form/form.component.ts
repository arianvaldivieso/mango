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
    // this.stages = await this._stage.getStages();

    this.stages = [
  {
    "id": "1",
    "level": "1",
    "title": "RISTRUTTURAZIONE CASA",
    "questions": [
      {
        "id": "1",
        "title": "Che tipo di progetto hai?",
        "level": "1",
        "img": null,
        "value": null,
        "tag": null,
        "type": "choice",
        "required": true,
        "choices": [
          {
            "id": "1",
            "title": "APPARTAMENTO /  LOFT",
            "type": "multiple",
            "value": null,
            "img": "/assets/icons/png/001-apartment.png",
            "questions": [
              {
                "title": "Quanti metri quadrati?",
                "type": "multiple",
                "options": [
                  {
                    "title": "",
                    "value": 50,
                    "text": "con 50 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 60,
                    "text": "con 60 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 70,
                    "text": "con 70 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 80,
                    "text": "con 80 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 90,
                    "text": "con 90 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 100,
                    "text": "con 100 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 110,
                    "text": "con 110 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 120,
                    "text": "con 120 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 130,
                    "text": "con 130 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 140,
                    "text": "con 140 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 150,
                    "text": "con 150 metri quadrati"
                  }
                ]
              },
              {
                "title": "A CHE PIANO SI TROVA ?",
                "type": "multiple",
                "options": [
                  {
                    "title": "",
                    "value": 1,
                    "text": "e sono sul pavimento 1."
                  },
                  {
                    "title": "",
                    "value": 2,
                    "text": "e sono sul pavimento 2."
                  },
                  {
                    "title": "",
                    "value": 3,
                    "text": "e sono sul pavimento 3."
                  },
                  {
                    "title": "",
                    "value": 4,
                    "text": "e sono sul pavimento 4."
                  },
                  {
                    "title": "",
                    "value": 5,
                    "text": "e sono sul pavimento 5."
                  },
                  {
                    "title": "",
                    "value": 6,
                    "text": "e sono sul pavimento 6."
                  },
                  {
                    "title": "",
                    "value": 7,
                    "text": "e sono sul pavimento 7."
                  },
                  {
                    "title": "",
                    "value": 8,
                    "text": "e sono sul pavimento 8."
                  },
                  {
                    "title": "",
                    "value": 9,
                    "text": "e sono sul pavimento 9."
                  },
                  {
                    "title": "",
                    "value": 10,
                    "text": "e sono sul pavimento 10."
                  }
                ]
              },
              {
                "title": "HAI UN AREA PRIVATA PER LO SCARICO MATERIALE E DEPOSITO MACERIE?",
                "type": "multiple",
                "options": [
                  {
                    "title": "si",
                    "value": 0,
                    "description": [
                      "Valore 0"
                    ]
                  },
                  {
                    "title": "no",
                    "value": 150,
                    "description": [
                      "Pratica di richiesta uso suolo pubblico 150€",
                      "Costo giornaliero uso suolo pubblico  0,338€/mq x 2,5€/giorno (considerare min. 25mq)"
                    ],
                    "period": [
                      "3 settimane"
                    ]
                  }
                ]
              }
            ],
            "text": "Il mio progetto è di tipo appartamento"
          },
          {
            "id": "2",
            "title": "VILLA INDIPENDENTE",
            "type": "multiple",
            "value": null,
            "img": "/assets/icons/png/016-house.png",
            "questions": [
              {
                "title": "Quanti metri quadrati?",
                "type": "multiple",
                "options": [
                  {
                    "title": "",
                    "value": 50,
                    "text": "con 50 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 60,
                    "text": "con 60 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 70,
                    "text": "con 70 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 80,
                    "text": "con 80 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 90,
                    "text": "con 90 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 100,
                    "text": "con 100 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 110,
                    "text": "con 110 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 120,
                    "text": "con 120 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 130,
                    "text": "con 130 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 140,
                    "text": "con 140 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 150,
                    "text": "con 150 metri quadrati"
                  }
                ]
              },
              {
                "title": "DI QUANTI PIANI?",
                "type": "multiple",
                "options": [
                  {
                    "title": "",
                    "value": 1,
                    "text": "e ha 1 piano / i."
                  },
                  {
                    "title": "",
                    "value": 2,
                    "text": "e ha 2 piano / i."
                  },
                  {
                    "title": "",
                    "value": 3,
                    "text": "e ha 3 piano / i."
                  },
                  {
                    "title": "",
                    "value": 4,
                    "text": "e ha 4 piano / i."
                  },
                  {
                    "title": "",
                    "value": 5,
                    "text": "e ha 5 piano / i."
                  },
                  {
                    "title": "",
                    "value": 6,
                    "text": "e ha 6 piano / i."
                  },
                  {
                    "title": "",
                    "value": 7,
                    "text": "e ha 7 piano / i."
                  },
                  {
                    "title": "",
                    "value": 8,
                    "text": "e ha 8 piano / i."
                  },
                  {
                    "title": "",
                    "value": 9,
                    "text": "e ha 9 piano / i."
                  },
                  {
                    "title": "",
                    "value": 10,
                    "text": "e ha 10 piano / i."
                  }
                ]
              },
              {
                "title": "HAI UNA MANSARDA?",
                "type": "multiple",
                "options": [
                  {
                    "title": "si",
                    "value": 0
                  },
                  {
                    "title": "no",
                    "value": 0
                  }
                ]
              },
              {
                "title": "HAI UNA TAVERNETTA?",
                "type": "multiple",
                "options": [
                  {
                    "title": "si",
                    "value": 0
                  },
                  {
                    "title": "no",
                    "value": 0
                  }
                ]
              }
            ],
            "text": "Il mio progetto è una villa indipendente"
          },
          {
            "id": "3",
            "title": "CASA SU PIU' PIANI",
            "type": "multiple",
            "value": null,
            "img": "/assets/icons/png/020-house-3.png",
            "questions": [
              {
                "title": "Quanti metri quadrati?",
                "type": "multiple",
                "options": [
                  {
                    "title": "",
                    "value": 50,
                    "text": "con 50 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 60,
                    "text": "con 60 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 70,
                    "text": "con 70 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 80,
                    "text": "con 80 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 90,
                    "text": "con 90 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 100,
                    "text": "con 100 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 110,
                    "text": "con 110 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 120,
                    "text": "con 120 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 130,
                    "text": "con 130 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 140,
                    "text": "con 140 metri quadrati"
                  },
                  {
                    "title": "",
                    "value": 150,
                    "text": "con 150 metri quadrati"
                  }
                ]
              },
              {
                "title": "A CHE PIANO SI TROVA?",
                "type": "multiple",
                "options": [
                  {
                    "title": "",
                    "value": 1,
                    "text": "e sono sul pavimento 1."
                  },
                  {
                    "title": "",
                    "value": 2,
                    "text": "e sono sul pavimento 2."
                  },
                  {
                    "title": "",
                    "value": 3,
                    "text": "e sono sul pavimento 3."
                  },
                  {
                    "title": "",
                    "value": 4,
                    "text": "e sono sul pavimento 4."
                  },
                  {
                    "title": "",
                    "value": 5,
                    "text": "e sono sul pavimento 5."
                  },
                  {
                    "title": "",
                    "value": 6,
                    "text": "e sono sul pavimento 6."
                  },
                  {
                    "title": "",
                    "value": 7,
                    "text": "e sono sul pavimento 7."
                  },
                  {
                    "title": "",
                    "value": 8,
                    "text": "e sono sul pavimento 8."
                  },
                  {
                    "title": "",
                    "value": 9,
                    "text": "e sono sul pavimento 9."
                  },
                  {
                    "title": "",
                    "value": 10,
                    "text": "e sono sul pavimento 10."
                  }
                ]
              },
              {
                "title": "HAI UNA MANSARDA?",
                "type": "multiple",
                "options": [
                  {
                    "title": "si",
                    "value": 0
                  },
                  {
                    "title": "no",
                    "value": 0
                  }
                ]
              },
              {
                "title": "HAI UNA TAVERNETTA?",
                "type": "multiple",
                "options": [
                  {
                    "title": "si",
                    "value": 0
                  },
                  {
                    "title": "no",
                    "value": 0
                  }
                ]
              }
            ],
            "text": "Il mio progetto è di casa su più piani"
          }
        ]
      },
      {
        "id": "2",
        "title": "Quanti Bagni?",
        "level": "1",
        "img": null,
        "value": null,
        "tag": null,
        "type": "simple",
        "required": "1",
        "options": [
          {
            "title": "",
            "value": 1,
            "text": "ha 1 bagno / i"
          },
          {
            "title": "",
            "value": 2,
            "text": "ha 2 bagno / i"
          },
          {
            "title": "",
            "value": 3,
            "text": "ha 3 bagno / i"
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "level": "2",
    "title": "SERVIZI PRINCIPALI",
    "questions": [
      {
        "id": "1",
        "title": "PAVIMENTI",
        "level": "1",
        "img": "/assets/icons/png/area.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "Voglio modificare solo una parte del pavimento",
            "value": null,
            "description": [
              "50% della sup.totale per sup. < 100mq",
              "30% della sup.totale per sup. > 100mq",
              "Demolizione 30€/mq",
              "Posa 30€/mq"
            ],
            "period": [
              "Demolizione - 30 minuti/mq",
              "Posa - 30 minuti/mq"
            ],
            "text": ", Includerò lavori sul pavimento"
          },
          {
            "title": "Voglio modificare l'intero piano",
            "value": null,
            "description": [
              "sup.totale",
              "Demolizione 30€/mq",
              "Posa 30€/mq"
            ]
          }
        ]
      },
      {
        "id": "2",
        "title": "PIASTRELLE",
        "level": "1",
        "img": "/assets/icons/png/tiles.png",
        "value": null,
        "tag": "tiles",
        "type": "multiple",
        "required": false,
        "description": [
          "Demolizione 30€/mq",
          "Posa 25€/mq"
        ],
        "period": [
          "Demolizione - 30 minuti/mq",
          "Posa - 20 minuti/mq"
        ],
        "question": {
          "title": "Quanti mq stanza?",
          "type": "multiple",
          "note": "mq = Perimetro * 1,80m",
          "options": [
            {
              "title": "",
              "value": 50,
              "text": ", modificherò 50 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 60,
              "text": ", modificherò 60 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 70,
              "text": ", modificherò 70 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 80,
              "text": ", modificherò 80 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 90,
              "text": ", modificherò 90 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 100,
              "text": ", modificherò 100 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 110,
              "text": ", modificherò 110 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 120,
              "text": ", modificherò 120 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 130,
              "text": ", modificherò 130 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 140,
              "text": ", modificherò 140 metri quadrati di piastrelle"
            },
            {
              "title": "",
              "value": 150,
              "text": ", modificherò 150 metri quadrati di piastrelle"
            }
          ]
        }
      },
      {
        "id": "3",
        "title": "ABBATTERE MURO",
        "level": "1",
        "img": "/assets/icons/png/demolition.png",
        "value": null,
        "tag": "tiles",
        "type": "multiple",
        "required": false,
        "description": [
          "CILA + CATASTO 1000€ + 50€ (diritti)",
          "Demolizione 30€/mq"
        ],
        "period": [
          "6 settimane max",
          "30 minuti/mq"
        ],
        "question": {
          "title": "Quanti ml?",
          "type": "multiple",
          "options": [
            {
              "title": "",
              "value": 1,
              "text": ", con 1 millimetri di muro"
            },
            {
              "title": "",
              "value": 2,
              "text": ", con 2 millimetri di muro"
            },
            {
              "title": "",
              "value": 3,
              "text": ", con 3 millimetri di muro"
            },
            {
              "title": "",
              "value": 4,
              "text": ", con 4 millimetri di muro"
            },
            {
              "title": "",
              "value": 5,
              "text": ", con 5 millimetri di muro"
            },
            {
              "title": "",
              "value": 6,
              "text": ", con 6 millimetri di muro"
            },
            {
              "title": "",
              "value": 7,
              "text": ", con 7 millimetri di muro"
            },
            {
              "title": "",
              "value": 8,
              "text": ", con 8 millimetri di muro"
            },
            {
              "title": "",
              "value": 9,
              "text": ", con 9 millimetri di muro"
            },
            {
              "title": "",
              "value": 10,
              "text": ", con 10 millimetri di muro"
            },
            {
              "title": "",
              "value": 11,
              "text": ", con 11 millimetri di muro"
            },
            {
              "title": "",
              "value": 12,
              "text": ", con 12 millimetri di muro"
            },
            {
              "title": "",
              "value": 13,
              "text": ", con 13 millimetri di muro"
            },
            {
              "title": "",
              "value": 14,
              "text": ", con 14 millimetri di muro"
            },
            {
              "title": "",
              "value": 15,
              "text": ", con 15 millimetri di muro"
            },
            {
              "title": "",
              "value": 16,
              "text": ", con 16 millimetri di muro"
            },
            {
              "title": "",
              "value": 17,
              "text": ", con 17 millimetri di muro"
            },
            {
              "title": "",
              "value": 18,
              "text": ", con 18 millimetri di muro"
            },
            {
              "title": "",
              "value": 19,
              "text": ", con 19 millimetri di muro"
            },
            {
              "title": "",
              "value": 20,
              "text": ", con 20 millimetri di muro"
            },
            {
              "title": "",
              "value": 21,
              "text": ", con 21 millimetri di muro"
            },
            {
              "title": "",
              "value": 22,
              "text": ", con 22 millimetri di muro"
            },
            {
              "title": "",
              "value": 23,
              "text": ", con 23 millimetri di muro"
            },
            {
              "title": "",
              "value": 24,
              "text": ", con 24 millimetri di muro"
            },
            {
              "title": "",
              "value": 25,
              "text": ", con 25 millimetri di muro"
            },
            {
              "title": "",
              "value": 26,
              "text": ", con 26 millimetri di muro"
            },
            {
              "title": "",
              "value": 27,
              "text": ", con 27 millimetri di muro"
            },
            {
              "title": "",
              "value": 28,
              "text": ", con 28 millimetri di muro"
            },
            {
              "title": "",
              "value": 29,
              "text": ", con 29 millimetri di muro"
            },
            {
              "title": "",
              "value": 30,
              "text": ", con 30 millimetri di muro"
            },
            {
              "title": "",
              "value": 31,
              "text": ", con 31 millimetri di muro"
            },
            {
              "title": "",
              "value": 32,
              "text": ", con 32 millimetri di muro"
            },
            {
              "title": "",
              "value": 33,
              "text": ", con 33 millimetri di muro"
            },
            {
              "title": "",
              "value": 34,
              "text": ", con 34 millimetri di muro"
            },
            {
              "title": "",
              "value": 35,
              "text": ", con 35 millimetri di muro"
            },
            {
              "title": "",
              "value": 36,
              "text": ", con 36 millimetri di muro"
            },
            {
              "title": "",
              "value": 37,
              "text": ", con 37 millimetri di muro"
            },
            {
              "title": "",
              "value": 38,
              "text": ", con 38 millimetri di muro"
            },
            {
              "title": "",
              "value": 39,
              "text": ", con 39 millimetri di muro"
            },
            {
              "title": "",
              "value": 40,
              "text": ", con 40 millimetri di muro"
            },
            {
              "title": "",
              "value": 41,
              "text": ", con 41 millimetri di muro"
            },
            {
              "title": "",
              "value": 42,
              "text": ", con 42 millimetri di muro"
            },
            {
              "title": "",
              "value": 43,
              "text": ", con 43 millimetri di muro"
            },
            {
              "title": "",
              "value": 44,
              "text": ", con 44 millimetri di muro"
            },
            {
              "title": "",
              "value": 45,
              "text": ", con 45 millimetri di muro"
            },
            {
              "title": "",
              "value": 46,
              "text": ", con 46 millimetri di muro"
            },
            {
              "title": "",
              "value": 47,
              "text": ", con 47 millimetri di muro"
            },
            {
              "title": "",
              "value": 48,
              "text": ", con 48 millimetri di muro"
            },
            {
              "title": "",
              "value": 49,
              "text": ", con 49 millimetri di muro"
            },
            {
              "title": "",
              "value": 50,
              "text": ", con 50 millimetri di muro"
            }
          ]
        }
      },
      {
        "id": "4",
        "title": "ALLARGARE / RESTRINGERE STANZA",
        "level": "1",
        "img": "/assets/icons/png/brick.png",
        "value": null,
        "tag": "tiles",
        "type": "multiple",
        "required": false,
        "description": [
          "CILA + CATASTO 1000€ + 50€ (diritti)",
          "Demolizione 30€/mq"
        ],
        "period": [
          "6 settimane max",
          "30 minuti/mq"
        ],
        "question": {
          "title": "Quanti ml?",
          "type": "multiple",
          "options": [
            {
              "title": "",
              "value": 1,
              "text": ", con 1 millimetri di muro"
            },
            {
              "title": "",
              "value": 2,
              "text": ", con 2 millimetri di muro"
            },
            {
              "title": "",
              "value": 3,
              "text": ", con 3 millimetri di muro"
            },
            {
              "title": "",
              "value": 4,
              "text": ", con 4 millimetri di muro"
            },
            {
              "title": "",
              "value": 5,
              "text": ", con 5 millimetri di muro"
            },
            {
              "title": "",
              "value": 6,
              "text": ", con 6 millimetri di muro"
            },
            {
              "title": "",
              "value": 7,
              "text": ", con 7 millimetri di muro"
            },
            {
              "title": "",
              "value": 8,
              "text": ", con 8 millimetri di muro"
            },
            {
              "title": "",
              "value": 9,
              "text": ", con 9 millimetri di muro"
            },
            {
              "title": "",
              "value": 10,
              "text": ", con 10 millimetri di muro"
            },
            {
              "title": "",
              "value": 11,
              "text": ", con 11 millimetri di muro"
            },
            {
              "title": "",
              "value": 12,
              "text": ", con 12 millimetri di muro"
            },
            {
              "title": "",
              "value": 13,
              "text": ", con 13 millimetri di muro"
            },
            {
              "title": "",
              "value": 14,
              "text": ", con 14 millimetri di muro"
            },
            {
              "title": "",
              "value": 15,
              "text": ", con 15 millimetri di muro"
            },
            {
              "title": "",
              "value": 16,
              "text": ", con 16 millimetri di muro"
            },
            {
              "title": "",
              "value": 17,
              "text": ", con 17 millimetri di muro"
            },
            {
              "title": "",
              "value": 18,
              "text": ", con 18 millimetri di muro"
            },
            {
              "title": "",
              "value": 19,
              "text": ", con 19 millimetri di muro"
            },
            {
              "title": "",
              "value": 20,
              "text": ", con 20 millimetri di muro"
            },
            {
              "title": "",
              "value": 21,
              "text": ", con 21 millimetri di muro"
            },
            {
              "title": "",
              "value": 22,
              "text": ", con 22 millimetri di muro"
            },
            {
              "title": "",
              "value": 23,
              "text": ", con 23 millimetri di muro"
            },
            {
              "title": "",
              "value": 24,
              "text": ", con 24 millimetri di muro"
            },
            {
              "title": "",
              "value": 25,
              "text": ", con 25 millimetri di muro"
            },
            {
              "title": "",
              "value": 26,
              "text": ", con 26 millimetri di muro"
            },
            {
              "title": "",
              "value": 27,
              "text": ", con 27 millimetri di muro"
            },
            {
              "title": "",
              "value": 28,
              "text": ", con 28 millimetri di muro"
            },
            {
              "title": "",
              "value": 29,
              "text": ", con 29 millimetri di muro"
            },
            {
              "title": "",
              "value": 30,
              "text": ", con 30 millimetri di muro"
            },
            {
              "title": "",
              "value": 31,
              "text": ", con 31 millimetri di muro"
            },
            {
              "title": "",
              "value": 32,
              "text": ", con 32 millimetri di muro"
            },
            {
              "title": "",
              "value": 33,
              "text": ", con 33 millimetri di muro"
            },
            {
              "title": "",
              "value": 34,
              "text": ", con 34 millimetri di muro"
            },
            {
              "title": "",
              "value": 35,
              "text": ", con 35 millimetri di muro"
            },
            {
              "title": "",
              "value": 36,
              "text": ", con 36 millimetri di muro"
            },
            {
              "title": "",
              "value": 37,
              "text": ", con 37 millimetri di muro"
            },
            {
              "title": "",
              "value": 38,
              "text": ", con 38 millimetri di muro"
            },
            {
              "title": "",
              "value": 39,
              "text": ", con 39 millimetri di muro"
            },
            {
              "title": "",
              "value": 40,
              "text": ", con 40 millimetri di muro"
            },
            {
              "title": "",
              "value": 41,
              "text": ", con 41 millimetri di muro"
            },
            {
              "title": "",
              "value": 42,
              "text": ", con 42 millimetri di muro"
            },
            {
              "title": "",
              "value": 43,
              "text": ", con 43 millimetri di muro"
            },
            {
              "title": "",
              "value": 44,
              "text": ", con 44 millimetri di muro"
            },
            {
              "title": "",
              "value": 45,
              "text": ", con 45 millimetri di muro"
            },
            {
              "title": "",
              "value": 46,
              "text": ", con 46 millimetri di muro"
            },
            {
              "title": "",
              "value": 47,
              "text": ", con 47 millimetri di muro"
            },
            {
              "title": "",
              "value": 48,
              "text": ", con 48 millimetri di muro"
            },
            {
              "title": "",
              "value": 49,
              "text": ", con 49 millimetri di muro"
            },
            {
              "title": "",
              "value": 50,
              "text": ", con 50 millimetri di muro"
            }
          ]
        }
      },
      {
        "id": "5",
        "title": "REALIZZARE MURO",
        "level": "1",
        "img": "/assets/icons/png/builder.png",
        "value": null,
        "tag": "tiles",
        "type": "multiple",
        "required": false,
        "description": [
          "CILA + CATASTO 1000€ + 50€ (diritti)",
          "Demolizione 30€/mq"
        ],
        "period": [
          "6 settimane max",
          "30 minuti/mq"
        ],
        "question": {
          "title": "Quanti ml?",
          "type": "multiple",
          "options": [
            {
              "title": "",
              "value": 1,
              "text": ", con 1 millimetri di muro"
            },
            {
              "title": "",
              "value": 2,
              "text": ", con 2 millimetri di muro"
            },
            {
              "title": "",
              "value": 3,
              "text": ", con 3 millimetri di muro"
            },
            {
              "title": "",
              "value": 4,
              "text": ", con 4 millimetri di muro"
            },
            {
              "title": "",
              "value": 5,
              "text": ", con 5 millimetri di muro"
            },
            {
              "title": "",
              "value": 6,
              "text": ", con 6 millimetri di muro"
            },
            {
              "title": "",
              "value": 7,
              "text": ", con 7 millimetri di muro"
            },
            {
              "title": "",
              "value": 8,
              "text": ", con 8 millimetri di muro"
            },
            {
              "title": "",
              "value": 9,
              "text": ", con 9 millimetri di muro"
            },
            {
              "title": "",
              "value": 10,
              "text": ", con 10 millimetri di muro"
            },
            {
              "title": "",
              "value": 11,
              "text": ", con 11 millimetri di muro"
            },
            {
              "title": "",
              "value": 12,
              "text": ", con 12 millimetri di muro"
            },
            {
              "title": "",
              "value": 13,
              "text": ", con 13 millimetri di muro"
            },
            {
              "title": "",
              "value": 14,
              "text": ", con 14 millimetri di muro"
            },
            {
              "title": "",
              "value": 15,
              "text": ", con 15 millimetri di muro"
            },
            {
              "title": "",
              "value": 16,
              "text": ", con 16 millimetri di muro"
            },
            {
              "title": "",
              "value": 17,
              "text": ", con 17 millimetri di muro"
            },
            {
              "title": "",
              "value": 18,
              "text": ", con 18 millimetri di muro"
            },
            {
              "title": "",
              "value": 19,
              "text": ", con 19 millimetri di muro"
            },
            {
              "title": "",
              "value": 20,
              "text": ", con 20 millimetri di muro"
            },
            {
              "title": "",
              "value": 21,
              "text": ", con 21 millimetri di muro"
            },
            {
              "title": "",
              "value": 22,
              "text": ", con 22 millimetri di muro"
            },
            {
              "title": "",
              "value": 23,
              "text": ", con 23 millimetri di muro"
            },
            {
              "title": "",
              "value": 24,
              "text": ", con 24 millimetri di muro"
            },
            {
              "title": "",
              "value": 25,
              "text": ", con 25 millimetri di muro"
            },
            {
              "title": "",
              "value": 26,
              "text": ", con 26 millimetri di muro"
            },
            {
              "title": "",
              "value": 27,
              "text": ", con 27 millimetri di muro"
            },
            {
              "title": "",
              "value": 28,
              "text": ", con 28 millimetri di muro"
            },
            {
              "title": "",
              "value": 29,
              "text": ", con 29 millimetri di muro"
            },
            {
              "title": "",
              "value": 30,
              "text": ", con 30 millimetri di muro"
            },
            {
              "title": "",
              "value": 31,
              "text": ", con 31 millimetri di muro"
            },
            {
              "title": "",
              "value": 32,
              "text": ", con 32 millimetri di muro"
            },
            {
              "title": "",
              "value": 33,
              "text": ", con 33 millimetri di muro"
            },
            {
              "title": "",
              "value": 34,
              "text": ", con 34 millimetri di muro"
            },
            {
              "title": "",
              "value": 35,
              "text": ", con 35 millimetri di muro"
            },
            {
              "title": "",
              "value": 36,
              "text": ", con 36 millimetri di muro"
            },
            {
              "title": "",
              "value": 37,
              "text": ", con 37 millimetri di muro"
            },
            {
              "title": "",
              "value": 38,
              "text": ", con 38 millimetri di muro"
            },
            {
              "title": "",
              "value": 39,
              "text": ", con 39 millimetri di muro"
            },
            {
              "title": "",
              "value": 40,
              "text": ", con 40 millimetri di muro"
            },
            {
              "title": "",
              "value": 41,
              "text": ", con 41 millimetri di muro"
            },
            {
              "title": "",
              "value": 42,
              "text": ", con 42 millimetri di muro"
            },
            {
              "title": "",
              "value": 43,
              "text": ", con 43 millimetri di muro"
            },
            {
              "title": "",
              "value": 44,
              "text": ", con 44 millimetri di muro"
            },
            {
              "title": "",
              "value": 45,
              "text": ", con 45 millimetri di muro"
            },
            {
              "title": "",
              "value": 46,
              "text": ", con 46 millimetri di muro"
            },
            {
              "title": "",
              "value": 47,
              "text": ", con 47 millimetri di muro"
            },
            {
              "title": "",
              "value": 48,
              "text": ", con 48 millimetri di muro"
            },
            {
              "title": "",
              "value": 49,
              "text": ", con 49 millimetri di muro"
            },
            {
              "title": "",
              "value": 50,
              "text": ", con 50 millimetri di muro"
            }
          ]
        }
      },
      {
        "id": "6",
        "title": "ISOLAMENTO TERMICO",
        "level": "1",
        "img": "/assets/icons/png/insulating-tape.png",
        "value": null,
        "tag": "tiles",
        "type": "simple",
        "required": false,
        "note": "mq = Perimetro * n° piani",
        "options": [
          {
            "title": "Si quiero aislamiento termico",
            "value": null,
            "description": [
              "60€/mq del rivestimento",
              "10€/mq del ponteggio (Escluso parasassi, balconcini di scarico)"
            ]
          },
          {
            "title": "Non quiero aislamiento termico",
            "value": null
          }
        ]
      },
      {
        "id": "7",
        "title": "CONTROSOFFITTO",
        "level": "1",
        "img": "/assets/icons/png/roof.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "Voglio mettere un controsoffitto in una parte della casa",
            "value": null,
            "description": [
              "35€/mq x 20% della sup.totale"
            ]
          },
          {
            "title": "Voglio mettere un controsoffitto in tutta la casa",
            "value": null,
            "description": [
              "35€/mq x sup.totale"
            ]
          }
        ]
      },
      {
        "id": "8",
        "title": "RIFACIMENTO TETTO",
        "level": "1",
        "img": "/assets/icons/png/roof-2.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "si",
            "value": null,
            "description": [
              "Valore da definire a seguito di sopralluogo"
            ]
          },
          {
            "title": "no",
            "value": null,
            "description": [
              "35€/mq x sup.totale"
            ]
          }
        ]
      },
      {
        "id": "9",
        "title": "RENDERE LA MANSARDA ABITABILE",
        "level": "1",
        "img": "/assets/icons/png/joist.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "si",
            "value": null,
            "description": [
              "Valore da definire a seguito di sopralluogo"
            ]
          },
          {
            "title": "no",
            "value": null,
            "description": [
              "35€/mq x sup.totale"
            ]
          }
        ]
      },
      {
        "id": "10",
        "title": "IMPIANTI",
        "level": "1",
        "img": "/assets/icons/png/bio-energy.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "Ho bisogno di un impianto di gas",
            "value": 250,
            "description": [
              "250 €"
            ]
          },
          {
            "title": "Ho bisogno di un servizio leggero",
            "value": 2750,
            "description": [
              "2750€ (50 punti luce) 80mq"
            ],
            "period": [
              "1 settimana"
            ]
          },
          {
            "title": "Ho bisogno di un servizio idraulico",
            "value": 230,
            "description": [
              "230€ a punto acqua",
              "n°1  Bagno  n°5 punti",
              "n°2  Bagni  n°5+2 punti",
              "n°3  Bagni  n°5+5+2 punti"
            ]
          },
          {
            "title": "Voglio il riscaldamento a pavimento",
            "value": 230,
            "description": [
              "230 €/mq (Demolizione pavimento esistente, fornitura e posa radianti, getto massetto e posa piastrelle)",
              "Smaltimento 200€ max 7mc"
            ],
            "period": [
              "30 minuti/mq"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "level": "3",
    "title": "SERVIZI ACCESSORI",
    "questions": [
      {
        "id": "1",
        "title": "RIVESTIMENTI BALCONI E TERRAZZI",
        "level": "1",
        "img": "/assets/icons/png/window.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "Voglio BALCONI E TERRAZZE COPERTI",
            "value": null,
            "description": [
              "Guaina 25€/mq",
              "Posa piastrelle 30€/mq",
              "Smaltimento 200€ max 7mc",
              "Posa 30€/mq"
            ],
            "period": [
              "",
              "",
              "30 minuti/mq"
            ]
          },
          {
            "title": "Non voglio BALCONI E TERRAZZE COPERTI",
            "value": null
          }
        ]
      },
      {
        "id": "2",
        "title": "CERTIFICAZIONE ENERGETICA",
        "level": "1",
        "img": "/assets/icons/png/leaf.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "Voglio una certificazione energetica",
            "value": null,
            "description": [
              "A.P.E. 120€ + 15€ diritti"
            ],
            "period": [
              "1 settimana"
            ]
          },
          {
            "title": "Non voglio una certificazione energetica",
            "value": null
          }
        ]
      },
      {
        "id": "3",
        "title": "L'ABITAZIONE E' UGUALE HAI PROGETTI IN TUO POSSESSO?",
        "level": "1",
        "img": "/assets/icons/png/content-marketing.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "Se ho progetti in mio possesso",
            "value": null
          },
          {
            "title": "Non ho progetti in mio possesso",
            "value": null,
            "description": [
              "CILA 100€ + sanzione (1000€)"
            ],
            "period": [
              "6 settimane max."
            ]
          },
          {
            "title": "Non lo so",
            "value": null,
            "description": [
              "Accesso agli atti 50€)"
            ],
            "period": [
              "2 settimane max"
            ]
          }
        ]
      },
      {
        "id": "4",
        "title": "VUOI UNO STUDIO DEGLI INTERNI",
        "level": "1",
        "img": "/assets/icons/png/lamp.png",
        "value": null,
        "tag": "floor",
        "type": "simple",
        "required": false,
        "options": [
          {
            "title": "1 STANZA",
            "value": null,
            "description": [
              "150 €"
            ],
            "period": [
              "2 settimane max."
            ]
          },
          {
            "title": "2 STANZA",
            "value": null,
            "description": [
              "300 €"
            ],
            "period": [
              "2 settimane max."
            ]
          },
          {
            "title": "3 STANZA",
            "value": null,
            "description": [
              "450 €"
            ],
            "period": [
              "2 settimane max."
            ]
          },
          {
            "title": "3 STANZA",
            "value": null,
            "description": [
              "600 €"
            ],
            "period": [
              "2 settimane max."
            ]
          },
          {
            "title": "NON NE HO BISOGNO",
            "value": null
          }
        ]
      }
    ]
  }
];

    this.stages[0].selected = true;
  }

  moveStage($event){


    let stage = $event.stage;
    let index = this.stages.findIndex((c) => c === stage);

    console.log(stage,index)
    console.log(this.stages)

    this.stages[index].selected = false;

    if (this.stages[index + 1] == undefined) {
      // alert('finalizado todo')
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
