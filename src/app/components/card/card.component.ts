import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  question : string = "";
  answer : string = "";


  constructor(public _questions: QuestionService) {
  }

  addQuestion(){
    this._questions.addQuestion(this.question,this.answer);
    this.question = "";
    this.answer = "";
  }

  deleteQuestion(index : number){
    this._questions.removeQuestion(index);

  }
}
