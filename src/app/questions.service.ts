import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient : HttpClient) { }
  getAllQuestions(): Observable<Question[]>
  {
      return this.httpClient.get<Question[]>(" http://localhost:3000/questions",{responseType:"json"});
  }
  insertQuestion(newQuestion: Question): Observable<Question>
  {
    return this.httpClient.post<Question>("http://localhost:3000/questions", newQuestion ,{responseType:"json"});
  }
   searchQuestion(searchBy: string, searchText: string): Observable<Question[]>
  {
    return this.httpClient.get<Question[]>(
      " http://localhost:3000/questions/"+searchBy+'/'+searchText,{responseType:"json"}
    );
  }
}
