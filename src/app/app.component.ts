import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    MessagesComponent, 
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tour of Heroes';
}
