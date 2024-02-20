import { Component } from '@angular/core';
import { SignalsService } from './signals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signals';
  
  constructor(private signalsService: SignalsService) {}

  increment() {
    this.signalsService.increment();
  }

  decrement() {
    this.signalsService.decrement();
  }
}
