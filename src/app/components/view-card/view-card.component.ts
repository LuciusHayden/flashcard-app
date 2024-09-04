import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-card',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.css'
})
export class ViewCardComponent {

  index : number = 0;
  state : boolean = true;
  constructor(public _questions : QuestionService) {
  }

  previousQuestion(){
    if(this.index > -1){
      this.index--;
    }
  }

  nextQuestion(){
    if(this.index < this._questions.questions.length){
      this.index++;
    }
  }


  changeState(){
    this.state = !this.state;
  }


}
