import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { BoldPipe } from './bold.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    QuoteDescriptionComponent,
    QuoteDetailsComponent,
    BoldPipe,
    QuoteFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
