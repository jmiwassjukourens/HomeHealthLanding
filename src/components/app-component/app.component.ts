import { CommonModule, NgStyle } from '@angular/common';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgStyle,
    ContactFormComponent
  ],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  isMenuActive = false;
  isDesktop = false;
  putbr = false;
  
  expandedIndex: number | null = null;
  @Input() lang: string = 'en';

  ngOnInit() {
    this.isDesktop = window.innerWidth > 768;
    this.putbr = this.isDesktop;
  }

  switchLanguage(lang: string) {
    this.lang = lang;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  toggleService(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = window.innerWidth;
    this.isDesktop = screenWidth > 768;
    this.isMenuActive = !this.isDesktop ? this.isMenuActive : false;
    this.putbr = this.isDesktop;
  }

  services = [
  { image: 'services/service1.png' },
  { image: 'services/service2.png' },
  { image: 'services/service3.png' },
  { image: 'services/service4.png' },
  { image: 'services/service5.png' },
  { image: 'services/service6.png' },
 
  ];
  

}
