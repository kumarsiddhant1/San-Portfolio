import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 px-6 md:px-12 bg-stone-50 dark:bg-stone-900/50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <!-- Image Side -->
        <div class="relative order-2 md:order-1 group">
            <div class="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-tr-[100px] rounded-bl-[100px] transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                 alt="Elena Panto - Principal Designer"
                 class="w-full h-[500px] object-cover rounded-tr-[100px] rounded-bl-[100px] shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
            
            <!-- Experience Badge -->
            <div class="absolute -bottom-6 -right-6 bg-white dark:bg-stone-800 p-6 rounded-full shadow-xl animate-fade-in hidden md:block">
                <p class="text-3xl font-serif text-stone-900 dark:text-white text-center">12+</p>
                <p class="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wide">{{ ts.t().about.exp }}</p>
            </div>
        </div>

        <!-- Text Side -->
        <div class="order-1 md:order-2">
            <div class="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-widest text-orange-800 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-300">
                {{ ts.t().about.tag }}
            </div>
            <h2 class="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white mb-6 leading-tight">
                {{ ts.t().about.title }}
            </h2>
            <h3 class="text-xl text-stone-500 dark:text-stone-400 font-medium mb-6 font-playfair italic">
                {{ ts.t().about.quote }}
            </h3>
            <p class="text-stone-600 dark:text-stone-300 leading-relaxed mb-6 text-lg">
                {{ ts.t().about.desc1 }}
            </p>
            <p class="text-stone-600 dark:text-stone-300 leading-relaxed mb-10">
                {{ ts.t().about.desc2 }}
            </p>

            <div class="flex items-center gap-6 pt-4 border-t border-stone-200 dark:border-stone-800">
               <div>
                  <p class="font-cursive text-5xl text-stone-900 dark:text-white transform -rotate-2">Elena Panto</p>
                  <p class="text-xs uppercase tracking-widest text-stone-500 mt-2 ml-2">{{ ts.t().about.role }}</p>
               </div>
            </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  ts = inject(TranslationService);
}