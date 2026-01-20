import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section id="features" class="py-12 px-6 md:px-12 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="grid md:grid-cols-2 gap-8 mb-12 items-start">
          <h2 class="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white leading-tight">
            {{ ts.t().features.title }}
          </h2>
          <div class="flex flex-col items-start gap-6 pt-2">
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
              {{ ts.t().features.desc }}
            </p>
            <button class="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors">
              {{ ts.t().features.cta }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:min-h-[600px]">
          
          <!-- Large Left Item (Minimalist) -->
          <div class="md:col-span-7 h-[400px] md:h-full relative group overflow-hidden rounded-3xl border border-stone-200 dark:border-stone-800">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2400&auto=format&fit=crop" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Minimalist Design">
            <div class="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent text-white">
              <div class="bg-white/20 backdrop-blur-sm p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 class="text-2xl font-serif mb-2">{{ ts.t().features.card1 }}</h3>
              <p class="text-stone-200 text-sm max-w-sm">{{ ts.t().features.card1Desc }}</p>
            </div>
          </div>

          <!-- Right Column Stack -->
          <div class="md:col-span-5 flex flex-col gap-6 h-full">
            
            <!-- Top Right (Wood) -->
            <div class="flex-1 relative group overflow-hidden rounded-3xl min-h-[250px] border border-stone-200 dark:border-stone-800">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Wooden Accents">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div class="absolute bottom-6 left-6 text-white">
                 <div class="bg-white text-stone-900 rounded-full w-8 h-8 flex items-center justify-center mb-3 text-xs font-bold">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                   </svg>
                 </div>
                 <h3 class="text-xl font-serif">{{ ts.t().features.card2 }}</h3>
              </div>
            </div>

            <!-- Bottom Right (Accessories) -->
            <div class="flex-1 relative group overflow-hidden rounded-3xl min-h-[250px] border border-stone-200 dark:border-stone-800">
              <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1587&auto=format&fit=crop" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Home Accessories">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div class="absolute bottom-6 left-6 text-white">
                 <div class="bg-white text-stone-900 rounded-full w-8 h-8 flex items-center justify-center mb-3 text-xs font-bold">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                   </svg>
                 </div>
                 <h3 class="text-xl font-serif">{{ ts.t().features.card3 }}</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {
  ts = inject(TranslationService);
}