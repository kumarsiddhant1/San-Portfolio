import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { TransformationComponent } from './components/transformation.component';
import { ProcessComponent } from './components/process.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    TransformationComponent,
    ProcessComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}