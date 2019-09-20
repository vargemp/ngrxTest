import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PassingTextService } from '../passing-text.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { assignText } from '../crossState/crossState.actions';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() text;
  @Output() inputTextEmitter = new EventEmitter<string>();
  inputText = '';

  constructor(private passingTextService: PassingTextService, private store: Store<AppState>) {
   }

  ngOnInit() {
  }

  inputTextChanged(input) {
    this.inputText = input;
    this.store.dispatch(assignText({text: input}));
    //this.passingTextService.setText(this.inputText);
    //this.inputTextEmitter.emit(input);
  }
}
