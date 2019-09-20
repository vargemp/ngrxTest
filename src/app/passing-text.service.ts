import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassingTextService {

  private passableText = new Subject<string>();

  passableText$ = this.passableText.asObservable();

  setText(text: string) {
    this.passableText.next(text);
  }
}
