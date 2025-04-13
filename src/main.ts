import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app-component/app.component';
import { appConfig } from './components/app-component/app.config';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
