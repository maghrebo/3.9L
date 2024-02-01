import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})

export class ThirdComponentComponent {
  like = 0;

  constructor() {
    this.like =Math.floor(Math.random() * 100);
    this.cambiaColore();
  }

  aggiuntalike() {
    if (this.like < 100) {
      this.like = this.like + 1
    }
  }

  cambiaColore(): string {
    if(this.like < 33){
      return "primary";
    }else if (this.like >= 33 && this.like < 66) {
      return "accent";
    }else{
      return "warn";
    }
  }
}
