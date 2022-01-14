/**
* Template Name: Restaurantly - v3.7.0
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";


  /**
   * Easy selector helper function
   */
  
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  
  let langActive = select('.languages');
  let lang = select('#topbar .languages a',true);
  let logo = select('.logo');
  let welcome =document.getElementById('welcome')
  let provide = document.getElementById('provide')
  let driedFruit = document.createElement('span')
  let buttons = select(".btns a",true);
  let about1 = document.getElementById("about1")
  let about2 = document.getElementById("about2")
  let about3 = document.getElementById("about3")
  let about4 = document.getElementById("about4")
  let about5 = document.getElementById("about5")
  
  // product section
  
  let productsId = document.getElementById("productsId")
  let productsId2 = document.getElementById("productsId2")

  let productsTab = select(".nav-tabs .nav-link",true)

  let productDescription = select(".details",true)

  // benefits section

  let benefitsID = document.getElementById("benefitsID")
  let benefitsID_2 = document.getElementById("benefitsID_2")

  let slider_h3 = [document.getElementById('slide_h3_1'),
                   document.getElementById('slide_h3_2'),
                   document.getElementById("slide_h3_3")]

  let slider_p = [document.getElementById("slide_p_1"),
                  document.getElementById("slide_p_2"),
                document.getElementById("slide_p_3")]

  let gallery2 = document.getElementById("gallery_2")
  let gallery1 = document.getElementById("gallery_1")

  let contact1 = document.getElementById("contact_1")
  let contact2 = document.getElementById("contact_2")

  // let location = document.getElementById("location")
  let email = document.getElementById("email")
  let call = document.getElementById("call")




  lang.forEach(el =>{
    el.addEventListener('click',() => {
      langActive?.querySelector('.active')?.classList.remove('active')
      el.classList.add('active');
      const att = el.getAttribute('language')
      logo.textContent = data[att].logo
      welcome.textContent = data[att].welcome
      driedFruit.textContent = data[att].driedFruit
      welcome.appendChild(driedFruit)
      
      provide.textContent = data[att].provide
      navbarlinks.forEach(navbarlink =>{
        navbarlink.textContent = data[att][navbarlink.getAttribute('navAttribute')]; 
     })

     buttons[0].textContent = data[att].ourproducts;
     buttons[1].textContent = data[att].contactus;

     //section about 
     let tempChild = document.createElement('i')
     tempChild.className = "bi bi-check-circle"
     
     about1.textContent = data[att].about1
    
     about2.textContent = data[att].about2
     about3.textContent = data[att].about3
     about4.textContent = data[att].about4
     about5.textContent = data[att].about5
     
     about2.insertBefore(tempChild,about2.firstChild)
     tempChild = document.createElement('i')
     tempChild.className = "bi bi-check-circle"

     about3.insertBefore(tempChild,about3.firstChild)
     
     tempChild = document.createElement('i')
     tempChild.className = "bi bi-check-circle"

     about4.insertBefore(tempChild,about4.firstChild)
     //products section
     productsId.textContent = data[att].products1
     productsId2.textContent = data[att].products2

     for(let i =0;i<productsTab.length;i++){

      productsTab[i].textContent = data[att]['productTab'][i]
      let h3  = productDescription[i].querySelector('h3')
      h3.textContent = data[att]['productDescription'][i][0]
      let p = productDescription[i].querySelector('p')
      p.textContent = data[att]['productDescription'][i][1]
     }

     //benefits section

     benefitsID.textContent = data[att].benefits1
     benefitsID_2.textContent = data[att].benefits2
    

     for(let i=0;i<slider_h3.length;i++){
       slider_h3[i].textContent = data[att]['slider_h3'][i]
       slider_p[i].textContent = data[att]['slider_p'][i]
     }
     slider_h3[0].className = ".swiper-pagination .swiper-pagination-bullet-active"
     slider_p[0].className = ".swiper-pagination .swiper-pagination-bullet-active"

     //gallery

     gallery1.textContent = data[att]['gallery_1']
     gallery2.textContent = data[att]['gallery_2']

     contact1.textContent = data[att]['contact_1']
     contact2.textContent = data[att]['contact_2']

    // location.textContent = data[att].location
    email.textContent = data[att].email
    call.textContent = data[att].call
      
    })
  });

  let data = {
    "english":{
      "logo":"Asia Organic",
      "welcome":'Welcome to the world of ',
      "provide":"Providing the highest quality of dried fruits from Central Asia",
      "driedFruit":"Dried Fruit",
      "home":"Home",
      "about":"About",
      "product":"Our Products",
      "benefits":"Benefits",
      "gallery":"Gallery",
      "contact":"Contact",
      "ourproducts":"Products",
      "contactus":"Contact",
      "about1":"All kinds of high quality dried fruits from Central Asia",
      "about2":"High quality products from Kyrgyzstan",
      "about3":"High quality products from Uzbekistan",
      "about4":"High quality products from Tajikstan",
      "about5":`We are always provide better dried fruits from all over Central Asia.
      Our "Asia Organic team" is registered in Kyrgyzstan as Limited liability company.
      We guarantee the quality of our products.`,
      //products section
      "products1":"Products",
      "products2":"Check Products",

      "productTab":["Walnut","Pistachios","Dried Apricots","Prunes","Almonds"],
      "productDescription":[["Walnut",`Walnut, grown in the wild relic groves of the included into protected zonde of Kyrgyzstan, is an environmentally friendly natural product. Inborn useful properties of the walnut, enhanced by its growing in ecologically clean areas without the use of any chemicals, make it a truly incomparable medication of natural origin.`],
                            ["Pistachios","The pistachio tree is native to regions of Central Asia, including present-day Iran and Afghanistan. Archaeology shows that pistachio seeds were a common food as early as 6750 BC. The modern pistachio P. vera was first cultivated in Bronze Age Central Asia, where the earliest example is from Djarkutan, modern Uzbekistan."],
                            ["Dried Apricots",`Natural features of the foothills of the Tien Shan, manual collection and crop calibration, as well as an ancient and simple technology of drying under natural conditions "under sun and shadow ", used to this day, let the apricot to save not only delicioustaste and increadibly useful properties, but also a high ecological compatibility, excluding the need for chemicals, preservatives and dyes both at the stage of growth and maturation, and at the stage of harvesting, its packaging and storage. Dried apricots have a unique choclate-caramel flavor. It is an environmentally friendly-caramel flavow. It is an environmentally friendly natural product, which currently allows it not have decent analogues and stay out of competition.`],
                            ["Prunes","Mexican scientists have proven the benefits of prunes in deseases of dental profile, and American scientists from the University of Florida have proved that it is useful in deseases of the musculoskeletal system. Healing properties are caused by a high content of nutrients that not only are completely retained during drying, but also enhance their properties transfroming into biologically-active compounds. It is known from reliable sources that in ancient times it was used as a preservative of meat during long journeys, which indicates its powerful antibacterial activity. A scientist, an expert at the California Institute of Organic Agriculture (USA), who visited Kyrgyzstan, recognized the advantages and superiority of the Aksy prune on the organoleptic properties. Its strongly pronounced taste of sun-baked plum surpasses even Californian one."],
                            ["Almonds","Almonds contain vitamins, minerals, protein, and fiber, and so they may offer a number of health benefits. Just a handful of almonds — approximately 1 ounce — contains one-eighth of a person’s daily protein needs."]],
                            //benefits section
      "benefits1":"Benefits",
      "benefits2":"Health Benefits of Dry Fruits",
      "slider_h3":["Boosts immunity","Helps to lose weight","Keeps your skin healthy and wrinkle-free "],
      "slider_p":["Dry fruits are loaded with essential oils, proteins, potassium, calcium that helps to increase your immunity. Also, the presence of antioxidants in it can help you to fight against various infections and illnesses.",
                  "Dry fruits and nuts are excellent for weight loss if you eat them moderately. They are low in fat, carbohydrates, sugar, and more in proteins and essential oils.",
                  "Who doesn’t want to look gorgeous and young? Dry fruits can help you with that and keep your skin radiant and glowing. They are rich in essential oils and antioxidants that help your skin to regenerate healthy skin and prevent aging."],
      "gallery_1":"Gallery",
      "gallery_2":"Photo of products",
      "contact_1":"Contact",
      "contact_2":"Contact Us",
      "location":"Location",
      "email":"Email",
      "call":"Call"



    },
    "russian":{
      "logo":"Азия Органик",
      "welcome":"Добро пожаловать в мир ",
      "provide":"представляет высоко качественных сухофруктов в Кыргызстане",
      "driedFruit":"Сухофруктов",
      "home":"Главный",
      "about":"О нас",
      "product":"Продукты",
      "benefits":"Польза",
      "gallery":"Галлерея",
      "contact":"Контакты",
      "ourproducts":"продукты",
      "contactus":"контакты",
      "about1":"Все виды высококачественных сухофруктов из Средней Азии",
      "about2":"Качественные продукции из Кыргызстана",
      "about3":"Качественные продукции из Узбекистана.",
      "about4":"Качественная продукция из Таджикстана",
      "about5":`Мы всегда предоставляем лучшие сухофрукты со всей Центральной Азии.       
      Наша «Asia Organic team» зарегистрирована в Кыргызстане как Общество с Ограниченной Ответственностью.      
       Мы гарантируем качество нашего продукта.`,
           //products section
      "products1":"Продукты",
      "products2":"Наши продукты",

      "productTab":["Грецкий орех","Фистяшки","Курага","Чернослив","Миндаль"],
      "productDescription":[["Грецкий орех","Грецкий орех, выращенный в дикорастущих реликтовых рощах, входящих в заповедную зону Кыргызстана, является экологически чистым природным продуктом. Врожденные полезные свойства грецкого ореха, усиленные его произрастанием в экологически чистых районах без применения каких-либо химикатов, делают его поистине бесподобным лекарством природного происхождения."],
                            ["Фистяшки","Фисташковое дерево произрастает в регионах Центральной Азии, включая современный Иран и Афганистан. Археология показывает, что семена фисташек были обычной пищей еще в 6750 году до нашей эры. Современная фисташка P. vera была впервые выращена в Средней Азии бронзового века, где самый ранний образец находится в Джаркутане, современный Узбекистан."],
                            ["Курага","Природные особенности предгорий Тянь-Шаня, ручной сбор и калибровка урожая, а также древняя и простая технология сушки в естественных условиях «под солнцем и тенью», используемая и по сей день, позволяют абрикосу сохранить не только восхитительный вкус и невероятно полезными свойствами, но и высокой экологичностью, исключающей необходимость применения химикатов, консервантов и красителей как на этапе выращивания и созревания, так и на этапе сбора урожая, его упаковки и хранения. Курага обладает неповторимым шоколадно-карамельным вкусом. Это экологически чистый вкус карамели. Это экологически чистый натуральный продукт, что в настоящее время позволяет ему не иметь достойных аналогов и оставаться вне конкуренции."],
                            ["Чернослив","Мексиканские ученые доказали пользу чернослива при заболеваниях стоматологического профиля, а американские ученые из Университета Флориды доказали, что он полезен при заболеваниях опорно-двигательного аппарата. Лечебные свойства обусловлены высоким содержанием питательных веществ, которые не только полностью сохраняются при сушке, но и усиливают свои свойства, переходя в биологически активные соединения. Из достоверных источников известно, что в древности его использовали как консервант мяса во время дальних путешествий, что свидетельствует о его мощной антибактериальной активности. Ученый, эксперт Калифорнийского института органического земледелия (США), посетивший Кыргызстан, признал преимущества и превосходство аксийского чернослива по органолептическим свойствам. Его ярко выраженный вкус запеченной сливы превосходит даже калифорнийский."],
                            ["Миндаль","Миндаль содержит витамины, минералы, белок и клетчатку, поэтому он может быть полезен для здоровья. Всего горсть миндаля — примерно 1 унция — содержит одну восьмую суточной потребности человека в белке."]],
              //benefits section
      "benefits1":"Польза",
      "benefits2":"Польза сухофруктов",
      "slider_h3":["Повышает иммунитет","Помогает похудеть","Сохраняет вашу кожу здоровой и без морщин"],
      "slider_p":["Сухие фрукты богаты эфирными маслами, белками, калием, кальцием, что помогает повысить иммунитет. Также наличие в нем антиоксидантов может помочь вам в борьбе с различными инфекциями и болезнями.",
                  "Сухофрукты и орехи отлично подходят для похудения, если есть их умеренно. В них мало жиров, углеводов, сахара и больше белков и эфирных масел.",
                  "Кто не хочет выглядеть красиво и молодо? Сухофрукты могут помочь вам в этом и сохранить вашу кожу сияющей и сияющей. Они богаты эфирными маслами и антиоксидантами, которые помогают вашей коже восстанавливать здоровую кожу и предотвращают старение."],
      "gallery_1":"Галлерея",
      "gallery_2":"Фото продуктов",
      "contact_1":"контакты",
      "contact_2":"связаться с нами",
      "location":"Локация",
      "email":"Почта",
      "call":"Звонить"
    }

  }


  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        menuIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Events slider
   */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()