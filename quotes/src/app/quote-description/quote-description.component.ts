import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {
@Output () addVote=new EventEmitter<vote>();
  quotes = [
    new Quote(1, 'There is nothing permanent except change.', 'Heraclitus', 'Submitted by Joie'),
    new Quote(2, 'Independence is happiness.', 'Susan B. Anthony', 'Submitted by Abby'),
    new Quote(3, 'No act of kindness, no matter how small, is ever wasted.', 'Aesop', 'Submitted by Anon'),
  ]


toggleDetails(index){
  this.quotes[index].showDescription =!this.quotes[index].showDescription;

}
deleteGoal(isComplete,index){
if(isComplete){
  let toDelete = confirm('are you sure you want to delete?  ${this.quotes[index].quot}')

if(toDelete){
this.quotes.splice(index,1)

}

}

}

  constructor() { }

  ngOnInit() {
  }

}
