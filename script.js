/* ===== VellumCadence — Script ===== */
(function () {
  'use strict';

  /* ── i18n translations ── */
  var T = {
    ru: {
      'nav.problem': 'Проблема', 'nav.solution': 'Решение', 'nav.funnel': 'Воронка',
      'nav.packages': 'Пакеты', 'nav.process': 'Процесс', 'nav.contact': 'Связаться',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'Ваш бизнес теряет клиентов',
      'hero.title2': 'не из-за продукта —',
      'hero.title3': 'а из-за невидимого контента.',
      'hero.sub': 'Мы создаём AI-контент и нейровизуализацию, которые останавливают скролл и превращают просмотры в заявки.',
      'hero.cta': 'Выбрать пакет', 'hero.cta2': 'Как это работает',
      'hero.m1': 'На захват внимания', 'hero.m2': 'Генерация контента', 'hero.m3': 'Системный ритм',
      'pain.tag': 'Проблема', 'pain.title': 'Почему ваш контент не работает?',
      'pain.sub': 'Люди перегружены информацией. Большинство постов просто пролетают мимо.',
      'pain.c1.title': 'Нет визуального крючка', 'pain.c1.text': 'Контент не останавливает скролл — пользователь пролетает мимо за доли секунды.',
      'pain.c2.title': 'Выглядит как у всех', 'pain.c2.text': 'Шаблонные визуалы теряются в ленте. Бренд не запоминается.',
      'pain.c3.title': 'Нет регулярности', 'pain.c3.text': 'Без ритма нет узнаваемости. Аудитория забывает о вас между постами.',
      'pain.c4.title': 'Нет системы', 'pain.c4.text': 'Контент не ведёт к действию. Нет воронки, которая прогревает и продаёт.',
      'pain.conclusion': 'Бизнес теряет не только охваты — он теряет клиентов, доверие и продажи.',
      'sol.tag': 'Решение', 'sol.title': 'Мы создаём систему внимания',
      'sol.sub': 'VellumCadence — это не просто контент. Это управляемый ритм, который делает рост предсказуемым.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'Скорость AI', 'sol.c1.text': 'AI-генерация позволяет создавать контент быстро, регулярно и масштабируемо — без долгих съёмок.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Нейровизуализация', 'sol.c2.text': 'Визуалы, которые цепляют взгляд и вызывают интерес. Не шаблоны — а уникальный стиль.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Маркетинговая логика', 'sol.c3.text': 'Каждый материал работает на конкретную задачу: внимание, доверие или действие.',
      'fun.tag': 'Воронка', 'fun.title': 'Контент-воронка внутри соцсетей',
      'fun.sub': 'Это не хаотичные публикации — а система, которая ведёт к продаже.',
      'fun.s1.title': 'Reels / креативы', 'fun.s1.text': 'Охват и привлечение новой аудитории',
      'fun.s2.title': 'Карусели / карточки', 'fun.s2.text': 'Объяснение пользы продукта',
      'fun.s3.title': 'Отзывы / до-после', 'fun.s3.text': 'Доверие и социальное доказательство',
      'fun.s4.title': 'Прогрев к покупке', 'fun.s4.text': 'Готовность написать, оставить заявку, купить',
      'pkg.tag': 'Пакеты', 'pkg.title': 'Ежемесячные пакеты контента',
      'pkg.sub': 'Выберите формат, который подходит вашему бизнесу.',
      'pkg.mo': 'мес', 'pkg.reels': 'Reels (10–25 сек)', 'pkg.visuals': 'визуалов',
      'pkg.total': 'единиц / месяц', 'pkg.select': 'Выбрать', 'pkg.popular': 'Популярный',
      'res.tag': 'Результат', 'res.title': 'На что влияет наша работа',
      'res.sub': 'Мы усиливаем самый дефицитный ресурс — внимание аудитории.',
      'res.r1': 'Удержание внимания', 'res.r2': 'Вовлечённость', 'res.r3': 'Узнаваемость бренда',
      'res.r4': 'Доверие к бизнесу', 'res.r5': 'Интерес к продукту', 'res.r6': 'Готовность купить',
      'proc.tag': 'Процесс', 'proc.title': '5 шагов к результату',
      'proc.sub': 'Просто и прозрачно — от брифа до готового контента.',
      'proc.s1.title': 'Бриф', 'proc.s1.text': 'Ниша, продукт, целевая аудитория, задачи',
      'proc.s2.title': 'Стратегия', 'proc.s2.text': 'Контент-направление и визуальный стиль',
      'proc.s3.title': 'Создание', 'proc.s3.text': 'AI-генерация + нейровизуализация',
      'proc.s4.title': 'Согласование', 'proc.s4.text': 'Правки и утверждение материалов',
      'proc.s5.title': 'Запуск', 'proc.s5.text': 'Готовый контент и публикационный план',
      'cta.title': 'Мы берём на себя креатив, чтобы вы сфокусировались на бизнесе.',
      'cta.sub': 'Напишите нам — предложим структуру контента под ваш бизнес на 30 дней.'
    },
    en: {
      'nav.problem': 'Problem', 'nav.solution': 'Solution', 'nav.funnel': 'Funnel',
      'nav.packages': 'Packages', 'nav.process': 'Process', 'nav.contact': 'Contact',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'Your business loses clients',
      'hero.title2': 'not because of the product —',
      'hero.title3': 'but because of invisible content.',
      'hero.sub': 'We create AI content and neurovisuals that stop the scroll and turn views into leads.',
      'hero.cta': 'Choose a plan', 'hero.cta2': 'How it works',
      'hero.m1': 'To capture attention', 'hero.m2': 'Content generation', 'hero.m3': 'Systematic rhythm',
      'pain.tag': 'Problem', 'pain.title': 'Why doesn\'t your content work?',
      'pain.sub': 'People are overwhelmed with information. Most posts just fly by.',
      'pain.c1.title': 'No visual hook', 'pain.c1.text': 'Content doesn\'t stop the scroll — users fly past in a fraction of a second.',
      'pain.c2.title': 'Looks like everyone else', 'pain.c2.text': 'Template visuals get lost in the feed. Your brand isn\'t memorable.',
      'pain.c3.title': 'No consistency', 'pain.c3.text': 'Without rhythm there\'s no recognition. Your audience forgets you between posts.',
      'pain.c4.title': 'No system', 'pain.c4.text': 'Content doesn\'t lead to action. No funnel that warms up and sells.',
      'pain.conclusion': 'Business loses not just reach — it loses clients, trust, and sales.',
      'sol.tag': 'Solution', 'sol.title': 'We build an attention system',
      'sol.sub': 'VellumCadence is not just content. It\'s a managed rhythm that makes growth predictable.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'AI Speed', 'sol.c1.text': 'AI generation lets you create content fast, regularly, and at scale — without long shoots.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Neurovisuals', 'sol.c2.text': 'Visuals that catch the eye and spark interest. Not templates — a unique style.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Marketing logic', 'sol.c3.text': 'Every piece works toward a specific goal: attention, trust, or action.',
      'fun.tag': 'Funnel', 'fun.title': 'Content funnel inside social media',
      'fun.sub': 'Not chaotic posts — but a system that leads to sales.',
      'fun.s1.title': 'Reels / creatives', 'fun.s1.text': 'Reach and attract new audience',
      'fun.s2.title': 'Carousels / cards', 'fun.s2.text': 'Explain product value',
      'fun.s3.title': 'Reviews / before-after', 'fun.s3.text': 'Trust and social proof',
      'fun.s4.title': 'Warm-up to purchase', 'fun.s4.text': 'Ready to message, apply, or buy',
      'pkg.tag': 'Packages', 'pkg.title': 'Monthly content packages',
      'pkg.sub': 'Choose the format that fits your business.',
      'pkg.mo': 'mo', 'pkg.reels': 'Reels (10–25 sec)', 'pkg.visuals': 'visuals',
      'pkg.total': 'units / month', 'pkg.select': 'Choose', 'pkg.popular': 'Popular',
      'res.tag': 'Results', 'res.title': 'What our work impacts',
      'res.sub': 'We amplify the scarcest resource — audience attention.',
      'res.r1': 'Attention retention', 'res.r2': 'Engagement', 'res.r3': 'Brand recognition',
      'res.r4': 'Business trust', 'res.r5': 'Product interest', 'res.r6': 'Purchase readiness',
      'proc.tag': 'Process', 'proc.title': '5 steps to results',
      'proc.sub': 'Simple and transparent — from brief to ready content.',
      'proc.s1.title': 'Brief', 'proc.s1.text': 'Niche, product, target audience, goals',
      'proc.s2.title': 'Strategy', 'proc.s2.text': 'Content direction and visual style',
      'proc.s3.title': 'Creation', 'proc.s3.text': 'AI generation + neurovisuals',
      'proc.s4.title': 'Approval', 'proc.s4.text': 'Edits and material approval',
      'proc.s5.title': 'Launch', 'proc.s5.text': 'Ready content and publication plan',
      'cta.title': 'We handle the creative so you can focus on business.',
      'cta.sub': 'Write to us — we\'ll propose a 30-day content structure for your business.'
    },
    uk: {
      'nav.problem': 'Проблема', 'nav.solution': 'Рішення', 'nav.funnel': 'Воронка',
      'nav.packages': 'Пакети', 'nav.process': 'Процес', 'nav.contact': "Зв'язатися",
      'hero.tag': 'AI Content Company',
      'hero.title1': 'Ваш бізнес втрачає клієнтів',
      'hero.title2': 'не через продукт —',
      'hero.title3': 'а через невидимий контент.',
      'hero.sub': 'Ми створюємо AI-контент та нейровізуалізацію, які зупиняють скрол і перетворюють перегляди на заявки.',
      'hero.cta': 'Обрати пакет', 'hero.cta2': 'Як це працює',
      'hero.m1': 'На захоплення уваги', 'hero.m2': 'Генерація контенту', 'hero.m3': 'Системний ритм',
      'pain.tag': 'Проблема', 'pain.title': 'Чому ваш контент не працює?',
      'pain.sub': 'Люди перевантажені інформацією. Більшість постів просто пролітають повз.',
      'pain.c1.title': 'Немає візуального гачка', 'pain.c1.text': 'Контент не зупиняє скрол — користувач пролітає за частки секунди.',
      'pain.c2.title': 'Виглядає як у всіх', 'pain.c2.text': 'Шаблонні візуали губляться у стрічці. Бренд не запам\'ятовується.',
      'pain.c3.title': 'Немає регулярності', 'pain.c3.text': 'Без ритму немає впізнаваності. Аудиторія забуває про вас між постами.',
      'pain.c4.title': 'Немає системи', 'pain.c4.text': 'Контент не веде до дії. Немає воронки, яка прогріває та продає.',
      'pain.conclusion': 'Бізнес втрачає не лише охоплення — він втрачає клієнтів, довіру та продажі.',
      'sol.tag': 'Рішення', 'sol.title': 'Ми створюємо систему уваги',
      'sol.sub': 'VellumCadence — це не просто контент. Це керований ритм, який робить зростання передбачуваним.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'Швидкість AI', 'sol.c1.text': 'AI-генерація дозволяє створювати контент швидко, регулярно та масштабовано.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Нейровізуалізація', 'sol.c2.text': 'Візуали, які чіпляють погляд та викликають інтерес. Не шаблони — а унікальний стиль.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Маркетингова логіка', 'sol.c3.text': 'Кожен матеріал працює на конкретне завдання: увага, довіра або дія.',
      'fun.tag': 'Воронка', 'fun.title': 'Контент-воронка всередині соцмереж',
      'fun.sub': 'Це не хаотичні публікації — а система, яка веде до продажу.',
      'fun.s1.title': 'Reels / креативи', 'fun.s1.text': 'Охоплення та залучення нової аудиторії',
      'fun.s2.title': 'Каруселі / картки', 'fun.s2.text': 'Пояснення користі продукту',
      'fun.s3.title': 'Відгуки / до-після', 'fun.s3.text': 'Довіра та соціальний доказ',
      'fun.s4.title': 'Прогрів до покупки', 'fun.s4.text': 'Готовність написати, залишити заявку, купити',
      'pkg.tag': 'Пакети', 'pkg.title': 'Щомісячні пакети контенту',
      'pkg.sub': 'Оберіть формат, який підходить вашому бізнесу.',
      'pkg.mo': 'міс', 'pkg.reels': 'Reels (10–25 сек)', 'pkg.visuals': 'візуалів',
      'pkg.total': 'одиниць / місяць', 'pkg.select': 'Обрати', 'pkg.popular': 'Популярний',
      'res.tag': 'Результат', 'res.title': 'На що впливає наша робота',
      'res.sub': 'Ми підсилюємо найдефіцитніший ресурс — увагу аудиторії.',
      'res.r1': 'Утримання уваги', 'res.r2': 'Залученість', 'res.r3': 'Впізнаваність бренду',
      'res.r4': 'Довіра до бізнесу', 'res.r5': 'Інтерес до продукту', 'res.r6': 'Готовність купити',
      'proc.tag': 'Процес', 'proc.title': '5 кроків до результату',
      'proc.sub': 'Просто та прозоро — від брифу до готового контенту.',
      'proc.s1.title': 'Бриф', 'proc.s1.text': 'Ніша, продукт, цільова аудиторія, завдання',
      'proc.s2.title': 'Стратегія', 'proc.s2.text': 'Контент-напрямок та візуальний стиль',
      'proc.s3.title': 'Створення', 'proc.s3.text': 'AI-генерація + нейровізуалізація',
      'proc.s4.title': 'Погодження', 'proc.s4.text': 'Правки та затвердження матеріалів',
      'proc.s5.title': 'Запуск', 'proc.s5.text': 'Готовий контент та план публікацій',
      'cta.title': 'Ми беремо на себе креатив, щоб ви сфокусувалися на бізнесі.',
      'cta.sub': 'Напишіть нам — запропонуємо структуру контенту під ваш бізнес на 30 днів.'
    },
    nl: {
      'nav.problem': 'Probleem', 'nav.solution': 'Oplossing', 'nav.funnel': 'Funnel',
      'nav.packages': 'Pakketten', 'nav.process': 'Proces', 'nav.contact': 'Contact',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'Uw bedrijf verliest klanten',
      'hero.title2': 'niet door het product —',
      'hero.title3': 'maar door onzichtbare content.',
      'hero.sub': 'Wij creëren AI-content en neurovisuals die het scrollen stoppen en views omzetten in leads.',
      'hero.cta': 'Kies een pakket', 'hero.cta2': 'Hoe het werkt',
      'hero.m1': 'Om aandacht te vangen', 'hero.m2': 'Content generatie', 'hero.m3': 'Systematisch ritme',
      'pain.tag': 'Probleem', 'pain.title': 'Waarom werkt uw content niet?',
      'pain.sub': 'Mensen worden overspoeld met informatie. De meeste posts vliegen voorbij.',
      'pain.c1.title': 'Geen visuele haak', 'pain.c1.text': 'Content stopt het scrollen niet — gebruikers vliegen in een fractie van een seconde voorbij.',
      'pain.c2.title': 'Ziet eruit als iedereen', 'pain.c2.text': 'Template visuals verdwijnen in de feed. Uw merk is niet memorabel.',
      'pain.c3.title': 'Geen consistentie', 'pain.c3.text': 'Zonder ritme geen herkenning. Uw publiek vergeet u tussen posts.',
      'pain.c4.title': 'Geen systeem', 'pain.c4.text': 'Content leidt niet tot actie. Geen funnel die opwarmt en verkoopt.',
      'pain.conclusion': 'Bedrijven verliezen niet alleen bereik — ze verliezen klanten, vertrouwen en verkoop.',
      'sol.tag': 'Oplossing', 'sol.title': 'Wij bouwen een aandachtssysteem',
      'sol.sub': 'VellumCadence is niet zomaar content. Het is een beheerst ritme dat groei voorspelbaar maakt.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'AI Snelheid', 'sol.c1.text': 'AI-generatie maakt het mogelijk om snel, regelmatig en schaalbaar content te creëren.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Neurovisuals', 'sol.c2.text': 'Visuals die de blik vangen en interesse wekken. Geen templates — een unieke stijl.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Marketing logica', 'sol.c3.text': 'Elk materiaal werkt aan een specifiek doel: aandacht, vertrouwen of actie.',
      'fun.tag': 'Funnel', 'fun.title': 'Content-funnel binnen social media',
      'fun.sub': 'Geen chaotische posts — maar een systeem dat leidt tot verkoop.',
      'fun.s1.title': 'Reels / creatives', 'fun.s1.text': 'Bereik en trek nieuw publiek aan',
      'fun.s2.title': 'Carrousels / kaarten', 'fun.s2.text': 'Leg productwaarde uit',
      'fun.s3.title': 'Reviews / voor-na', 'fun.s3.text': 'Vertrouwen en sociaal bewijs',
      'fun.s4.title': 'Opwarming tot aankoop', 'fun.s4.text': 'Klaar om te schrijven, aan te vragen of te kopen',
      'pkg.tag': 'Pakketten', 'pkg.title': 'Maandelijkse contentpakketten',
      'pkg.sub': 'Kies het formaat dat bij uw bedrijf past.',
      'pkg.mo': 'mnd', 'pkg.reels': 'Reels (10–25 sec)', 'pkg.visuals': 'visuals',
      'pkg.total': 'eenheden / maand', 'pkg.select': 'Kiezen', 'pkg.popular': 'Populair',
      'res.tag': 'Resultaat', 'res.title': 'Waar ons werk invloed op heeft',
      'res.sub': 'Wij versterken de schaarsste resource — de aandacht van het publiek.',
      'res.r1': 'Aandacht vasthouden', 'res.r2': 'Betrokkenheid', 'res.r3': 'Merkherkenning',
      'res.r4': 'Zakelijk vertrouwen', 'res.r5': 'Productinteresse', 'res.r6': 'Koopbereidheid',
      'proc.tag': 'Proces', 'proc.title': '5 stappen naar resultaat',
      'proc.sub': 'Eenvoudig en transparant — van briefing tot kant-en-klare content.',
      'proc.s1.title': 'Briefing', 'proc.s1.text': 'Niche, product, doelgroep, doelen',
      'proc.s2.title': 'Strategie', 'proc.s2.text': 'Content richting en visuele stijl',
      'proc.s3.title': 'Creatie', 'proc.s3.text': 'AI-generatie + neurovisuals',
      'proc.s4.title': 'Goedkeuring', 'proc.s4.text': 'Aanpassingen en materiaal goedkeuring',
      'proc.s5.title': 'Lancering', 'proc.s5.text': 'Kant-en-klare content en publicatieplan',
      'cta.title': 'Wij nemen het creatieve werk over, zodat u zich op uw bedrijf kunt richten.',
      'cta.sub': 'Schrijf ons — wij stellen een 30-dagen contentstructuur voor uw bedrijf voor.'
    },
    de: {
      'nav.problem': 'Problem', 'nav.solution': 'Lösung', 'nav.funnel': 'Funnel',
      'nav.packages': 'Pakete', 'nav.process': 'Prozess', 'nav.contact': 'Kontakt',
      'hero.tag': 'AI Content Company',
      'hero.title1': 'Ihr Unternehmen verliert Kunden',
      'hero.title2': 'nicht wegen des Produkts —',
      'hero.title3': 'sondern wegen unsichtbarem Content.',
      'hero.sub': 'Wir erstellen AI-Content und Neurovisuals, die das Scrollen stoppen und Views in Leads verwandeln.',
      'hero.cta': 'Paket wählen', 'hero.cta2': 'Wie es funktioniert',
      'hero.m1': 'Aufmerksamkeit fangen', 'hero.m2': 'Content-Generierung', 'hero.m3': 'Systematischer Rhythmus',
      'pain.tag': 'Problem', 'pain.title': 'Warum funktioniert Ihr Content nicht?',
      'pain.sub': 'Menschen sind mit Informationen überflutet. Die meisten Posts fliegen einfach vorbei.',
      'pain.c1.title': 'Kein visueller Haken', 'pain.c1.text': 'Content stoppt das Scrollen nicht — Nutzer fliegen in Sekundenbruchteilen vorbei.',
      'pain.c2.title': 'Sieht aus wie bei allen', 'pain.c2.text': 'Template-Visuals gehen im Feed unter. Ihre Marke bleibt nicht im Gedächtnis.',
      'pain.c3.title': 'Keine Regelmäßigkeit', 'pain.c3.text': 'Ohne Rhythmus keine Wiedererkennung. Ihr Publikum vergisst Sie zwischen Posts.',
      'pain.c4.title': 'Kein System', 'pain.c4.text': 'Content führt nicht zur Aktion. Kein Funnel, der aufwärmt und verkauft.',
      'pain.conclusion': 'Unternehmen verlieren nicht nur Reichweite — sie verlieren Kunden, Vertrauen und Umsatz.',
      'sol.tag': 'Lösung', 'sol.title': 'Wir bauen ein Aufmerksamkeitssystem',
      'sol.sub': 'VellumCadence ist nicht nur Content. Es ist ein gesteuerter Rhythmus, der Wachstum vorhersehbar macht.',
      'sol.c1.label': 'speed.ai', 'sol.c1.title': 'AI-Geschwindigkeit', 'sol.c1.text': 'AI-Generierung ermöglicht schnelle, regelmäßige und skalierbare Content-Erstellung.',
      'sol.c2.label': 'neuro.vis', 'sol.c2.title': 'Neurovisuals', 'sol.c2.text': 'Visuals, die den Blick fangen und Interesse wecken. Keine Templates — ein einzigartiger Stil.',
      'sol.c3.label': 'logic.mkt', 'sol.c3.title': 'Marketing-Logik', 'sol.c3.text': 'Jedes Material arbeitet an einem konkreten Ziel: Aufmerksamkeit, Vertrauen oder Aktion.',
      'fun.tag': 'Funnel', 'fun.title': 'Content-Funnel in Social Media',
      'fun.sub': 'Keine chaotischen Posts — sondern ein System, das zum Verkauf führt.',
      'fun.s1.title': 'Reels / Creatives', 'fun.s1.text': 'Reichweite und neue Zielgruppen gewinnen',
      'fun.s2.title': 'Karussells / Karten', 'fun.s2.text': 'Produktnutzen erklären',
      'fun.s3.title': 'Bewertungen / Vorher-Nachher', 'fun.s3.text': 'Vertrauen und sozialer Beweis',
      'fun.s4.title': 'Aufwärmung zum Kauf', 'fun.s4.text': 'Bereit zu schreiben, anzufragen oder zu kaufen',
      'pkg.tag': 'Pakete', 'pkg.title': 'Monatliche Content-Pakete',
      'pkg.sub': 'Wählen Sie das Format, das zu Ihrem Unternehmen passt.',
      'pkg.mo': 'Mon', 'pkg.reels': 'Reels (10–25 Sek)', 'pkg.visuals': 'Visuals',
      'pkg.total': 'Einheiten / Monat', 'pkg.select': 'Wählen', 'pkg.popular': 'Beliebt',
      'res.tag': 'Ergebnis', 'res.title': 'Worauf unsere Arbeit wirkt',
      'res.sub': 'Wir verstärken die knappste Ressource — die Aufmerksamkeit des Publikums.',
      'res.r1': 'Aufmerksamkeit halten', 'res.r2': 'Engagement', 'res.r3': 'Markenbekanntheit',
      'res.r4': 'Geschäftsvertrauen', 'res.r5': 'Produktinteresse', 'res.r6': 'Kaufbereitschaft',
      'proc.tag': 'Prozess', 'proc.title': '5 Schritte zum Ergebnis',
      'proc.sub': 'Einfach und transparent — vom Briefing bis zum fertigen Content.',
      'proc.s1.title': 'Briefing', 'proc.s1.text': 'Nische, Produkt, Zielgruppe, Ziele',
      'proc.s2.title': 'Strategie', 'proc.s2.text': 'Content-Richtung und visueller Stil',
      'proc.s3.title': 'Erstellung', 'proc.s3.text': 'AI-Generierung + Neurovisuals',
      'proc.s4.title': 'Freigabe', 'proc.s4.text': 'Korrekturen und Materialfreigabe',
      'proc.s5.title': 'Launch', 'proc.s5.text': 'Fertiger Content und Veröffentlichungsplan',
      'cta.title': 'Wir übernehmen das Kreative, damit Sie sich auf Ihr Geschäft konzentrieren können.',
      'cta.sub': 'Schreiben Sie uns — wir schlagen eine 30-Tage-Content-Struktur für Ihr Unternehmen vor.'
    }
  };

  var LANG_NAMES = { ru: 'RU', en: 'EN', uk: 'UA', nl: 'NL', de: 'DE' };
  var currentLang = 'ru';

  function detectLang() {
    var stored = localStorage.getItem('vc-lang');
    if (stored && T[stored]) return stored;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('uk')) return 'uk';
    if (nav.startsWith('ru')) return 'ru';
    if (nav.startsWith('nl')) return 'nl';
    if (nav.startsWith('de')) return 'de';
    return 'en';
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('vc-lang', lang);
    document.documentElement.lang = lang === 'uk' ? 'uk' : lang;
    document.getElementById('langLabel').textContent = LANG_NAMES[lang];

    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang] && T[lang][key]) {
        el.textContent = T[lang][key];
      }
    });

    // Update active state in dropdown
    document.querySelectorAll('.lang-dropdown button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  /* ── Init language ── */
  applyLang(detectLang());

  /* ── Language switcher ── */
  var langBtn = document.getElementById('langBtn');
  var langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  langDropdown.querySelectorAll('button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang'));
      langDropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', function () {
    langDropdown.classList.remove('open');
  });

  /* ── Nav scroll ── */
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Burger ── */
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ── Scroll animations ── */
  var anims = document.querySelectorAll('.anim');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    anims.forEach(function (el) { obs.observe(el); });
  } else {
    anims.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Result rings animation ── */
  var resItems = document.querySelectorAll('.res-item');
  if ('IntersectionObserver' in window && resItems.length) {
    var ringObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var val = parseInt(e.target.getAttribute('data-value')) || 0;
          var circumference = 2 * Math.PI * 52; // r=52
          var offset = circumference - (val / 100) * circumference;
          var fill = e.target.querySelector('.res-ring-fill');
          if (fill) {
            fill.style.setProperty('--offset', offset);
            fill.style.strokeDashoffset = offset;
          }
          e.target.classList.add('animated');
          ringObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    resItems.forEach(function (item) { ringObs.observe(item); });
  }

  /* ── Funnel bar widths ── */
  var funnelSteps = document.querySelectorAll('.funnel-step');
  funnelSteps.forEach(function (step) {
    var w = step.getAttribute('data-width') || 100;
    step.querySelector('.funnel-bar').style.width = w + '%';
  });

  /* ── 3D Tilt ── */
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (!isTouch) {
    document.querySelectorAll('.tilt-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width - 0.5) * 12;
        var y = ((e.clientY - r.top) / r.height - 0.5) * -12;
        card.style.transform = 'perspective(800px) rotateX(' + y + 'deg) rotateY(' + x + 'deg) scale3d(1.02,1.02,1.02)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform .5s cubic-bezier(.22,1,.36,1)';
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
        setTimeout(function () { card.style.transition = ''; }, 500);
      });
      card.addEventListener('mouseenter', function () { card.style.transition = 'none'; });
    });
  }

  /* ── Cursor glow ── */
  var glow = document.getElementById('cursorGlow');
  if (!isTouch && glow) {
    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.classList.add('active');
    });
    document.addEventListener('mouseleave', function () {
      glow.classList.remove('active');
    });
  }

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
      }
    });
  });

  /* ── 4D Canvas Background — Particle Network ── */
  var canvas = document.getElementById('bgCanvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var mouseX = 0, mouseY = 0;
    var PARTICLE_COUNT = Math.min(80, Math.floor(window.innerWidth / 18));
    var CONNECT_DIST = 160;
    var dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener('resize', function () {
      ctx.setTransform(1,0,0,1,0,0);
      resizeCanvas();
    });

    function Particle() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.radius = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.4 + 0.1;
      // Cycle through accent colors
      var colors = ['139,92,246', '6,182,212', '236,72,153'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    Particle.prototype.update = function (w, h) {
      // Mouse repulsion
      var dx = this.x - mouseX;
      var dy = this.y - mouseY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200 && dist > 0) {
        var force = (200 - dist) / 200 * 0.02;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      // Damping
      this.vx *= 0.995;
      this.vy *= 0.995;
      this.x += this.vx;
      this.y += this.vy;
      // Wrap
      if (this.x < 0) this.x = w;
      if (this.x > w) this.x = 0;
      if (this.y < 0) this.y = h;
      if (this.y > h) this.y = 0;
    };

    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    if (!isTouch) {
      document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    }

    function drawParticles() {
      var w = window.innerWidth;
      var h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // Update & draw particles
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.update(w, h);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',' + p.alpha + ')';
        ctx.fill();

        // Connect nearby particles
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            var opacity = (1 - dist / CONNECT_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(' + p.color + ',' + opacity + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawParticles);
    }

    // Only run on desktop or if not low-power
    if (!isTouch || window.innerWidth > 768) {
      drawParticles();
    }
  }

  /* ── Add SVG gradient def for result rings ── */
  var svgNS = 'http://www.w3.org/2000/svg';
  var rings = document.querySelectorAll('.res-ring svg');
  rings.forEach(function (svg) {
    var defs = document.createElementNS(svgNS, 'defs');
    var grad = document.createElementNS(svgNS, 'linearGradient');
    grad.setAttribute('id', 'ringGrad');
    grad.setAttribute('x1', '0'); grad.setAttribute('y1', '0');
    grad.setAttribute('x2', '1'); grad.setAttribute('y2', '1');
    var s1 = document.createElementNS(svgNS, 'stop');
    s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#8b5cf6');
    var s2 = document.createElementNS(svgNS, 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#06b6d4');
    grad.appendChild(s1); grad.appendChild(s2);
    defs.appendChild(grad); svg.prepend(defs);
  });

})();
