import { Component } from '@angular/core';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [ThirdComponentComponent, FourthComponentComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  text1: string="The Rock Meme"
  text2: string="E illustrato un meme di the rock"
  text3: string="Hashbulla Meme"
  text4: string="Illustrato un meme del babmbino adulto Hashbulla"
}
