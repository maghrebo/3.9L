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
  
}
