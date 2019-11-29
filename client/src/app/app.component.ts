import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit(){
    this.myStyle = {
        'position': 'fixed',
        'width': '100vw',
        'height': '100vh',
        'z-index': -1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

    this.myParams = {
      particles: {
          number: {
              value: 200,
          },
          color: {
              value: '#FFD422'
          },
          shape: {
              type: 'triangle',
          },
          size:{
            value:6
          }
      }
    };
  }

}
