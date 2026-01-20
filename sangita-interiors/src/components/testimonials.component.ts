import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-6 md:px-12 bg-orange-50/30 dark:bg-stone-950 transition-colors duration-300">
       <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <!-- Text and Controls -->
          <div class="md:w-1/3">
             <h2 class="text-4xl font-serif text-stone-900 dark:text-white mb-6">{{ ts.t().testimonials.title }}</h2>
             <p class="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
               {{ ts.t().testimonials.desc }}
             </p>
             
             <!-- Navigation -->
             <div class="flex gap-4">
                <button (click)="prev()" class="w-12 h-12 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-900 dark:text-white hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900 hover:border-stone-900 dark:hover:border-white transition-all group" aria-label="Previous review">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <button (click)="next()" class="w-12 h-12 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-900 dark:text-white hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900 hover:border-stone-900 dark:hover:border-white transition-all group" aria-label="Next review">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
             </div>
          </div>
          
          <!-- Carousel Display -->
          <div class="md:w-2/3 w-full relative h-[400px] md:h-[320px] overflow-hidden">
            @for (review of reviews; track review.name; let i = $index) {
               @if (i === currentIndex()) {
                 <div class="absolute inset-0 w-full h-full" [class]="direction() === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'">
                    <div class="bg-white dark:bg-stone-900 p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-center border border-stone-100/50 dark:border-stone-800">
                       <div class="flex items-center gap-4 mb-6">
                          <div class="w-14 h-14 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden shrink-0">
                             <img [src]="review.image" class="w-full h-full object-cover">
                          </div>
                          <div>
                             <h4 class="font-bold text-stone-900 dark:text-white text-lg">{{ review.name }}</h4>
                             <p class="text-stone-400 text-sm">{{ review.location }}</p>
                          </div>
                       </div>
                       <p class="text-stone-600 dark:text-stone-300 text-lg italic leading-relaxed">
                         "{{ ts.t().testimonials.reviews[i].text }}"
                       </p>
                       <div class="flex gap-1 mt-6">
                          @for(star of [1,2,3,4,5]; track star) {
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-orange-400">
                               <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                             </svg>
                          }
                       </div>
                    </div>
                 </div>
               }
            }
          </div>
       </div>
    </section>
  `,
  styles: [`
    .animate-slide-in-right {
      animation: slideInRight 0.5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
    }
    .animate-slide-in-left {
      animation: slideInLeft 0.5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(40px) scale(0.98); }
      to { opacity: 1; transform: translateX(0) scale(1); }
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-40px) scale(0.98); }
      to { opacity: 1; transform: translateX(0) scale(1); }
    }
  `]
})
export class TestimonialsComponent {
  ts = inject(TranslationService);
  currentIndex = signal(0);
  direction = signal<'next' | 'prev'>('next');
  
  reviews = [
    {
      name: "Sarah Jenkins",
      location: "New York, NY",
      image: "https://i.pravatar.cc/100?img=44"
    },
    {
      name: "Marcus Chen",
      location: "San Francisco, CA",
      image: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Elena Rodriguez",
      location: "Austin, TX",
      image: "https://i.pravatar.cc/100?img=32"
    }
  ];

  next() {
    this.direction.set('next');
    this.currentIndex.update(i => (i + 1) % this.reviews.length);
  }

  prev() {
    this.direction.set('prev');
    this.currentIndex.update(i => (i - 1 + this.reviews.length) % this.reviews.length);
  }
}