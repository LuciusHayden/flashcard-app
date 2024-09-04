import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public questions: { question: string; answer: string }[] = [
    {
      question: 'What is your name?',
      answer: 'My name is Angular'
    }
  ];

  addQuestion(question: string, answer: string) {
    this.questions.push({ question, answer });
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  getQuestions() {
    return this.questions;
  }
}
