import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app-component/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Nueva forma para HttpClient
  ]
});
