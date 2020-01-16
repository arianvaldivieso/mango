import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuestionService } from '../../services/question/question.service';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  _endpoint:string = 'http://192.168.1.100:3000';

  constructor(
    private _http:HttpClient,
    private _question:QuestionService
  ) { }

  async getStages(){
    let stages:any = await this._http.get(`${this._endpoint}/stages`).toPromise();

    return stages;
  }
}
