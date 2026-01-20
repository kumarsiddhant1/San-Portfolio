import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <header class="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2700&auto=format&fit=crop" 
             alt="Modern Living Room" 
             class="w-full h-full object-cover brightness-[0.85]">
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center max-w-4xl mx-auto px-4 mt-16">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          {{ ts.t().hero.title }}
        </h1>
        <p class="text-stone-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light opacity-90">
          {{ ts.t().hero.subtitle }}
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <!-- Design Yours Button -->
          <button class="px-8 py-3.5 bg-white text-stone-900 rounded-full font-medium 
                         hover:bg-stone-50 hover:scale-105 active:scale-95 
                         transition-all duration-300 shadow-lg hover:shadow-2xl 
                         flex items-center gap-2 group">
            <span>{{ ts.t().hero.designBtn }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                 class="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
          
          <!-- How it Works Button -->
          <button class="px-8 py-3.5 bg-white/10 backdrop-blur-xl text-white border border-white/20 
                         rounded-full font-medium hover:bg-white/20 hover:scale-105 active:scale-95 
                         transition-all duration-300 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
                         hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/40">
            {{ ts.t().hero.howItWorks }}
          </button>
        </div>

        <!-- Floating Badge -->
        <div class="absolute hidden lg:flex bottom-[-140px] right-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex-col items-start gap-2 max-w-[200px] text-left hover:scale-105 transition-transform duration-300 cursor-pointer">
           <div class="flex -space-x-3">
             <img src="https://i.pravatar.cc/100?img=1" class="w-10 h-10 rounded-full border-2 border-white object-cover" />
             <img src="https://i.pravatar.cc/100?img=5" class="w-10 h-10 rounded-full border-2 border-white object-cover" />
             <img src="https://i.pravatar.cc/100?img=8" class="w-10 h-10 rounded-full border-2 border-white object-cover" />
             <div class="w-10 h-10 rounded-full border-2 border-white bg-stone-900 text-white flex items-center justify-center text-xs">+200</div>
           </div>
           <p class="text-white text-sm">{{ ts.t().hero.badge }}</p>
        </div>
      </div>
    </header>
  `
})
export class HeroComponent {
  ts = inject(TranslationService);
}