import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  apiUrl: string = "https://justhire-wissen.herokuapp.com/api/question";

  constructor(private http: HttpClient) { }

  loadQuestions() {
    return this.http.get(this.apiUrl)
  }

  loadQuestionsForUser(userId){
    return this.http.get(this.apiUrl+`/${userId}`);
  }

  loadQuestion(id){
    return this.http.get(this.apiUrl + `/edit/${id}`);
  }

deleteQuestion(questionId){
  return this.http.delete(this.apiUrl+`/${questionId}`);
}

  submit(question) {
    let url = `https://justhire-wissen.herokuapp.com/api/question/${question.questionId}`;
    return this.http.put(url, question);
  }

  submitNewQuestion(question) {
    let url = `https://justhire-wissen.herokuapp.com/api/question`;
    return this.http.post(url, question);
  }

  update(id,question){
    let url="https://justhire-wissen.herokuapp.com/api/question/edit/";
    return this.http.put(url+`${id}`, question);
  }
}
