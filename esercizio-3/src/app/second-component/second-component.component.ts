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

  nomeMeme= ["The Rock Meme", "Hashbulla Meme"]
  descrizioneMeme= ["E illustrato un meme di the rock", "Illustrato un meme del babmbino adulto Hashbulla"]
}
