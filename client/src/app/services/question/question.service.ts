import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  _endpoint:string = 'http://mangoproject.it:3000';

  constructor(
    private _http:HttpClient
  ) { }

  getFirstQuestions(){
    return this._http.get(`${this._endpoint}/questions?stage=0&level=0&_embed=questions`);
  }

  getQuestions(){
    return this._http.get(`${this._endpoint}/questions?_embed=questions`);
  }

  getQuestion(id){
    return this._http.get(`${this._endpoint}/questions/${id}?_embed=questions`);
  }

  getQuestionChildren(id){
    return this._http.get(`${this._endpoint}/questions/?questionId=${id}&_embed=choices`).toPromise();
    // return data;
  }

  getQuestionByStage(stageId){
    return this._http.get(`${this._endpoint}/questions/?stageId=${stageId}`).toPromise();
  }

}
