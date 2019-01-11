import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  quotes = [
    new Quote(1, 'There is nothing permanent except change.', 'Heraclitus'),
    new Quote(2, 'Independence is happiness.', 'Susan B. Anthony', ),
    new Quote(3, 'No act of kindness, no matter how small, is ever wasted.', 'Aesop'),
  ]
  @Input ()quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  // event emitter above
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
