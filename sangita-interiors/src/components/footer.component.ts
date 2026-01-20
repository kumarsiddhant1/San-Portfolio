import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <footer id="contact" class="bg-stone-900/95 backdrop-blur-2xl text-stone-400 py-12 px-6 md:px-12 border-t border-stone-800 relative z-10">
       <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <!-- Brand & Socials (Col 1 - spans 4) -->
          <div class="lg:col-span-4 flex flex-col gap-6">
             <div>
               <h2 class="text-white font-serif text-3xl">Sangita</h2>
               <p class="text-sm mt-3 leading-relaxed max-w-xs">{{ ts.t().footer.brandDesc }}</p>
               
               <!-- Aesthetic Quote -->
               <p class="mt-6 text-2xl font-playfair italic text-stone-200 leading-normal opacity-90 max-w-xs">
                 {{ ts.t().footer.quote }}
               </p>
             </div>
             
             <!-- Social Icons -->
             <div class="flex gap-4 mt-2">
                <!-- Facebook -->
                <a href="https://facebook.com" target="_blank" class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-md border border-stone-800" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                
                <!-- Twitter/X -->
                <a href="https://twitter.com" target="_blank" class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-md border border-stone-800" aria-label="Twitter">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                   </svg>
                </a>

                <!-- Instagram -->
                <a href="https://instagram.com" target="_blank" class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-md border border-stone-800" aria-label="Instagram">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                   </svg>
                </a>
             </div>
          </div>
          
          <!-- Navigation Links (Col 2 - spans 4) -->
          <div class="lg:col-span-4 flex gap-16 md:gap-24 lg:justify-center">
             <!-- Company Section -->
             <div>
                <h3 class="text-white font-medium mb-6 text-sm tracking-wider uppercase opacity-80">{{ ts.t().footer.company }}</h3>
                <ul class="space-y-4 text-sm">
                   <li><a href="#transformation" class="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">{{ ts.t().nav.projects }}</a></li>
                </ul>
             </div>
             
             <!-- Services Section -->
             <div>
                <h3 class="text-white font-medium mb-6 text-sm tracking-wider uppercase opacity-80">{{ ts.t().footer.services }}</h3>
                <ul class="space-y-4 text-sm">
                   <li><a href="#" class="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">{{ ts.t().footer.links[0] }}</a></li>
                   <li><a href="#" class="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">{{ ts.t().footer.links[1] }}</a></li>
                   <li><a href="#" class="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">{{ ts.t().footer.links[2] }}</a></li>
                </ul>
             </div>
          </div>

          <!-- Contact Form (Col 3 - spans 4) -->
          <div class="lg:col-span-4">
            <h3 class="text-white font-medium mb-6 text-sm tracking-wider uppercase opacity-80">{{ ts.t().footer.getInTouch }}</h3>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <!-- Name Field -->
                <div class="flex flex-col gap-1">
                  <input type="text" formControlName="name" [placeholder]="ts.t().footer.form.name"
                         class="w-full bg-stone-800/50 border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:bg-stone-800 transition-colors"
                         [class.border-red-500]="isFieldInvalid('name')"
                         [class.border-stone-700]="!isFieldInvalid('name')"
                         [class.focus:border-stone-500]="!isFieldInvalid('name')">
                  @if (isFieldInvalid('name')) {
                    <span class="text-red-400 text-xs ml-1">{{ ts.t().footer.form.errName }}</span>
                  }
                </div>

                <!-- Email Field -->
                <div class="flex flex-col gap-1">
                  <input type="email" formControlName="email" [placeholder]="ts.t().footer.form.email"
                         class="w-full bg-stone-800/50 border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:bg-stone-800 transition-colors"
                         [class.border-red-500]="isFieldInvalid('email')"
                         [class.border-stone-700]="!isFieldInvalid('email')"
                         [class.focus:border-stone-500]="!isFieldInvalid('email')">
                  @if (isFieldInvalid('email')) {
                    <span class="text-red-400 text-xs ml-1">{{ ts.t().footer.form.errEmail }}</span>
                  }
                </div>
              </div>

              <!-- Message Field -->
              <div class="flex flex-col gap-1">
                <textarea rows="3" formControlName="message" [placeholder]="ts.t().footer.form.msg"
                          class="w-full bg-stone-800/50 border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:bg-stone-800 transition-colors resize-none"
                          [class.border-red-500]="isFieldInvalid('message')"
                          [class.border-stone-700]="!isFieldInvalid('message')"
                          [class.focus:border-stone-500]="!isFieldInvalid('message')"></textarea>
                @if (isFieldInvalid('message')) {
                  <span class="text-red-400 text-xs ml-1">{{ ts.t().footer.form.errMsg }}</span>
                }
              </div>

              <button type="submit" 
                      class="w-full bg-white text-stone-900 font-medium py-3 rounded-lg hover:bg-stone-200 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                {{ ts.t().footer.form.btn }}
              </button>

              <!-- Success Message -->
              @if (successMessage()) {
                <div class="p-3 bg-green-900/30 border border-green-800 rounded-lg text-green-400 text-sm text-center animate-fade-in">
                  {{ successMessage() }}
                </div>
              }
            </form>
          </div>

       </div>

       <!-- Copyright -->
       <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs gap-4 text-stone-500">
          <p>{{ ts.t().footer.copyright }}</p>
          <div class="flex gap-6">
             <a href="#" class="hover:text-white transition-colors">{{ ts.t().footer.links[3] }}</a>
             <a href="#" class="hover:text-white transition-colors">{{ ts.t().footer.links[4] }}</a>
          </div>
       </div>
    </footer>
  `
})
export class FooterComponent {
  ts = inject(TranslationService);
  private fb: FormBuilder = inject(FormBuilder);
  
  submitted = signal(false);
  successMessage = signal('');

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && (field.dirty || field.touched || this.submitted()) && field.invalid);
  }

  onSubmit() {
    this.submitted.set(true);

    if (this.contactForm.valid) {
      // Simulate API call success
      console.log('Form Submitted:', this.contactForm.value);
      this.successMessage.set(this.ts.t().footer.form.success);
      
      this.contactForm.reset();
      this.submitted.set(false);

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.successMessage.set('');
      }, 3000);
    }
  }
}