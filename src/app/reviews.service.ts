import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  

  constructor(private httpClient: HttpClient) { }

  getAllQuestions(): Observable<Question[]>
  {
      return this.httpClient.get<Question[]>("http://localhost:65196/api/questions",{responseType:"json"});
  }
  getAllReviews(): Observable<Review[]>
  {
      return this.httpClient.get<Review[]>(" http://localhost:3000/reviews?_sort=reply&order=ASC",{responseType:"json"});
  }


  insertQuestion(newQuestion: Question): Observable<Question>
  {
    return this.httpClient.post<Question>("http://localhost:65196/api/questions", newQuestion ,{responseType:"json"});
  }

  updateQuestion(existingQuestion: Question): Observable<Question>
  {
    return this.httpClient.put<Question>("http://localhost:65196/api/questions", existingQuestion ,{responseType:"json"});
  }

  deleteQuestion(QuestionID: number): Observable<string>
  {
    return this.httpClient.delete<string>("http://localhost:65196/api/questions?qID=" + QuestionID,{responseType:"json"});
  }
  searchQuestion(searchBy: string, searchText: string): Observable<Question[]>
  {
    return this.httpClient.get<Question[]>(
      " http://localhost:3000/questions/"+searchBy+'/'+searchText,{responseType:"json"}
    );
  }
}
