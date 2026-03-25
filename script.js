/* ===== VellumCadence — Script ===== */
(function () {
  'use strict';

  /* ── Enable entrance animations only when JS runs ── */
  document.body.classList.add('js-ready');

  /* ── i18n translations ── */
  var T = {
    en: {
      'nav.problem': 'Problem', 'nav.solution': 'Solution', 'nav.portfolio': 'Portfolio',
      'nav.packages': 'Packages', 'nav.faq': 'FAQ', 'nav.contact': 'Book a Call',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'AI Content That',
      'hero.title2': 'Stops The Scroll',
      'hero.sub': 'We create AI-powered visuals and video content that capture attention, build trust, and turn followers into paying clients.',
      'hero.cta': 'Book a Free Strategy Call', 'hero.cta2': 'See Our Work',
      'hero.m1': 'Projects Delivered', 'hero.m2': 'Brands Served', 'hero.m3': 'Avg. Engagement Boost',
      'pain.tag': 'The Problem', 'pain.title': "Why Your Content Isn't Working",
      'pain.sub': "People are drowning in content. Most posts vanish in under a second. Here's why yours might be invisible.",
      'pain.c1.title': 'No Visual Hook', 'pain.c1.text': "Your content doesn't stop the scroll. Users fly past in a fraction of a second without a second glance.",
      'pain.c2.title': 'Looks Like Everyone Else', 'pain.c2.text': 'Generic templates get buried in the feed. Your brand blends in instead of standing out.',
      'pain.c3.title': 'No Consistency', 'pain.c3.text': "Without a regular rhythm, there's no recognition. Your audience forgets you between sporadic posts.",
      'pain.c4.title': 'No Strategy', 'pain.c4.text': "Content without a funnel is just noise. There's no system that warms up leads and drives action.",
      'sol.tag': 'Our Solution', 'sol.title': 'The VellumCadence System',
      'sol.sub': 'Not just content. A complete attention engine that makes your growth predictable and scalable.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'AI Speed', 'sol.c1.text': 'AI-powered generation lets us create content fast, consistently, and at scale — no lengthy photoshoots needed.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Neurovisuals', 'sol.c2.text': "Visuals engineered to catch the eye and spark curiosity. Not stock templates — a unique style built for your brand.",
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Marketing Logic', 'sol.c3.text': 'Every piece serves a purpose in your funnel: attract attention, build trust, or drive the sale.',
      'who.tag': 'Industries', 'who.title': 'Who We Work With',
      'who.sub': 'We help brands across industries build scroll-stopping content systems.',
      'who.c1': 'E-commerce', 'who.c2': 'Beauty & Wellness', 'who.c3': 'Clinics & Healthcare',
      'who.c4': 'HoReCa', 'who.c5': 'Real Estate', 'who.c6': 'Tech & SaaS',
      'port.tag': 'Portfolio', 'port.title': 'Our Work',
      'port.sub': 'A glimpse of the content types we create for our clients every month.',
      'port.c1': 'Reels & Short Videos', 'port.c2': 'Carousels', 'port.c3': 'Brand Identity',
      'port.c4': 'Before / After', 'port.c5': 'Product Shoots', 'port.c6': 'Social Templates',
      'proof.tag': 'Social Proof', 'proof.title': 'Results Our Clients See',
      'proof.sub': 'Real impact from real businesses that chose the VellumCadence system.',
      'proof.t1.text': "Within the first month, our Instagram engagement tripled. The AI-generated content looks premium and our followers can't tell the difference from traditional shoots.",
      'proof.t1.name': 'Sarah de Vries', 'proof.t1.biz': 'E-commerce, Amsterdam',
      'proof.t2.text': 'We went from posting once a week to a full content calendar. The quality is consistent and our booking rate increased by 40% in two months.',
      'proof.t2.name': 'Marc Jansen', 'proof.t2.biz': 'Dental Clinic, Rotterdam',
      'proof.t3.text': "The reels they created went viral twice. Our brand finally looks as premium online as it does in person. Best investment we've made this year.",
      'proof.t3.name': 'Lisa Bakker', 'proof.t3.biz': 'Beauty Salon, Utrecht',
      'proof.trusted': 'Trusted by brands across the Netherlands',
      'pkg.tag': 'Packages', 'pkg.title': 'Monthly Content Packages',
      'pkg.sub': 'Choose the plan that fits your business goals and budget.',
      'pkg.mo': 'mo', 'pkg.popular': 'Most Popular', 'pkg.select': 'Get Started',
      'pkg.l.reels': 'Reels (10-25 sec)', 'pkg.l.visuals': 'Static visuals', 'pkg.l.carousel': 'Carousel set',
      'pkg.l.basic': 'Basic content calendar', 'pkg.l.revisions1': '1 round of revisions',
      'pkg.p.reels': 'Reels (10-25 sec)', 'pkg.p.visuals': 'Static visuals', 'pkg.p.carousel': 'Carousel sets',
      'pkg.p.strategy': 'Full content strategy', 'pkg.p.revisions': '2 rounds of revisions', 'pkg.p.calendar': 'Publishing calendar',
      'pkg.pr.reels': 'Reels (10-30 sec)', 'pkg.pr.visuals': 'Static visuals', 'pkg.pr.carousel': 'Carousel sets',
      'pkg.pr.brand': 'Full brand identity kit', 'pkg.pr.revisions': 'Unlimited revisions',
      'pkg.pr.manager': 'Dedicated manager', 'pkg.pr.priority': 'Priority support',
      'proc.tag': 'Process', 'proc.title': '5 Steps to Results',
      'proc.sub': 'Simple and transparent — from brief to ready-to-publish content.',
      'proc.s1.title': 'Discovery Call', 'proc.s1.text': 'We learn your niche, product, target audience, and goals in a free 30-minute call.',
      'proc.s2.title': 'Strategy & Style', 'proc.s2.text': 'We define your content direction, visual identity, and posting rhythm.',
      'proc.s3.title': 'AI Creation', 'proc.s3.text': 'Our team generates visuals, reels, and copy using AI + human creative direction.',
      'proc.s4.title': 'Review & Approve', 'proc.s4.text': 'You review everything, request changes, and approve the final materials.',
      'proc.s5.title': 'Launch & Grow', 'proc.s5.text': 'Content goes live with a full publishing calendar. Watch engagement grow.',
      'faq.tag': 'FAQ', 'faq.title': 'Frequently Asked Questions',
      'faq.q1': 'How does AI content creation work?',
      'faq.a1': 'We use advanced AI tools combined with human creative direction to generate visuals, videos, and copy. Every piece is reviewed and refined by our team to ensure it matches your brand perfectly. The result is premium content at a fraction of the time and cost of traditional production.',
      'faq.q2': 'How quickly can we get started?',
      'faq.a2': 'After our discovery call, we typically deliver your first batch of content within 5-7 business days. The onboarding process is fast — we just need your brand assets and a brief conversation about your goals.',
      'faq.q3': 'Do we own the content you create?',
      'faq.a3': 'Yes, 100%. All content we create belongs to you. You receive full rights to use it across any platform, in ads, on your website — wherever you need it. No strings attached.',
      'faq.q4': 'Can we request revisions?',
      'faq.a4': 'Absolutely. Each package includes revision rounds (1 for Lite, 2 for Pro, unlimited for Premium). We want you to be completely happy with every piece of content before it goes live.',
      'faq.q5': 'What platforms do you create content for?',
      'faq.a5': 'We create content optimized for Instagram, TikTok, Facebook, LinkedIn, and YouTube Shorts. Each piece is formatted and sized correctly for the target platform to maximize engagement.',
      'faq.q6': 'Is there a minimum contract period?',
      'faq.a6': 'We recommend a minimum of 3 months to see real results from a content system. However, there is no long-term lock-in — you can cancel with 30 days notice. Most of our clients stay because they see the results.',
      'cta.title': 'Ready to Transform Your Content?',
      'cta.sub': "Book a free strategy call or send us a message. We'll create a custom content plan for your business.",
      'cta.location': 'Based in the Netherlands',
      'form.name': 'Your Name', 'form.email': 'Email Address', 'form.business': 'Business Type',
      'form.bizPlaceholder': 'Select your industry', 'form.bizOpt1': 'E-commerce',
      'form.bizOpt2': 'Beauty & Wellness', 'form.bizOpt3': 'Clinics & Healthcare',
      'form.bizOpt4': 'HoReCa', 'form.bizOpt5': 'Real Estate', 'form.bizOpt6': 'Tech & SaaS', 'form.bizOpt7': 'Other',
      'form.message': 'Message (optional)', 'form.submit': 'Send Message',
      'form.successTitle': 'Message Sent!', 'form.successText': "We'll get back to you within 24 hours. Check your inbox!"
    },
    nl: {
      'nav.problem': 'Probleem', 'nav.solution': 'Oplossing', 'nav.portfolio': 'Portfolio',
      'nav.packages': 'Pakketten', 'nav.faq': 'FAQ', 'nav.contact': 'Bel ons',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'AI Content Die',
      'hero.title2': 'Het Scrollen Stopt',
      'hero.sub': 'Wij maken AI-aangedreven visuals en videocontent die aandacht vangen, vertrouwen opbouwen en volgers omzetten in betalende klanten.',
      'hero.cta': 'Boek een Gratis Strategiegesprek', 'hero.cta2': 'Bekijk Ons Werk',
      'hero.m1': 'Projecten Geleverd', 'hero.m2': 'Merken Bediend', 'hero.m3': 'Gem. Engagement Boost',
      'pain.tag': 'Het Probleem', 'pain.title': 'Waarom Uw Content Niet Werkt',
      'pain.sub': 'Mensen verdrinken in content. De meeste posts verdwijnen binnen een seconde. Dit is waarom de uwe onzichtbaar kan zijn.',
      'pain.c1.title': 'Geen Visuele Haak', 'pain.c1.text': 'Uw content stopt het scrollen niet. Gebruikers vliegen in een fractie van een seconde voorbij zonder een tweede blik.',
      'pain.c2.title': 'Ziet Eruit Als Iedereen', 'pain.c2.text': 'Generieke templates worden begraven in de feed. Uw merk valt niet op maar verdwijnt.',
      'pain.c3.title': 'Geen Consistentie', 'pain.c3.text': 'Zonder een regelmatig ritme is er geen herkenning. Uw publiek vergeet u tussen sporadische posts.',
      'pain.c4.title': 'Geen Strategie', 'pain.c4.text': 'Content zonder funnel is gewoon ruis. Er is geen systeem dat leads opwarmt en actie stimuleert.',
      'sol.tag': 'Onze Oplossing', 'sol.title': 'Het VellumCadence Systeem',
      'sol.sub': 'Niet alleen content. Een compleet aandachtssysteem dat uw groei voorspelbaar en schaalbaar maakt.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'AI Snelheid', 'sol.c1.text': 'AI-aangedreven generatie maakt het mogelijk om snel, consistent en op schaal content te maken — geen lange fotoshoots nodig.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Neurovisuals', 'sol.c2.text': 'Visuals ontworpen om het oog te vangen en nieuwsgierigheid te wekken. Geen stock templates — een unieke stijl voor uw merk.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Marketing Logica', 'sol.c3.text': 'Elk stuk dient een doel in uw funnel: aandacht trekken, vertrouwen opbouwen, of de verkoop stimuleren.',
      'who.tag': 'Sectoren', 'who.title': 'Met Wie Wij Werken',
      'who.sub': 'Wij helpen merken in alle sectoren om scroll-stoppende contentsystemen te bouwen.',
      'who.c1': 'E-commerce', 'who.c2': 'Beauty & Wellness', 'who.c3': 'Klinieken & Gezondheidszorg',
      'who.c4': 'HoReCa', 'who.c5': 'Vastgoed', 'who.c6': 'Tech & SaaS',
      'port.tag': 'Portfolio', 'port.title': 'Ons Werk',
      'port.sub': 'Een glimp van de contenttypes die wij elke maand voor onze klanten maken.',
      'port.c1': 'Reels & Korte Video\'s', 'port.c2': 'Carrousels', 'port.c3': 'Merkidentiteit',
      'port.c4': 'Voor / Na', 'port.c5': 'Productfotografie', 'port.c6': 'Social Templates',
      'proof.tag': 'Sociaal Bewijs', 'proof.title': 'Resultaten Die Onze Klanten Zien',
      'proof.sub': 'Echte impact van echte bedrijven die kozen voor het VellumCadence systeem.',
      'proof.t1.text': 'Binnen de eerste maand is onze Instagram-engagement verdrievoudigd. De AI-gegenereerde content ziet er premium uit en onze volgers zien het verschil niet met traditionele shoots.',
      'proof.t1.name': 'Sarah de Vries', 'proof.t1.biz': 'E-commerce, Amsterdam',
      'proof.t2.text': 'We gingen van eenmaal per week posten naar een volledige contentkalender. De kwaliteit is consistent en ons boekingspercentage steeg met 40% in twee maanden.',
      'proof.t2.name': 'Marc Jansen', 'proof.t2.biz': 'Tandartspraktijk, Rotterdam',
      'proof.t3.text': 'De reels die zij maakten gingen twee keer viraal. Ons merk ziet er online eindelijk net zo premium uit als in het echt. Beste investering van dit jaar.',
      'proof.t3.name': 'Lisa Bakker', 'proof.t3.biz': 'Schoonheidssalon, Utrecht',
      'proof.trusted': 'Vertrouwd door merken in heel Nederland',
      'pkg.tag': 'Pakketten', 'pkg.title': 'Maandelijkse Contentpakketten',
      'pkg.sub': 'Kies het plan dat past bij uw bedrijfsdoelen en budget.',
      'pkg.mo': 'mnd', 'pkg.popular': 'Meest Populair', 'pkg.select': 'Aan de Slag',
      'pkg.l.reels': 'Reels (10-25 sec)', 'pkg.l.visuals': 'Statische visuals', 'pkg.l.carousel': 'Carrousel set',
      'pkg.l.basic': 'Basis contentkalender', 'pkg.l.revisions1': '1 revisieronde',
      'pkg.p.reels': 'Reels (10-25 sec)', 'pkg.p.visuals': 'Statische visuals', 'pkg.p.carousel': 'Carrousel sets',
      'pkg.p.strategy': 'Volledige contentstrategie', 'pkg.p.revisions': '2 revisierondes', 'pkg.p.calendar': 'Publicatiekalender',
      'pkg.pr.reels': 'Reels (10-30 sec)', 'pkg.pr.visuals': 'Statische visuals', 'pkg.pr.carousel': 'Carrousel sets',
      'pkg.pr.brand': 'Volledig merkidentiteitspakket', 'pkg.pr.revisions': 'Onbeperkte revisies',
      'pkg.pr.manager': 'Toegewezen manager', 'pkg.pr.priority': 'Prioriteitsondersteuning',
      'proc.tag': 'Proces', 'proc.title': '5 Stappen naar Resultaat',
      'proc.sub': 'Eenvoudig en transparant — van briefing tot kant-en-klare content.',
      'proc.s1.title': 'Kennismakingsgesprek', 'proc.s1.text': 'We leren uw niche, product, doelgroep en doelen kennen in een gratis gesprek van 30 minuten.',
      'proc.s2.title': 'Strategie & Stijl', 'proc.s2.text': 'We bepalen uw contentrichting, visuele identiteit en postritme.',
      'proc.s3.title': 'AI Creatie', 'proc.s3.text': 'Ons team genereert visuals, reels en teksten met AI + menselijke creatieve regie.',
      'proc.s4.title': 'Beoordeling & Goedkeuring', 'proc.s4.text': 'U beoordeelt alles, vraagt wijzigingen aan en keurt de definitieve materialen goed.',
      'proc.s5.title': 'Lancering & Groei', 'proc.s5.text': 'Content gaat live met een volledig publicatieschema. Zie uw engagement groeien.',
      'faq.tag': 'FAQ', 'faq.title': 'Veelgestelde Vragen',
      'faq.q1': 'Hoe werkt AI-contentcreatie?',
      'faq.a1': 'We gebruiken geavanceerde AI-tools in combinatie met menselijke creatieve regie om visuals, video\'s en teksten te genereren. Elk stuk wordt beoordeeld en verfijnd door ons team om ervoor te zorgen dat het perfect bij uw merk past. Het resultaat is premium content tegen een fractie van de tijd en kosten van traditionele productie.',
      'faq.q2': 'Hoe snel kunnen we beginnen?',
      'faq.a2': 'Na ons kennismakingsgesprek leveren we doorgaans uw eerste batch content binnen 5-7 werkdagen. Het onboardingproces is snel — we hebben alleen uw merkassets en een kort gesprek over uw doelen nodig.',
      'faq.q3': 'Zijn wij eigenaar van de content die u maakt?',
      'faq.a3': 'Ja, 100%. Alle content die wij maken is van u. U ontvangt volledige rechten om het te gebruiken op elk platform, in advertenties, op uw website — waar u het ook nodig heeft. Zonder voorwaarden.',
      'faq.q4': 'Kunnen we revisies aanvragen?',
      'faq.a4': 'Absoluut. Elk pakket bevat revisierondes (1 voor Lite, 2 voor Pro, onbeperkt voor Premium). We willen dat u volledig tevreden bent met elk stuk content voordat het live gaat.',
      'faq.q5': 'Voor welke platforms maken jullie content?',
      'faq.a5': 'We maken content geoptimaliseerd voor Instagram, TikTok, Facebook, LinkedIn en YouTube Shorts. Elk stuk is correct geformatteerd en gedimensioneerd voor het doelplatform om engagement te maximaliseren.',
      'faq.q6': 'Is er een minimale contractperiode?',
      'faq.a6': 'We raden minimaal 3 maanden aan om echte resultaten te zien van een contentsysteem. Er is echter geen langetermijnverplichting — u kunt opzeggen met 30 dagen opzegtermijn. De meeste klanten blijven omdat ze de resultaten zien.',
      'cta.title': 'Klaar Om Uw Content Te Transformeren?',
      'cta.sub': 'Boek een gratis strategiegesprek of stuur ons een bericht. Wij maken een op maat gemaakt contentplan voor uw bedrijf.',
      'cta.location': 'Gevestigd in Nederland',
      'form.name': 'Uw Naam', 'form.email': 'E-mailadres', 'form.business': 'Bedrijfstype',
      'form.bizPlaceholder': 'Selecteer uw sector', 'form.bizOpt1': 'E-commerce',
      'form.bizOpt2': 'Beauty & Wellness', 'form.bizOpt3': 'Klinieken & Gezondheidszorg',
      'form.bizOpt4': 'HoReCa', 'form.bizOpt5': 'Vastgoed', 'form.bizOpt6': 'Tech & SaaS', 'form.bizOpt7': 'Anders',
      'form.message': 'Bericht (optioneel)', 'form.submit': 'Verstuur Bericht',
      'form.successTitle': 'Bericht Verzonden!', 'form.successText': 'We nemen binnen 24 uur contact met u op. Check uw inbox!'
    },
    de: {
      'nav.problem': 'Problem', 'nav.solution': 'Losung', 'nav.portfolio': 'Portfolio',
      'nav.packages': 'Pakete', 'nav.faq': 'FAQ', 'nav.contact': 'Termin buchen',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'AI Content Der',
      'hero.title2': 'Das Scrollen Stoppt',
      'hero.sub': 'Wir erstellen KI-gestutzte Visuals und Videoinhalte, die Aufmerksamkeit erregen, Vertrauen aufbauen und Follower in zahlende Kunden verwandeln.',
      'hero.cta': 'Kostenloses Strategiegesprach Buchen', 'hero.cta2': 'Unsere Arbeit Ansehen',
      'hero.m1': 'Gelieferte Projekte', 'hero.m2': 'Betreute Marken', 'hero.m3': 'Durchschn. Engagement-Boost',
      'pain.tag': 'Das Problem', 'pain.title': 'Warum Ihr Content Nicht Funktioniert',
      'pain.sub': 'Menschen ertrinken in Content. Die meisten Posts verschwinden in unter einer Sekunde. Hier erfahren Sie warum.',
      'pain.c1.title': 'Kein Visueller Haken', 'pain.c1.text': 'Ihr Content stoppt das Scrollen nicht. Nutzer fliegen in Sekundenbruchteilen vorbei, ohne einen zweiten Blick.',
      'pain.c2.title': 'Sieht Aus Wie Alle Anderen', 'pain.c2.text': 'Generische Templates gehen im Feed unter. Ihre Marke verschmilzt statt aufzufallen.',
      'pain.c3.title': 'Keine Konsistenz', 'pain.c3.text': 'Ohne regelmassigen Rhythmus gibt es keine Wiedererkennung. Ihr Publikum vergisst Sie zwischen sporadischen Posts.',
      'pain.c4.title': 'Keine Strategie', 'pain.c4.text': 'Content ohne Funnel ist nur Rauschen. Es gibt kein System, das Leads aufwarmt und Aktionen antreibt.',
      'sol.tag': 'Unsere Losung', 'sol.title': 'Das VellumCadence System',
      'sol.sub': 'Nicht nur Content. Ein komplettes Aufmerksamkeitssystem, das Ihr Wachstum vorhersagbar und skalierbar macht.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'KI-Geschwindigkeit', 'sol.c1.text': 'KI-gestutzte Generierung ermoglicht es uns, Content schnell, konsistent und skalierbar zu erstellen — keine langen Fotoshootings notig.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Neurovisuals', 'sol.c2.text': 'Visuals, die das Auge fesseln und Neugier wecken. Keine Stock-Templates — ein einzigartiger Stil fur Ihre Marke.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Marketing-Logik', 'sol.c3.text': 'Jedes Stuck erfullt einen Zweck in Ihrem Funnel: Aufmerksamkeit erregen, Vertrauen aufbauen oder den Verkauf vorantreiben.',
      'who.tag': 'Branchen', 'who.title': 'Mit Wem Wir Arbeiten',
      'who.sub': 'Wir helfen Marken branchenubergreifend, scroll-stoppende Content-Systeme aufzubauen.',
      'who.c1': 'E-Commerce', 'who.c2': 'Beauty & Wellness', 'who.c3': 'Kliniken & Gesundheitswesen',
      'who.c4': 'HoReCa', 'who.c5': 'Immobilien', 'who.c6': 'Tech & SaaS',
      'port.tag': 'Portfolio', 'port.title': 'Unsere Arbeit',
      'port.sub': 'Ein Einblick in die Content-Typen, die wir jeden Monat fur unsere Kunden erstellen.',
      'port.c1': 'Reels & Kurzvideos', 'port.c2': 'Karussells', 'port.c3': 'Markenidentitat',
      'port.c4': 'Vorher / Nachher', 'port.c5': 'Produktfotografie', 'port.c6': 'Social Templates',
      'proof.tag': 'Referenzen', 'proof.title': 'Ergebnisse Unserer Kunden',
      'proof.sub': 'Echte Wirkung von echten Unternehmen, die sich fur das VellumCadence-System entschieden haben.',
      'proof.t1.text': 'Innerhalb des ersten Monats hat sich unser Instagram-Engagement verdreifacht. Der KI-generierte Content sieht premium aus und unsere Follower konnen keinen Unterschied zu traditionellen Shoots erkennen.',
      'proof.t1.name': 'Sarah de Vries', 'proof.t1.biz': 'E-Commerce, Amsterdam',
      'proof.t2.text': 'Wir sind von einmal pro Woche posten zu einem vollen Content-Kalender ubergegangen. Die Qualitat ist konsistent und unsere Buchungsrate stieg um 40% in zwei Monaten.',
      'proof.t2.name': 'Marc Jansen', 'proof.t2.biz': 'Zahnklinik, Rotterdam',
      'proof.t3.text': 'Die Reels, die sie erstellt haben, gingen zweimal viral. Unsere Marke sieht online endlich so premium aus wie personlich. Beste Investition dieses Jahres.',
      'proof.t3.name': 'Lisa Bakker', 'proof.t3.biz': 'Schonheitssalon, Utrecht',
      'proof.trusted': 'Vertraut von Marken in den gesamten Niederlanden',
      'pkg.tag': 'Pakete', 'pkg.title': 'Monatliche Content-Pakete',
      'pkg.sub': 'Wahlen Sie den Plan, der zu Ihren Geschaftszielen und Ihrem Budget passt.',
      'pkg.mo': 'Mt.', 'pkg.popular': 'Am Beliebtesten', 'pkg.select': 'Jetzt Starten',
      'pkg.l.reels': 'Reels (10-25 Sek.)', 'pkg.l.visuals': 'Statische Visuals', 'pkg.l.carousel': 'Karussell-Set',
      'pkg.l.basic': 'Basis Content-Kalender', 'pkg.l.revisions1': '1 Revisionsrunde',
      'pkg.p.reels': 'Reels (10-25 Sek.)', 'pkg.p.visuals': 'Statische Visuals', 'pkg.p.carousel': 'Karussell-Sets',
      'pkg.p.strategy': 'Vollstandige Content-Strategie', 'pkg.p.revisions': '2 Revisionsrunden', 'pkg.p.calendar': 'Veroffentlichungskalender',
      'pkg.pr.reels': 'Reels (10-30 Sek.)', 'pkg.pr.visuals': 'Statische Visuals', 'pkg.pr.carousel': 'Karussell-Sets',
      'pkg.pr.brand': 'Komplettes Markenidentitats-Kit', 'pkg.pr.revisions': 'Unbegrenzte Revisionen',
      'pkg.pr.manager': 'Dedizierter Manager', 'pkg.pr.priority': 'Prioritats-Support',
      'proc.tag': 'Prozess', 'proc.title': '5 Schritte zum Ergebnis',
      'proc.sub': 'Einfach und transparent — vom Briefing bis zum fertigen Content.',
      'proc.s1.title': 'Kennenlerngesprach', 'proc.s1.text': 'Wir lernen Ihre Nische, Ihr Produkt, Ihre Zielgruppe und Ihre Ziele in einem kostenlosen 30-minutigen Gesprach kennen.',
      'proc.s2.title': 'Strategie & Stil', 'proc.s2.text': 'Wir definieren Ihre Content-Richtung, visuelle Identitat und Posting-Rhythmus.',
      'proc.s3.title': 'KI-Erstellung', 'proc.s3.text': 'Unser Team generiert Visuals, Reels und Texte mit KI + menschlicher kreativer Leitung.',
      'proc.s4.title': 'Review & Freigabe', 'proc.s4.text': 'Sie prufen alles, fordern Anderungen an und genehmigen die finalen Materialien.',
      'proc.s5.title': 'Launch & Wachstum', 'proc.s5.text': 'Content geht live mit einem vollstandigen Veroffentlichungsplan. Beobachten Sie, wie Ihr Engagement wachst.',
      'faq.tag': 'FAQ', 'faq.title': 'Haufig Gestellte Fragen',
      'faq.q1': 'Wie funktioniert KI-Content-Erstellung?',
      'faq.a1': 'Wir verwenden fortschrittliche KI-Tools in Kombination mit menschlicher kreativer Leitung, um Visuals, Videos und Texte zu generieren. Jedes Stuck wird von unserem Team uberpruft und verfeinert, um sicherzustellen, dass es perfekt zu Ihrer Marke passt.',
      'faq.q2': 'Wie schnell konnen wir beginnen?',
      'faq.a2': 'Nach unserem Kennenlerngesprach liefern wir in der Regel Ihre erste Content-Charge innerhalb von 5-7 Werktagen. Der Onboarding-Prozess ist schnell — wir benotigen nur Ihre Marken-Assets und ein kurzes Gesprach uber Ihre Ziele.',
      'faq.q3': 'Gehort uns der Content, den Sie erstellen?',
      'faq.a3': 'Ja, 100%. Aller Content, den wir erstellen, gehort Ihnen. Sie erhalten volle Rechte, ihn auf jeder Plattform, in Anzeigen, auf Ihrer Website zu nutzen — wo auch immer Sie ihn brauchen.',
      'faq.q4': 'Konnen wir Revisionen anfordern?',
      'faq.a4': 'Absolut. Jedes Paket beinhaltet Revisionsrunden (1 fur Lite, 2 fur Pro, unbegrenzt fur Premium). Wir mochten, dass Sie mit jedem Stuck Content vollkommen zufrieden sind.',
      'faq.q5': 'Fur welche Plattformen erstellen Sie Content?',
      'faq.a5': 'Wir erstellen Content, der fur Instagram, TikTok, Facebook, LinkedIn und YouTube Shorts optimiert ist. Jedes Stuck ist korrekt formatiert und dimensioniert fur die Zielplattform.',
      'faq.q6': 'Gibt es eine Mindestvertragslaufzeit?',
      'faq.a6': 'Wir empfehlen mindestens 3 Monate, um echte Ergebnisse von einem Content-System zu sehen. Es gibt jedoch keine langfristige Bindung — Sie konnen mit 30 Tagen Kundigungsfrist kundigen.',
      'cta.title': 'Bereit, Ihren Content Zu Transformieren?',
      'cta.sub': 'Buchen Sie ein kostenloses Strategiegesprach oder senden Sie uns eine Nachricht. Wir erstellen einen massgeschneiderten Content-Plan fur Ihr Unternehmen.',
      'cta.location': 'Standort: Niederlande',
      'form.name': 'Ihr Name', 'form.email': 'E-Mail-Adresse', 'form.business': 'Unternehmenstyp',
      'form.bizPlaceholder': 'Wahlen Sie Ihre Branche', 'form.bizOpt1': 'E-Commerce',
      'form.bizOpt2': 'Beauty & Wellness', 'form.bizOpt3': 'Kliniken & Gesundheitswesen',
      'form.bizOpt4': 'HoReCa', 'form.bizOpt5': 'Immobilien', 'form.bizOpt6': 'Tech & SaaS', 'form.bizOpt7': 'Sonstiges',
      'form.message': 'Nachricht (optional)', 'form.submit': 'Nachricht Senden',
      'form.successTitle': 'Nachricht Gesendet!', 'form.successText': 'Wir melden uns innerhalb von 24 Stunden bei Ihnen. Prufen Sie Ihren Posteingang!'
    },
    ru: {
      'nav.problem': 'Проблема', 'nav.solution': 'Решение', 'nav.portfolio': 'Портфолио',
      'nav.packages': 'Пакеты', 'nav.faq': 'FAQ', 'nav.contact': 'Записаться',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'AI-контент, который',
      'hero.title2': 'останавливает скролл',
      'hero.sub': 'Мы создаём AI-визуалы и видеоконтент, которые захватывают внимание, формируют доверие и превращают подписчиков в клиентов.',
      'hero.cta': 'Бесплатная стратегическая консультация', 'hero.cta2': 'Наши работы',
      'hero.m1': 'Проектов выполнено', 'hero.m2': 'Брендов обслужено', 'hero.m3': 'Рост вовлечённости',
      'pain.tag': 'Проблема', 'pain.title': 'Почему ваш контент не работает',
      'pain.sub': 'Люди тонут в контенте. Большинство постов исчезают меньше чем за секунду. Вот почему ваш может быть невидимым.',
      'pain.c1.title': 'Нет визуального крючка', 'pain.c1.text': 'Ваш контент не останавливает скролл. Пользователи пролетают мимо за долю секунды, не задерживая взгляд.',
      'pain.c2.title': 'Выглядит как у всех', 'pain.c2.text': 'Шаблонные визуалы тонут в ленте. Ваш бренд сливается с остальными, а не выделяется.',
      'pain.c3.title': 'Нет регулярности', 'pain.c3.text': 'Без регулярного ритма нет узнаваемости. Аудитория забывает о вас между редкими постами.',
      'pain.c4.title': 'Нет стратегии', 'pain.c4.text': 'Контент без воронки — это просто шум. Нет системы, которая прогревает лидов и побуждает к действию.',
      'sol.tag': 'Наше решение', 'sol.title': 'Система VellumCadence',
      'sol.sub': 'Не просто контент. Полноценная система внимания, которая делает ваш рост предсказуемым и масштабируемым.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'Скорость AI', 'sol.c1.text': 'AI-генерация позволяет создавать контент быстро, стабильно и масштабируемо — без долгих фотосессий.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Нейровизуалы', 'sol.c2.text': 'Визуалы, спроектированные так, чтобы цеплять взгляд и вызывать интерес. Не стоковые шаблоны — уникальный стиль для вашего бренда.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Маркетинговая логика', 'sol.c3.text': 'Каждый материал служит цели в вашей воронке: привлечь внимание, укрепить доверие или стимулировать продажу.',
      'who.tag': 'Отрасли', 'who.title': 'С кем мы работаем',
      'who.sub': 'Мы помогаем брендам из разных отраслей создавать контент-системы, останавливающие скролл.',
      'who.c1': 'E-commerce', 'who.c2': 'Красота и здоровье', 'who.c3': 'Клиники и медицина',
      'who.c4': 'HoReCa', 'who.c5': 'Недвижимость', 'who.c6': 'Tech & SaaS',
      'port.tag': 'Портфолио', 'port.title': 'Наши работы',
      'port.sub': 'Обзор типов контента, которые мы ежемесячно создаём для клиентов.',
      'port.c1': 'Reels и короткие видео', 'port.c2': 'Карусели', 'port.c3': 'Айдентика бренда',
      'port.c4': 'До / После', 'port.c5': 'Продуктовые съёмки', 'port.c6': 'Шаблоны для соцсетей',
      'proof.tag': 'Отзывы', 'proof.title': 'Результаты наших клиентов',
      'proof.sub': 'Реальное влияние на реальный бизнес, который выбрал систему VellumCadence.',
      'proof.t1.text': 'В первый же месяц наша вовлечённость в Instagram утроилась. AI-контент выглядит премиально, и подписчики не отличают его от традиционных съёмок.',
      'proof.t1.name': 'Сара де Фрис', 'proof.t1.biz': 'E-commerce, Амстердам',
      'proof.t2.text': 'Мы перешли от одного поста в неделю к полному контент-календарю. Качество стабильное, и количество бронирований выросло на 40% за два месяца.',
      'proof.t2.name': 'Марк Янсен', 'proof.t2.biz': 'Стоматологическая клиника, Роттердам',
      'proof.t3.text': 'Reels, которые они создали, дважды стали вирусными. Наш бренд наконец выглядит онлайн так же премиально, как вживую. Лучшая инвестиция года.',
      'proof.t3.name': 'Лиза Баккер', 'proof.t3.biz': 'Салон красоты, Утрехт',
      'proof.trusted': 'Нам доверяют бренды по всей Голландии',
      'pkg.tag': 'Пакеты', 'pkg.title': 'Ежемесячные контент-пакеты',
      'pkg.sub': 'Выберите план, подходящий вашим бизнес-целям и бюджету.',
      'pkg.mo': 'мес', 'pkg.popular': 'Самый популярный', 'pkg.select': 'Начать',
      'pkg.l.reels': 'Reels (10-25 сек)', 'pkg.l.visuals': 'Статичных визуалов', 'pkg.l.carousel': 'Карусель',
      'pkg.l.basic': 'Базовый контент-календарь', 'pkg.l.revisions1': '1 раунд правок',
      'pkg.p.reels': 'Reels (10-25 сек)', 'pkg.p.visuals': 'Статичных визуалов', 'pkg.p.carousel': 'Карусели',
      'pkg.p.strategy': 'Полная контент-стратегия', 'pkg.p.revisions': '2 раунда правок', 'pkg.p.calendar': 'Календарь публикаций',
      'pkg.pr.reels': 'Reels (10-30 сек)', 'pkg.pr.visuals': 'Статичных визуалов', 'pkg.pr.carousel': 'Карусели',
      'pkg.pr.brand': 'Полный набор айдентики', 'pkg.pr.revisions': 'Безлимитные правки',
      'pkg.pr.manager': 'Выделенный менеджер', 'pkg.pr.priority': 'Приоритетная поддержка',
      'proc.tag': 'Процесс', 'proc.title': '5 шагов к результату',
      'proc.sub': 'Просто и прозрачно — от брифа до готового контента.',
      'proc.s1.title': 'Знакомство', 'proc.s1.text': 'Узнаём вашу нишу, продукт, целевую аудиторию и цели на бесплатной 30-минутной консультации.',
      'proc.s2.title': 'Стратегия и стиль', 'proc.s2.text': 'Определяем направление контента, визуальную айдентику и ритм публикаций.',
      'proc.s3.title': 'AI-создание', 'proc.s3.text': 'Наша команда генерирует визуалы, рилсы и тексты с помощью AI + креативного руководства.',
      'proc.s4.title': 'Согласование', 'proc.s4.text': 'Вы просматриваете всё, запрашиваете правки и утверждаете финальные материалы.',
      'proc.s5.title': 'Запуск и рост', 'proc.s5.text': 'Контент публикуется по полному календарю. Наблюдайте, как растёт вовлечённость.',
      'faq.tag': 'FAQ', 'faq.title': 'Часто задаваемые вопросы',
      'faq.q1': 'Как работает создание AI-контента?',
      'faq.a1': 'Мы используем продвинутые AI-инструменты в сочетании с человеческим креативным руководством для генерации визуалов, видео и текстов. Каждый материал проверяется и дорабатывается нашей командой, чтобы идеально соответствовать вашему бренду.',
      'faq.q2': 'Как быстро мы можем начать?',
      'faq.a2': 'После знакомства мы обычно доставляем первую партию контента в течение 5-7 рабочих дней. Процесс онбординга быстрый — нам нужны только ваши бренд-материалы и короткий разговор о целях.',
      'faq.q3': 'Принадлежит ли нам контент, который вы создаёте?',
      'faq.a3': 'Да, на 100%. Весь контент, который мы создаём, принадлежит вам. Вы получаете полные права использовать его на любой платформе, в рекламе, на сайте — везде, где нужно.',
      'faq.q4': 'Можно ли запрашивать правки?',
      'faq.a4': 'Безусловно. Каждый пакет включает раунды правок (1 для Lite, 2 для Pro, без ограничений для Premium). Мы хотим, чтобы вы были полностью довольны каждым материалом.',
      'faq.q5': 'Для каких платформ вы создаёте контент?',
      'faq.a5': 'Мы создаём контент, оптимизированный для Instagram, TikTok, Facebook, LinkedIn и YouTube Shorts. Каждый материал правильно отформатирован для целевой платформы.',
      'faq.q6': 'Есть ли минимальный срок контракта?',
      'faq.a6': 'Мы рекомендуем минимум 3 месяца для получения реальных результатов. Однако долгосрочной привязки нет — вы можете отменить с уведомлением за 30 дней. Большинство клиентов остаются, потому что видят результаты.',
      'cta.title': 'Готовы трансформировать ваш контент?',
      'cta.sub': 'Запишитесь на бесплатную стратегическую консультацию или отправьте нам сообщение. Мы создадим индивидуальный контент-план для вашего бизнеса.',
      'cta.location': 'Мы базируемся в Нидерландах',
      'form.name': 'Ваше имя', 'form.email': 'Email', 'form.business': 'Тип бизнеса',
      'form.bizPlaceholder': 'Выберите отрасль', 'form.bizOpt1': 'E-commerce',
      'form.bizOpt2': 'Красота и здоровье', 'form.bizOpt3': 'Клиники и медицина',
      'form.bizOpt4': 'HoReCa', 'form.bizOpt5': 'Недвижимость', 'form.bizOpt6': 'Tech & SaaS', 'form.bizOpt7': 'Другое',
      'form.message': 'Сообщение (необязательно)', 'form.submit': 'Отправить',
      'form.successTitle': 'Сообщение отправлено!', 'form.successText': 'Мы свяжемся с вами в течение 24 часов. Проверяйте почту!'
    },
    uk: {
      'nav.problem': 'Проблема', 'nav.solution': 'Рішення', 'nav.portfolio': 'Портфоліо',
      'nav.packages': 'Пакети', 'nav.faq': 'FAQ', 'nav.contact': 'Записатися',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'AI-контент, який',
      'hero.title2': 'зупиняє скрол',
      'hero.sub': 'Ми створюємо AI-візуали та відеоконтент, які захоплюють увагу, формують довіру та перетворюють підписників на клієнтів.',
      'hero.cta': 'Безкоштовна стратегічна консультація', 'hero.cta2': 'Наші роботи',
      'hero.m1': 'Проєктів виконано', 'hero.m2': 'Брендів обслуговано', 'hero.m3': 'Зростання залученості',
      'pain.tag': 'Проблема', 'pain.title': 'Чому ваш контент не працює',
      'pain.sub': 'Люди тонуть у контенті. Більшість постів зникають менш ніж за секунду. Ось чому ваш може бути невидимим.',
      'pain.c1.title': 'Немає візуального гачка', 'pain.c1.text': 'Ваш контент не зупиняє скрол. Користувачі пролітають повз за частку секунди, не затримуючи погляд.',
      'pain.c2.title': 'Виглядає як у всіх', 'pain.c2.text': 'Шаблонні візуали тонуть у стрічці. Ваш бренд зливається з рештою замість того, щоб виділятися.',
      'pain.c3.title': 'Немає регулярності', 'pain.c3.text': 'Без регулярного ритму немає впізнаваності. Аудиторія забуває про вас між рідкісними постами.',
      'pain.c4.title': 'Немає стратегії', 'pain.c4.text': 'Контент без воронки — це просто шум. Немає системи, яка прогріває лідів та спонукає до дії.',
      'sol.tag': 'Наше рішення', 'sol.title': 'Система VellumCadence',
      'sol.sub': 'Не просто контент. Повноцінна система уваги, яка робить ваше зростання передбачуваним та масштабованим.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'Швидкість AI', 'sol.c1.text': 'AI-генерація дозволяє створювати контент швидко, стабільно та масштабовано — без довгих фотосесій.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Нейровізуали', 'sol.c2.text': 'Візуали, спроєктовані так, щоб чіпляти погляд та викликати цікавість. Не стокові шаблони — унікальний стиль для вашого бренду.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Маркетингова логіка', 'sol.c3.text': 'Кожен матеріал слугує меті у вашій воронці: привернути увагу, зміцнити довіру або стимулювати продаж.',
      'who.tag': 'Галузі', 'who.title': 'З ким ми працюємо',
      'who.sub': 'Ми допомагаємо брендам з різних галузей створювати контент-системи, що зупиняють скрол.',
      'who.c1': 'E-commerce', 'who.c2': 'Краса та здоров\'я', 'who.c3': 'Клініки та медицина',
      'who.c4': 'HoReCa', 'who.c5': 'Нерухомість', 'who.c6': 'Tech & SaaS',
      'port.tag': 'Портфоліо', 'port.title': 'Наші роботи',
      'port.sub': 'Огляд типів контенту, які ми щомісяця створюємо для клієнтів.',
      'port.c1': 'Reels та короткі відео', 'port.c2': 'Каруселі', 'port.c3': 'Айдентика бренду',
      'port.c4': 'До / Після', 'port.c5': 'Продуктові зйомки', 'port.c6': 'Шаблони для соцмереж',
      'proof.tag': 'Відгуки', 'proof.title': 'Результати наших клієнтів',
      'proof.sub': 'Реальний вплив на реальний бізнес, який обрав систему VellumCadence.',
      'proof.t1.text': 'У перший же місяць наша залученість в Instagram потроїлася. AI-контент виглядає преміально, і підписники не відрізняють його від традиційних зйомок.',
      'proof.t1.name': 'Сара де Фріс', 'proof.t1.biz': 'E-commerce, Амстердам',
      'proof.t2.text': 'Ми перейшли від одного посту на тиждень до повного контент-календаря. Якість стабільна, і кількість бронювань зросла на 40% за два місяці.',
      'proof.t2.name': 'Марк Янсен', 'proof.t2.biz': 'Стоматологічна клініка, Роттердам',
      'proof.t3.text': 'Reels, які вони створили, двічі стали вірусними. Наш бренд нарешті виглядає онлайн так само преміально, як наживо. Найкраща інвестиція року.',
      'proof.t3.name': 'Ліза Баккер', 'proof.t3.biz': 'Салон краси, Утрехт',
      'proof.trusted': 'Нам довіряють бренди по всій Голландії',
      'pkg.tag': 'Пакети', 'pkg.title': 'Щомісячні контент-пакети',
      'pkg.sub': 'Оберіть план, що підходить вашим бізнес-цілям та бюджету.',
      'pkg.mo': 'міс', 'pkg.popular': 'Найпопулярніший', 'pkg.select': 'Почати',
      'pkg.l.reels': 'Reels (10-25 сек)', 'pkg.l.visuals': 'Статичних візуалів', 'pkg.l.carousel': 'Карусель',
      'pkg.l.basic': 'Базовий контент-календар', 'pkg.l.revisions1': '1 раунд правок',
      'pkg.p.reels': 'Reels (10-25 сек)', 'pkg.p.visuals': 'Статичних візуалів', 'pkg.p.carousel': 'Каруселі',
      'pkg.p.strategy': 'Повна контент-стратегія', 'pkg.p.revisions': '2 раунди правок', 'pkg.p.calendar': 'Календар публікацій',
      'pkg.pr.reels': 'Reels (10-30 сек)', 'pkg.pr.visuals': 'Статичних візуалів', 'pkg.pr.carousel': 'Каруселі',
      'pkg.pr.brand': 'Повний набір айдентики', 'pkg.pr.revisions': 'Безлімітні правки',
      'pkg.pr.manager': 'Виділений менеджер', 'pkg.pr.priority': 'Пріоритетна підтримка',
      'proc.tag': 'Процес', 'proc.title': '5 кроків до результату',
      'proc.sub': 'Просто та прозоро — від брифу до готового контенту.',
      'proc.s1.title': 'Знайомство', 'proc.s1.text': 'Дізнаємось вашу нішу, продукт, цільову аудиторію та цілі на безкоштовній 30-хвилинній консультації.',
      'proc.s2.title': 'Стратегія та стиль', 'proc.s2.text': 'Визначаємо напрямок контенту, візуальну айдентику та ритм публікацій.',
      'proc.s3.title': 'AI-створення', 'proc.s3.text': 'Наша команда генерує візуали, рілси та тексти за допомогою AI + креативного керівництва.',
      'proc.s4.title': 'Погодження', 'proc.s4.text': 'Ви переглядаєте все, запитуєте правки та затверджуєте фінальні матеріали.',
      'proc.s5.title': 'Запуск та зростання', 'proc.s5.text': 'Контент публікується за повним календарем. Спостерігайте, як зростає залученість.',
      'faq.tag': 'FAQ', 'faq.title': 'Часті запитання',
      'faq.q1': 'Як працює створення AI-контенту?',
      'faq.a1': 'Ми використовуємо просунуті AI-інструменти у поєднанні з людським креативним керівництвом для генерації візуалів, відео та текстів. Кожен матеріал перевіряється та доопрацьовується нашою командою.',
      'faq.q2': 'Як швидко ми можемо почати?',
      'faq.a2': 'Після знайомства ми зазвичай доставляємо першу партію контенту протягом 5-7 робочих днів. Процес онбордингу швидкий — нам потрібні лише ваші бренд-матеріали та коротка розмова про цілі.',
      'faq.q3': 'Чи належить нам контент, який ви створюєте?',
      'faq.a3': 'Так, на 100%. Весь контент, який ми створюємо, належить вам. Ви отримуєте повні права використовувати його на будь-якій платформі, в рекламі, на сайті — скрізь, де потрібно.',
      'faq.q4': 'Чи можна запитувати правки?',
      'faq.a4': 'Безумовно. Кожен пакет включає раунди правок (1 для Lite, 2 для Pro, без обмежень для Premium). Ми хочемо, щоб ви були повністю задоволені кожним матеріалом.',
      'faq.q5': 'Для яких платформ ви створюєте контент?',
      'faq.a5': 'Ми створюємо контент, оптимізований для Instagram, TikTok, Facebook, LinkedIn та YouTube Shorts. Кожен матеріал правильно відформатований для цільової платформи.',
      'faq.q6': 'Чи є мінімальний термін контракту?',
      'faq.a6': 'Ми рекомендуємо мінімум 3 місяці для отримання реальних результатів. Однак довгострокової прив\'язки немає — ви можете скасувати з повідомленням за 30 днів.',
      'cta.title': 'Готові трансформувати ваш контент?',
      'cta.sub': 'Запишіться на безкоштовну стратегічну консультацію або надішліть нам повідомлення. Ми створимо індивідуальний контент-план для вашого бізнесу.',
      'cta.location': 'Ми базуємось у Нідерландах',
      'form.name': 'Ваше ім\'я', 'form.email': 'Email', 'form.business': 'Тип бізнесу',
      'form.bizPlaceholder': 'Оберіть галузь', 'form.bizOpt1': 'E-commerce',
      'form.bizOpt2': 'Краса та здоров\'я', 'form.bizOpt3': 'Клініки та медицина',
      'form.bizOpt4': 'HoReCa', 'form.bizOpt5': 'Нерухомість', 'form.bizOpt6': 'Tech & SaaS', 'form.bizOpt7': 'Інше',
      'form.message': 'Повідомлення (необов\'язково)', 'form.submit': 'Надіслати',
      'form.successTitle': 'Повідомлення надіслано!', 'form.successText': 'Ми зв\'яжемось з вами протягом 24 годин. Перевіряйте пошту!'
    }
  };

  /* ── Language detection & switching ── */
  var currentLang = 'en';
  var langLabel = document.getElementById('langLabel');
  var langSwitcher = document.getElementById('langSwitcher');
  var langBtn = document.getElementById('langBtn');
  var langDropdown = document.getElementById('langDropdown');

  function detectLanguage() {
    var stored = localStorage.getItem('vc-lang');
    if (stored && T[stored]) return stored;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('nl')) return 'nl';
    if (nav.startsWith('de')) return 'de';
    if (nav.startsWith('ru')) return 'ru';
    if (nav.startsWith('uk')) return 'uk';
    return 'en';
  }

  function applyLang(lang) {
    if (!T[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('vc-lang', lang);
    document.documentElement.lang = lang;
    langLabel.textContent = lang.toUpperCase() === 'UK' ? 'UA' : lang.toUpperCase();

    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (T[lang][key]) {
        els[i].textContent = T[lang][key];
      }
    }
  }

  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    langSwitcher.classList.toggle('open');
  });

  langDropdown.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang]');
    if (!btn) return;
    applyLang(btn.getAttribute('data-lang'));
    langSwitcher.classList.remove('open');
  });

  document.addEventListener('click', function () { langSwitcher.classList.remove('open'); });

  /* ── Nav scroll ── */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── Burger ── */
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });

  /* ── Scroll animations ── */
  var animEls = document.querySelectorAll('.anim');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animEls.forEach(function (el) { observer.observe(el); });

  /* ── Cursor glow (desktop) ── */
  var cursorGlow = document.getElementById('cursorGlow');
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', function (e) {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
      if (!cursorGlow.classList.contains('active')) cursorGlow.classList.add('active');
    });
  }

  /* ── 3D tilt for cards ── */
  if (window.matchMedia('(pointer: fine)').matches) {
    var tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) scale(1.02)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ── Background Canvas ── */
  var canvas = document.getElementById('bgCanvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var pCount = 60;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (var i = 0; i < pCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.4 + 0.1
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var j = 0; j < particles.length; j++) {
        var p = particles[j];
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139,92,246,' + p.o + ')';
        ctx.fill();
      }
      // Draw connections
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = 'rgba(139,92,246,' + (0.06 * (1 - dist / 150)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  /* ── FAQ accordion ── */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var qBtn = item.querySelector('.faq-q');
    qBtn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(function (fi) { fi.classList.remove('open'); });
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Form handling ── */
  var ctaForm = document.getElementById('ctaForm');
  var formSuccess = document.getElementById('formSuccess');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      ctaForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });
  }

  /* ── Background system height sync ── */
  function syncBgHeight() {
    var bgSystem = document.querySelector('.bg-system');
    if (bgSystem) {
      bgSystem.style.height = document.documentElement.scrollHeight + 'px';
    }
  }
  syncBgHeight();
  window.addEventListener('resize', syncBgHeight);
  // Recheck after fonts load
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncBgHeight);
  }
  // Recheck periodically for dynamic content
  setTimeout(syncBgHeight, 1000);
  setTimeout(syncBgHeight, 3000);

  /* ── Init ── */
  applyLang(detectLanguage());

})();
