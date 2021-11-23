import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsServiceService {
  public observe: Observable<Event>;
  public subscrbe: Subscription;
  constructor() {}
  // triggerEvent() {
  //   this.observe = fromEvent(,2);
  // }
}
