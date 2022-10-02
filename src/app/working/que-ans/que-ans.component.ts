import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../reviews.service';
import { Question } from '../../question';
import { Review } from '../../review';

@Component({
  selector: 'app-que-ans',
  templateUrl: './que-ans.component.html',
  styleUrls: ['./que-ans.component.scss']
})
export class QueAnsComponent implements OnInit {

  questions: Question[] = [];
  reviews: Review[] = [];
  newQuestion: Question = new Question();
  editQuestion: Question = new Question();
  editIndex: number=0;
  deleteQuestion: Question = new Question();
  deleteIndex: any = null;
  searchBy: string = "Question Name";
  searchText: string = "";

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void 
  {
    this.reviewsService.getAllQuestions().subscribe(
      (response: Question[])=>{
        this.questions = response;
      }
    );
    this.reviewsService.getAllReviews().subscribe(
      (response: Review[])=>{
        this.reviews = response;
      }
    );
  }

  onSaveClick()
  {
    this.reviewsService.insertQuestion(this.newQuestion).subscribe(
      (response)=>{

        // Add question to database
        var q: Question = new Question();
        q.qID = response.qID;
        q.qTopic = response.qTopic;
        this.questions.push(q);

        // Clear New Question dialog - textboxes
        this.newQuestion.qID = 0;
        this.newQuestion.qTopic = "";
      }
      ,(error)=>{
        console.log(error);
      }
    )
  }
  
  onEditClick(event:any, index: number)
  {
    this.editQuestion.qID = this.questions[index].qID;
    this.editQuestion.qTopic = this.questions[index].qTopic;
    this.editIndex = index;
  }

  onUpdateClick()
  {
    this.reviewsService.updateQuestion(this.editQuestion).subscribe(
      (response)=>{
        var p: Question = new Question();
        p.qID = response.qID;
        p.qTopic = response.qTopic;
        this.questions[this.editIndex] = p;

        this.editQuestion.qID = 0;
        this.editQuestion.qTopic = "";
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onDeleteClick(event: any, index: number)
  {
    this.deleteIndex = index;
    this.deleteQuestion.qID = this.questions[index].qID;
    this.deleteQuestion.qTopic = this.questions[index].qTopic;
  }

  onDeleteConfirmClick()
  {
    this.reviewsService.deleteQuestion(this.deleteQuestion.qID).subscribe(
      (response)=>{
        this.questions.splice(this.deleteIndex,1);
        this.deleteQuestion.qID = 0;
        this.deleteQuestion.qTopic = "";
        this.deleteQuestion.qanswer= "";
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onSearchClick()
  {
    this.reviewsService.searchQuestion(this.searchBy, this.searchText).subscribe(
      (response: Question[])=>{
        this.questions = response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
