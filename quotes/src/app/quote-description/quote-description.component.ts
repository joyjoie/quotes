import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  quotes = [
    new Quote(1, 'There is nothing permanent except change.', 'Heraclitus','Submitted by Joie'),
    new Quote(2, 'Independence is happiness.', 'Susan B. Anthony','Submitted by Abby' ),
    new Quote(3, 'No act of kindness, no matter how small, is ever wasted.', 'Aesop','Submitted by Anon'),
  ]
  @Input ()quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  // event emitter above and below
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
  toogleDetails(index){
         this.quotes[index].showDescription = !this.quotes[index].showDescription;
     }
   //   addNewQuote(goal){
   //     let quoteLength = this.quotes.length;
   //    this quote.id=quoteLength+1;
   //    quote.completeDate = new Date(quote.completeDate)
   //     this.quotes.push(goal)
   //
   // }

  constructor() { }

  ngOnInit() {
  }

}
