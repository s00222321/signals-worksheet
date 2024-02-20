import { Component } from '@angular/core';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  constructor(private signalsService: SignalsService) {}

  getDoubleCount() {
    return this.signalsService.doubleCount();
  }
}
