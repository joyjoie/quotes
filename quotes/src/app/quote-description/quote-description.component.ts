import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  quotes =[
     new Quote (1,'Monday','My life is my mine',' written by abby',new Date(2018,3,14),'submitted by lola'),
     new Quote (2,'Tuesday','Confidence is awesome',' written by abby',new Date(2018,6,9) ,"submitted by lilo"),
     new Quote (3,'Wednesday','Do not go to bed angry',' written by me',new Date(2018,7,12),"submitted by lilo"),
     new Quote (4,'Thursday','Pizza melts hearts ',' written by ivy',new Date(2018,4,18),"submitted by lilo"),
     new Quote (5,'Friday','Walking everyday keeps you away from the doctor,maybe',' written by caro',new Date(2018,2,14),"submitted by lilo"),
     new Quote (6,'Saturday','Adventure,Lets :)',' written by abby',new Date(2018,11,14),"submitted by lilo"),
     new Quote (7,'Sunday','She who laughs most lives longer',' written by litty',new Date(2019,0,10),"submitted by lilo"),
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
