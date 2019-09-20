import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getMyBanana } from '../app.state';
import { getNewBanana, peelBanana, eatBanana, initiateTimeHop } from './state/banana.actions';
import { bananaAnimations, animButton } from '../animations';
import { PassingTextService } from '../passing-text.service';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css'],
  animations: [bananaAnimations, animButton],
  providers: [PassingTextService],
  host: {
    '[style.width.px]': 'divWidth',
    '[style.backgroundColor]' : 'bgColor'
  }
})
export class BananaComponent implements OnInit {

  buttonClicked = false;
  title = 'My NgRx Banana App';
  banana$: Observable<any>;
  value: number = 0;
  biteSize = 3;
  divWidth = 400;
  bgColor: string;
  childText;
  @ViewChild('randomVal', {static: false}) div: ElementRef;

  constructor(private store: Store<AppState>, private passingTextService: PassingTextService) {
    passingTextService.passableText$.subscribe(
      text => {
        this.childText = text;
      }
    );
   }
  // @HostBinding('@animBanana')

  async ngOnInit() {
    this.newBanana();
    this.banana$ = this.store.pipe(select(state => state.banana));
    this.incrementValue();
  }

  onChildTextChange(childInputText: string) {
    this.childText = childInputText;
    console.log(childInputText);
  }

  incrementValue() {
    setInterval(() => {
      this.value += 1;
      this.div.nativeElement.style.color = `rgb(${getRndInteger()},${getRndInteger()},${getRndInteger()})`;
    }, 1000);

    function getRndInteger() {
      return Math.floor(Math.random() * (255 - 0) ) + 0;
    }
  }

  setWidth(event: number) {
    this.divWidth = event;
  }

  colorBackground(elem: HTMLElement) {
    // elem.style.backgroundColor = this.getRandomColor();
    this.bgColor = this.getRandomColor();
    console.log(this.bgColor);
  }

  newBanana() {
    this.store.dispatch(getNewBanana());
  }

  peelBanana() {
    this.store.dispatch(peelBanana());
  }

  biteBanana() {
    this.store.dispatch(eatBanana({ bites: this.biteSize }));
  }

  rotBanana() {
    this.store.dispatch(initiateTimeHop());
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
