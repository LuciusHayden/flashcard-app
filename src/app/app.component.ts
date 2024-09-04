import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { ViewCardComponent } from "./components/view-card/view-card.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ViewCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  showCard : boolean = false;
  title = 'angular-test';

}
