import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})


export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService);

  getStarsColor(item: number) {
    return item > 3 ? 'fontColorGood' : 'fontColorBad';
  }
}