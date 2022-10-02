import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Review } from './review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueAnsService {

  constructor(private httpClient: HttpClient) { }

  getAllQuestions(): Observable<Question[]>
  {
      return this.httpClient.get<Question[]>(" http://localhost:3000/questions",{responseType:"json"});
  }
 
  insertQuestion(newQuestion: Question): Observable<Question>
  {
    return this.httpClient.post<Question>("http://localhost:3000/questions", newQuestion ,{responseType:"json"});
  }

  updateQuestion(existingQuestion: Question): Observable<Question>
  {
    return this.httpClient.put<Question>("http://localhost:3000/questions/"+ existingQuestion.questionID, existingQuestion ,{responseType:"json"});
  }

  deleteQuestion(QuestionID: number): Observable<string>
  {
    return this.httpClient.delete<string>("http://localhost:3000/questions/" + QuestionID,{responseType:"json"});
  }
  searchQuestion(searchBy: string, searchText: string): Observable<Question[]>
  {
    return this.httpClient.get<Question[]>(
      " http://localhost:3000/questions/"+searchBy+'/'+searchText,{responseType:"json"}
    );
  }}
