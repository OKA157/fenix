/**
* Template Name: Day - v4.8.0
* Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

"use strict";

//////////////////////// FUNCTION CALLS ////////////////////////
var mainElements = ['mainHome'];
var titles = ["CF5-1W-4B","CF5/2D-1W-4B","CF5D/1C-1W-4B"];
var description = ["Mini Spinning Machine for the production of Polypropylene CF FDY","Mini Spinning Machine, for the production of Polypropylene CF FDY, 5 Gr/DpF","Mini Spinning Machine, for the production of PP/PA/PET - CF FDY – HT"];
var usedMach = [];
machineDetail();
topBar();
headerBar();
machineList(3,titles,description);
usedMachineList();
const barbtnhero = document.getElementById("machine0");
const barbtnaboutus = document.getElementById("pageaboutus");
const barbtnnew = document.getElementById("pagenew");
const barbtnused = document.getElementById("pageused");
const barbtncontact = document.getElementById("pagecontact");
// barbtnhero.addEventListener("click", function() {
//   clearWeb(mainElements) ;
// });
///////////////////////////////////////////////////////////////////
function hideElement(elementName)
{
  const divElement = document.getElementById(elementName);

  // Set transition property to 'opacity' and duration to 1 second
  divElement.style.transition = 'opacity 1s';

  // Set opacity to 0 after a 100ms delay
  setTimeout(() => {
    divElement.style.opacity = 0;
  }, 100);
}
function hideAll(mainElements)
{
  for (let i = 0; i < mainElements.length; i++) {
    hideElement(mainElements[i]);
  } 
}


function clearWeb(mainElements) 
{
  hideAll(mainElements);
  var element = document.getElementById("mainHome").hidden=true;
}

function testingFunction() {
  // Your code here
  console.log("Div clicked!");
}
//////////////////////// CUSTOM FUNCTIONS ////////////////////////
// TOP BAR
function topBar() 
{
    var sectionId = document.getElementById("topbar");
    sectionId.innerHTML = '<div class="container d-flex justify-content-center justify-content-md-between"><div class="contact-info d-flex align-items-center"><i class="bi bi-envelope-fill"></i><a href="mailto:ak.aladino@gmail.com">ak.aladino@gmail.com</a><i class="bi bi-phone-fill phone-icon"></i> +34 639 211 515</div><div class="social-links d-none d-md-block"><a href="https://es.linkedin.com/in/aladino-kamand-ab008b176?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"  class="linkedin"><i class="bi bi-linkedin"></i></i></a></div>    </div>';    
}
// HEADER
function headerBar() 
{
    var sectionId = document.getElementById("header");
    sectionId.innerHTML = '<div class="container d-flex align-items-center justify-content-between"><h1 class="logo"><a href="index.html">Fenix</a></h1><!-- Uncomment below if you prefer to use an image logo --><!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--><nav id="navbar" class="navbar">  <ul><li><a class="nav-link scrollto active" href="#">Home</a></li><li><a class="nav-link scrollto" href="#aboutus" id="pageaboutus">About Us</a></li><li class="dropdown"><a href="#new" id="pagenew"><span>New Spinning Machines</span> <i class="bi bi-chevron-down"></i></a>  <ul><li><a href="#new">PP Machine</a></li><li class="dropdown"><a href="#new"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a><ul>  <li><a href="#new">Deep Drop Down 1</a></li>  <li><a href="#new">Deep Drop Down 2</a></li>  <li><a href="#new">Deep Drop Down 3</a></li>  <li><a href="#new">Deep Drop Down 4</a></li>  <li><a href="#new">Deep Drop Down 5</a></li></ul></li><li><a href="#new">PET-PA-PP HT Machine</a></li><li><a href="#new">Lab Machine</a></li><li><a href="#new">Youtube</a></li>  </ul></li><li><a class="nav-link scrollto " href="#used" id="pageused">Used Machines</a></li><li><a class="nav-link scrollto" href="#contact" id="pagecontact">Contact</a></li>  </ul>  <i class="bi bi-list mobile-nav-toggle"></i></nav><!-- .navbar --></div>';    
}
// MACHINE LIST CODE
function machineList(num, titles, descs) 
{
    // JSON
    var imgMachine = ['assets/img/about.png','assets/img/about.png','assets/img/CF5D-1C-1W-4B/thumbnail.png'];
    //
    var sectionId = document.getElementById("newMachinesList");
    for(var index=0;index<num;index++)
    {
      if(index%2==0)
      {
        var rownum = index/2;
        var idrow = "row"+rownum;
        var divrow = document.createElement('div');
        divrow.setAttribute("id", idrow);
        divrow.setAttribute("class", "row");
      }
      var id = "machine"+index;
      var div1 = document.createElement('div');
      div1.setAttribute("id", id);
      div1.setAttribute("class", "col-lg-6 d-flex justify-content-center");
      div1.setAttribute("data-aos", "fade-up");
      div1.setAttribute("style", "padding: 15px;");
      div1.innerHTML = '<div class="icon-box" height="50%"> <img src="'+imgMachine[index]+'" width="100%" height="70%" alt=""> <h4><a href="">'+descs[index]+'</a></h4> <p>'+titles[index]+'</p> </div>';
      divrow.appendChild(div1);
      if((index+1)%2==0 || (index+1)==num)
      {
        sectionId.appendChild(divrow);
      }
    }       
}
// MACHINE LIST CODE
function machineDetail() 
{
    var sectionId = document.getElementById("machineList"); 
    sectionId.innerHTML = '<div class="container"> <div class="secpad">  <div class="row">   <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-left" ><img src="assets/img/about.png" width="115%" height="85%" alt=""><br></div>  </div>  <div class="row"></div>   <h3>General Features of the <b>Mini Spinning Machine</b></h3> <p class="fst-italic"> These are some of the characteristics that makes our machine outstanding and unique.</p> <ul> <li><i class="bi bi-check-circle"></i> Usually, spinning machines need at least 7-13 meters highsheds. However, since this machine has a small size, it can be placed in any place withouthaving to invest large capitals in special sheds.</li> <li><i class="bi bi-check-circle"></i> Two <b>Mini Spinning Machine</b> could produce the samequantity produced by a conventional spinning machine.</li> <li><i class="bi bi-check-circle"></i> Two <b>Mini Spinning Machine</b> have same price of a singleconventional spinning machine.</li> </ul> <ul> <li>Nevertheless, it benefits because it gives:<ul> <li> - Possibility of producing of two types of yarn simultaneously, colour and/or count. </li> <li> - Possibility of serving two customers simultaneously.</li> <li> - Possibility of continuing production with one machine while the other under  maintenance.</li> <li> - Possibility of fulfilling small orders.</li></ul> </li> </ul> <ul> <li><i class="bi bi-check-circle"></i> The <b>Mini Spinning Machine</b> has 5 Godets which means 5drawing steps and a better yarn quality.</li> <li><i class="bi bi-check-circle"></i> The power consumption in small machines is much lower than inconventional machines. This means savings in production costs. (<b>Mini Spinning Machine </b>takes 20 kW installed and consumes only 13 kW during operation).</li> <li><i class="bi bi-check-circle"></i> <b>Mini Spinning Machine</b> is easy to handle, this meansgreater ease of learning for workers.</li> <li><i class="bi bi-check-circle"></i> On the other hand, customers no longer place orders for 1000kg per colour; but they ask for 150-200 kg. Therefore, the <b>Mini Spinning Machine</b> is idealfor small orders.</li> <li><i class="bi bi-check-circle"></i> The waste percentage produced from colour change by the<b>Mini Spinning Machine</b> is smaller in comparison to the conventional machines;</li> <li><i class="bi bi-check-circle"></i> Expanding the yarn industry with our <b>Mini Spinning Machine</b> means varying production and more flexibility in serving customers. Thetraditional machine largely produces for a single specific item. Splitting the production withmore <b>Mini Spinning Machine</b> means diversifying production.</li> </ul> <p>The <b>Mini Spinning Machine</b> brings countless benefits, but for sure, it significantly cuts down costs when it comes to production.</p>   </div>  <br> </div></div>';
}
///////////////////////////////////////////////////////////////////


function usedMachineList() 
{
    var sectionId = document.getElementById("usedMachineList"); 
    // if(usedMach.length==0)
    // {
    //   sectionId.innerHTML = '<div class="container"> <div class="secpad">  <div class="row">   <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-left" ><img src="assets/img/about.png" width="115%" height="85%" alt=""><br></div>  </div>  <div class="row"></div>   <h3>General Features of the <b>Mini Spinning Machine</b></h3> <p class="fst-italic"> These are some of the characteristics that makes our machine outstanding and unique.</p> <ul> <li><i class="bi bi-check-circle"></i> Usually, spinning machines need at least 7-13 meters highsheds. However, since this machine has a small size, it can be placed in any place withouthaving to invest large capitals in special sheds.</li> <li><i class="bi bi-check-circle"></i> Two <b>Mini Spinning Machine</b> could produce the samequantity produced by a conventional spinning machine.</li> <li><i class="bi bi-check-circle"></i> Two <b>Mini Spinning Machine</b> have same price of a singleconventional spinning machine.</li> </ul> <ul> <li>Nevertheless, it benefits because it gives:<ul> <li> - Possibility of producing of two types of yarn simultaneously, colour and/or count. </li> <li> - Possibility of serving two customers simultaneously.</li> <li> - Possibility of continuing production with one machine while the other under  maintenance.</li> <li> - Possibility of fulfilling small orders.</li></ul> </li> </ul> <ul> <li><i class="bi bi-check-circle"></i> The <b>Mini Spinning Machine</b> has 5 Godets which means 5drawing steps and a better yarn quality.</li> <li><i class="bi bi-check-circle"></i> The power consumption in small machines is much lower than inconventional machines. This means savings in production costs. (<b>Mini Spinning Machine </b>takes 20 kW installed and consumes only 13 kW during operation).</li> <li><i class="bi bi-check-circle"></i> <b>Mini Spinning Machine</b> is easy to handle, this meansgreater ease of learning for workers.</li> <li><i class="bi bi-check-circle"></i> On the other hand, customers no longer place orders for 1000kg per colour; but they ask for 150-200 kg. Therefore, the <b>Mini Spinning Machine</b> is idealfor small orders.</li> <li><i class="bi bi-check-circle"></i> The waste percentage produced from colour change by the<b>Mini Spinning Machine</b> is smaller in comparison to the conventional machines;</li> <li><i class="bi bi-check-circle"></i> Expanding the yarn industry with our <b>Mini Spinning Machine</b> means varying production and more flexibility in serving customers. Thetraditional machine largely produces for a single specific item. Splitting the production withmore <b>Mini Spinning Machine</b> means diversifying production.</li> </ul> <p>The <b>Mini Spinning Machine</b> brings countless benefits, but for sure, it significantly cuts down costs when it comes to production.</p>   </div>  <br> </div></div>';

    // }
}
////

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

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
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
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

