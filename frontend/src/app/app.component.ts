import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

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

library.add(fas);
config.autoAddCss = false;