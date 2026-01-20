import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'hi' | 'mr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>('en');

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    document.documentElement.lang = lang;
  }

  // Dictionary
  private dictionary = {
    en: {
      nav: {
        home: 'Homepage',
        about: 'About Me',
        catalogue: 'Catalogue',
        projects: 'Projects',
        process: 'Process',
        contact: 'Contact Us',
        cta: 'Design yours'
      },
      hero: {
        title: 'Crafting Your Dream Space, Inside And Out',
        subtitle: 'Transforming interiors with personalized design, turning your vision into a reality both indoors and outdoors.',
        designBtn: 'Design yours',
        howItWorks: 'How it works',
        badge: 'Over 200 spaces uniquely designed.'
      },
      about: {
        tag: 'The Designer',
        title: 'About Me',
        quote: '"Design is not just about how it looks, but how it makes you feel."',
        desc1: "Hello, I'm Sangita. I am an interior designer with a passion for creating spaces that tell a story. With a focus on blending natural elements with modern elegance, I strive to craft environments that are both beautiful and deeply personal.",
        desc2: "My approach is collaborative and intuitive. I believe your home should be a sanctuary—a place where you can unwind, recharge, and be your most authentic self.",
        role: 'Principal Designer',
        exp: 'Years Exp.'
      },
      features: {
        title: 'Bringing Timeless Elegance and Natural Beauty to Your Space',
        desc: 'Creating spaces that blend classic elegance with the serenity of nature, for a home or office that feels both refined and harmonious. We focus on every detail.',
        cta: 'Explore Catalogue',
        card1: 'Minimalist Design',
        card1Desc: 'Streamlined, clutter-free spaces that embrace simplicity.',
        card2: 'Decorative Wooden Accents',
        card3: 'Exclusive Home Accessories'
      },
      transformation: {
        title: 'See How We\'ve Transformed Spaces Into Beautiful Works Of Art.',
        explore: 'Explore more',
        before: 'Before',
        after: 'After',
        designedBy: 'Designed by',
        categories: ['Living Room', 'Bedroom', 'Office'],
        projects: [
          { quote: 'We prioritized natural light and organic textures to create a sanctuary.' },
          { quote: 'Soft tones and minimalism were key to crafting this peaceful retreat.' },
          { quote: 'Functionality meets aesthetics in this modern productivity hub.' }
        ]
      },
      process: {
        title: 'Your Home In Steps',
        steps: [
          { title: 'Consultation', desc: 'We start by understanding your vision, lifestyle, and requirements.' },
          { title: 'Design & Planning', desc: 'Our team creates detailed plans, ensuring every element aligns with your style.' },
          { title: 'Execution & Reveal', desc: 'We bring your vision to life with precision, delivering a space that exceeds expectations.' }
        ]
      },
      testimonials: {
        title: 'Our Clients Love To Talk About Us',
        desc: 'Hear from our satisfied clients about how we\'ve transformed their spaces with creativity, precision, and care.',
        reviews: [
          { text: "Absolutely stunning work. The team understood exactly what I wanted even before I did. My living room is now my favorite place on earth." },
          { text: "Professional, timely, and incredibly talented. They transformed our dull office into a vibrant workspace that everyone loves." },
          { text: "The attention to detail is unmatched. Every corner of our home feels intentional and beautiful. Highly recommended!" }
        ]
      },
      footer: {
        brandDesc: 'Designing spaces that inspire and elevate your everyday life. Experience the art of living.',
        quote: '"Your home should tell the story of who you are, and be a collection of what you love."',
        company: 'Company',
        services: 'Services',
        getInTouch: 'Get in Touch',
        links: ['Interior Design', 'Architecture', 'Furniture', 'Privacy Policy', 'Terms of Service'],
        form: {
          name: 'Name',
          email: 'Email',
          msg: 'Message',
          btn: 'Send Message',
          success: 'Thank you! Your message has been sent successfully.',
          errName: 'Name is required',
          errEmail: 'Valid email required',
          errMsg: 'Message cannot be empty'
        },
        copyright: '© 2024 Sangita Interiors. All rights reserved.'
      }
    },
    hi: {
      nav: {
        home: 'मुखपृष्ठ',
        about: 'मेरे बारे में',
        catalogue: 'कैटलॉग',
        projects: 'परियोजनाएं',
        process: 'प्रक्रिया',
        contact: 'संपर्क करें',
        cta: 'डिजाइन करें'
      },
      hero: {
        title: 'अपने सपनों की जगह को, अंदर और बाहर संवारें',
        subtitle: 'व्यक्तिगत डिज़ाइन के साथ अंदरूनी हिस्सों को बदलना, आपकी दृष्टि को घर के अंदर और बाहर दोनों जगह वास्तविकता में बदलना।',
        designBtn: 'डिजाइन करें',
        howItWorks: 'यह कैसे काम करता है',
        badge: '200+ से अधिक स्थानों को विशिष्ट रूप से डिज़ाइन किया गया।'
      },
      about: {
        tag: 'डिजाइनर',
        title: 'मेरे बारे में',
        quote: '"डिज़ाइन सिर्फ यह नहीं है कि यह कैसा दिखता है, बल्कि यह है कि यह आपको कैसा महसूस कराता है।"',
        desc1: "नमस्ते, मैं संगीता हूँ। मैं एक इंटीरियर डिज़ाइनर हूँ जिसे ऐसी जगहें बनाने का शौक है जो एक कहानी कहती हैं। आधुनिक सुंदरता के साथ प्राकृतिक तत्वों को मिलाने पर ध्यान देने के साथ, मैं ऐसे वातावरण बनाने का प्रयास करती हूँ जो सुंदर और व्यक्तिगत दोनों हों।",
        desc2: "मेरा दृष्टिकोण सहयोगात्मक और सहज है। मेरा मानना है कि आपका घर एक अभयारण्य होना चाहिए—एक ऐसी जगह जहां आप आराम कर सकें और खुद बन सकें।",
        role: 'प्रधान डिजाइनर',
        exp: 'वर्षों का अनुभव'
      },
      features: {
        title: 'आपके स्थान में कालातीत सुंदरता और प्राकृतिक सुंदरता लाना',
        desc: 'ऐसे स्थान बनाना जो प्रकृति की शांति के साथ क्लासिक सुंदरता का मिश्रण करते हैं, ऐसे घर या कार्यालय के लिए जो परिष्कृत और सामंजस्यपूर्ण दोनों महसूस करते हैं। हम हर विवरण पर ध्यान केंद्रित करते हैं।',
        cta: 'कैटलॉग देखें',
        card1: 'न्यूनतम डिजाइन',
        card1Desc: 'सुव्यवस्थित, अव्यवस्था मुक्त स्थान जो सादगी को अपनाते हैं।',
        card2: 'सजावटी लकड़ी के लहजे',
        card3: 'विशेष गृह सहायक उपकरण'
      },
      transformation: {
        title: 'देखें कि हमने कैसे स्थानों को कला के सुंदर कार्यों में बदल दिया है।',
        explore: 'और अन्वेषण करें',
        before: 'पहले',
        after: 'बाद में',
        designedBy: 'डिजाइनर',
        categories: ['लिविंग रूम', 'बेडरूम', 'कार्यालय'],
        projects: [
          { quote: 'हमने अभयारण्य बनाने के लिए प्राकृतिक प्रकाश और जैविक बनावट को प्राथमिकता दी।' },
          { quote: 'इस शांतिपूर्ण स्थान को तैयार करने के लिए नरम स्वर और अतिसूक्ष्मवाद महत्वपूर्ण थे।' },
          { quote: 'इस आधुनिक उत्पादकता केंद्र में कार्यक्षमता सौंदर्यशास्त्र से मिलती है।' }
        ]
      },
      process: {
        title: 'आपका घर, चरणों में',
        steps: [
          { title: 'परामर्श', desc: 'हम आपकी दृष्टि, जीवनशैली और आवश्यकताओं को समझकर शुरुआत करते हैं।' },
          { title: 'डिजाइन और योजना', desc: 'हमारी टीम विस्तृत योजनाएँ बनाती है, यह सुनिश्चित करती है कि हर तत्व आपकी शैली के साथ मेल खाता है।' },
          { title: 'निष्पादन और प्रकटीकरण', desc: 'हम आपकी दृष्टि को सटीकता के साथ जीवन में लाते हैं, एक ऐसा स्थान प्रदान करते हैं जो उम्मीदों से अधिक है।' }
        ]
      },
      testimonials: {
        title: 'हमारे ग्राहक हमारे बारे में बात करना पसंद करते हैं',
        desc: 'हमारे संतुष्ट ग्राहकों से सुनें कि हमने रचनात्मकता, सटीकता और देखभाल के साथ उनके स्थानों को कैसे बदल दिया है।',
        reviews: [
          { text: "बिल्कुल आश्चर्यजनक काम. टीम ने वही समझा जो मैं चाहता था। मेरा लिविंग रूम अब पृथ्वी पर मेरी पसंदीदा जगह है।" },
          { text: "पेशेवर, समय पर, और अविश्वसनीय रूप से प्रतिभाशाली। उन्होंने हमारे सुस्त कार्यालय को एक जीवंत कार्यक्षेत्र में बदल दिया।" },
          { text: "विवरण पर ध्यान बेजोड़ है। हमारे घर का हर कोना सुंदर लगता है। अत्यधिक अनुशंसित!" }
        ]
      },
      footer: {
        brandDesc: 'ऐसे स्थान डिजाइन करना जो आपके रोजमर्रा के जीवन को प्रेरित और ऊंचा करते हैं। जीने की कला का अनुभव करें।',
        quote: '"आपका घर इस बात की कहानी बताना चाहिए कि आप कौन हैं, और जो आपको पसंद है उसका संग्रह होना चाहिए।"',
        company: 'कंपनी',
        services: 'सेवाएं',
        getInTouch: 'संपर्क में रहें',
        links: ['इंटीरियर डिजाइन', 'वास्तुकला', 'फर्नीचर', 'गोपनीयता नीति', 'सेवा की शर्तें'],
        form: {
          name: 'नाम',
          email: 'ईमेल',
          msg: 'संदेश',
          btn: 'संदेश भेजें',
          success: 'धन्यवाद! आपका संदेश सफलतापूर्वक भेजा गया है।',
          errName: 'नाम आवश्यक है',
          errEmail: 'मान्य ईमेल आवश्यक है',
          errMsg: 'संदेश खाली नहीं हो सकता'
        },
        copyright: '© 2024 Sangita Interiors. सर्वाधिकार सुरक्षित।'
      }
    },
    mr: {
      nav: {
        home: 'मुख्यपृष्ठ',
        about: 'माझ्याबद्दल',
        catalogue: 'कॅटलॉग',
        projects: 'प्रकल्प',
        process: 'प्रक्रिया',
        contact: 'संपर्क करा',
        cta: 'डिझाइन करा'
      },
      hero: {
        title: 'तुमच्या स्वप्नातील जागा, आतून आणि बाहेरून सजवा',
        subtitle: 'वैयक्तिक डिझाइनसह इंटीरियर बदलणे, तुमची दृष्टी घराच्या आत आणि बाहेर दोन्ही ठिकाणी वास्तवात आणणे.',
        designBtn: 'डिझाइन करा',
        howItWorks: 'हे कसे कार्य करते',
        badge: '२००+ हून अधिक जागा अद्वितीयपणे डिझाइन केल्या आहेत.'
      },
      about: {
        tag: 'डिझायनर',
        title: 'माझ्याबद्दल',
        quote: '"डिझाइन म्हणजे फक्त ते कसे दिसते असे नाही, तर ते तुम्हाला कसे वाटते हे आहे."',
        desc1: "नमस्कार, मी संगीता आहे. मी एक इंटीरियर डिझायनर आहे जिला कथा सांगणारी जागा तयार करण्याची आवड आहे. आधुनिक सुरेखतेसह नैसर्गिक घटकांचे मिश्रण करण्यावर लक्ष केंद्रित करून, मी सुंदर आणि वैयक्तिक दोन्ही वातावरण तयार करण्याचा प्रयत्न करते.",
        desc2: "माझा दृष्टिकोन सहयोगी आणि अंतर्ज्ञानी आहे. माझा विश्वास आहे की तुमचे घर एक अभयारण्य असावे—अशी जागा जिथे तुम्ही आराम करू शकता आणि स्वतः बनू शकता.",
        role: 'प्रधान डिझायनर',
        exp: 'वर्षांचा अनुभव'
      },
      features: {
        title: 'तुमच्या जागेत कालातीत अभिजातता आणि नैसर्गिक सौंदर्य आणणे',
        desc: 'अशी जागा तयार करणे जी निसर्गाच्या शांततेसह क्लासिक अभिजाततेचे मिश्रण करते, अशा घरासाठी किंवा कार्यालयासाठी जे शुद्ध आणि सामंजस्यपूर्ण वाटते.',
        cta: 'कॅटलॉग पाहा',
        card1: 'मिनिमलिस्ट डिझाइन',
        card1Desc: 'सुव्यवस्थित, गोंधळ-मुक्त जागा ज्या साधेपणा स्वीकारतात.',
        card2: 'सजावटीचे लाकडी अॅक्सेंट',
        card3: 'विशेष गृह अॅक्सेसरीज'
      },
      transformation: {
        title: 'पाहा आम्ही जागांचे सुंदर कलाकृतींमध्ये कसे रूपांतर केले आहे.',
        explore: 'अधिक एक्सप्लोर करा',
        before: 'आधी',
        after: 'नंतर',
        designedBy: 'डिझाइनर',
        categories: ['लिविंग रूम', 'बेडरूम', 'कार्यालय'],
        projects: [
          { quote: 'आम्ही अभयारण्य तयार करण्यासाठी नैसर्गिक प्रकाश आणि सेंद्रिय पोतला प्राधान्य दिले.' },
          { quote: 'ही शांत जागा तयार करण्यासाठी मऊ टोन आणि मिनिमलिझम महत्त्वाचे होते.' },
          { quote: 'या आधुनिक उत्पादकता केंद्रामध्ये कार्यक्षमता सौंदर्याशी जुळते.' }
        ]
      },
      process: {
        title: 'तुमचे घर, पायऱ्यांमध्ये',
        steps: [
          { title: 'सल्लामसलत', desc: 'आम्ही तुमची दृष्टी, जीवनशैली आणि आवश्यकता समजून घेऊन सुरुवात करतो.' },
          { title: 'डिझाइन आणि नियोजन', desc: 'आमची टीम तपशीलवार योजना तयार करते, हे सुनिश्चित करते की प्रत्येक घटक तुमच्या शैलीशी जुळतो.' },
          { title: 'अंमलबजावणी आणि प्रकटीकरण', desc: 'आम्ही तुमची दृष्टी अचूकतेने सत्यात उतरवतो, अशी जागा वितरीत करतो जी अपेक्षांपेक्षा जास्त आहे.' }
        ]
      },
      testimonials: {
        title: 'आमच्या क्लायंटना आमच्याबद्दल बोलायला आवडते',
        desc: 'आमच्या समाधानी क्लायंटकडून ऐका की आम्ही सर्जनशीलता, अचूकता आणि काळजीने त्यांच्या जागा कशा बदलल्या आहेत.',
        reviews: [
          { text: "अगदी आश्चर्यकारक काम. टीमला मला काय हवे होते ते अगदी आधीच समजले. माझी लिव्हिंग रूम आता पृथ्वीवर माझी आवडती जागा आहे." },
          { text: "व्यावसायिक, वेळेवर आणि आश्चर्यकारकपणे प्रतिभावान. त्यांनी आमच्या कंटाळवाण्या ऑफिसला एका व्हायब्रंट वर्कस्पेसमध्ये बदलले." },
          { text: "तपशीलाकडे लक्ष देणे अतुलनीय आहे. आमच्या घराचा प्रत्येक कोपरा सुंदर लगता है. अत्यंत शिफारस केलेले!" }
        ]
      },
      footer: {
        brandDesc: 'जागा डिझाइन करणे ज्या तुमच्या दैनंदिन जीवनाला प्रेरणा देतात आणि उंचावतात. जगण्याची कला अनुभवा.',
        quote: '"तुमचे घर तुम्ही कोण आहात याची कथा सांगणारे असावे, आणि तुम्हाला जे आवडते त्याचा संग्रह असावे."',
        company: 'कंपनी',
        services: 'सेवा',
        getInTouch: 'संपर्कात राहा',
        links: ['इंटीरियर डिझाइन', 'आर्किटेक्चर', 'फर्निचर', 'गोपनीयता धोरण', 'सेवा अटी'],
        form: {
          name: 'नाव',
          email: 'ईमेल',
          msg: 'संदेश',
          btn: 'संदेश पाठवा',
          success: 'धन्यवाद! तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे.',
          errName: 'नाव आवश्यक आहे',
          errEmail: 'वैध ईमेल आवश्यक आहे',
          errMsg: 'संदेश रिकामा असू शकत नाही'
        },
        copyright: '© 2024 Sangita Interiors. सर्व हक्क राखीव.'
      }
    }
  };

  t = computed(() => this.dictionary[this.currentLang()]);
}