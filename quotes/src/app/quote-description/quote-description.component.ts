import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  quotes =[
     new Quote (1,'Life','My life is my mine',' written by abby',new Date(2018,3,14),'submitted by lola'),
     new Quote (2,'Life','My life is my mine',' written by abby',new Date(2018,6,9) ,"submitted by lilo"),
     new Quote (3,'Life','My life is my mine',' written by me',new Date(2018,7,12),"submitted by lilo"),
     new Quote (4,'Life','My life is my mine',' written by ivy',new Date(2018,4,18),"submitted by lilo"),
     new Quote (5,'Life','My life is my mine',' written by caro',new Date(2018,2,14),"submitted by lilo"),
     new Quote (6,'Life','My life is my mine',' written by abby',new Date(2018,11,14),"submitted by lilo"),
     new Quote (7,'Life','My life is my mine',' written by litty',new Date(2019,0,10),"submitted by lilo"),
   ]

  toggleDetails(isComplete,index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`are you sure you want to delete?  ${this.quotes[index].author}`)

      if (toDelete) {
        this.quotes.splice(index, 1)

      }

    }

  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
