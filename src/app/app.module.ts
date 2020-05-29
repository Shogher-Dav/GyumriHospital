import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about/about.component';
import { CommentsComponent } from './home/comments/comments.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DonationsComponent } from './home/donations/donations.component';
import { HomeComponent } from './home/home.component';
import { DonateModalComponent } from './home/donate-modal/donate-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CommentsComponent,
    HeaderComponent,
    FooterComponent,
    DonationsComponent,
    HomeComponent,
    DonateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
