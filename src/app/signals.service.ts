import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  
  constructor() { 
  }

  increment(){
    this.count.update(value => value + 1);
  }

  decrement(){
    this.count.update(value => Math.max(value - 1, 0));
  }

  getCount(){
    return this.count();
  }
}
