import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  questions: { question: string; answer: string }[] = [
    { question: "What is Angular?", answer: "A web framework by Google." },
    { question: "What is TypeScript?", answer: "A superset of JavaScript by Microsoft." }
  ];

  constructor() {
  }

  addQuestion(){
    this.questions.push({question: this.question, answer: this.answer});
    this.question = "";
    this.answer = "";
  }

  deleteQuestion(index : number){
    this.questions.splice(index, 1);

  }
}
