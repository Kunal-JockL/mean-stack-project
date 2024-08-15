import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroPageComponent, ChatPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
