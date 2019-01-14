import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  likeCount:number = 0;
 dislikeCount :number =0;

 like(){
   this.likeCount=this.likeCount +1
 }
 dislike (){
   this.dislikeCount =this.dislikeCount +1
 }
 deleteQuote(complete:boolean){
   this.isComplete.emit(complete);
 }
  constructor() { }

  ngOnInit() {
  }

}
