//Плавающий хедер
var header = document.querySelector(".swim-block");
var main_header = document.querySelector(".main-header");
var nav_header = document.querySelector(".header-navigation");
var small_cat_btn = document.querySelector(".sandwich");
var small_menu_btn = document.querySelector(".word-menu");

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled > 300) {
    
    if(small_cat_btn) {
      fix_block.classList.add("hidden");
      //header.classList.add("small-bg");
    }
    header.classList.add("fixed");
    main_header.classList.add("margin");
  } else {
    if(header.classList.contains("fixed")) {
      if(small_cat_btn) {
        fix_block.classList.remove("hidden");
        //header.classList.remove("small-bg");
      }
      header.classList.remove("fixed");
        main_header.classList.remove("margin");
    }
  }
}

// Шапка для width < 768
//var small_header = document.querySelector(".small-menu");
//var small_nav = document.querySelector(".small-menu");
var fix_block = document.querySelector(".fix-block-top");
var small_cat = document.querySelector(".main-menu");
//var small_nav_btn = document.querySelector(".word-menu");
//if(small_header) {
//small_nav_btn.addEventListener("click", function(event) {
  //small_nav.classList.toggle("show-small-menu");
//})

if(small_cat_btn) {
  header.classList.add("small-bg");
  small_cat_btn.addEventListener("click", function(event) {
    if(nav_header.classList.contains("show")) {
      nav_header.classList.remove("show");
    }
    small_cat.classList.toggle("show");
  })
  
  small_menu_btn.addEventListener("click", function(event) {
    if(small_cat.classList.contains("show")) {
      small_cat.classList.remove("show");
    }
    nav_header.classList.toggle("show");
  })
}


// Плавающий aside на basket.html
var aside = document.querySelector(".fast-basket-info");

if(aside) { 
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if((scrolled > 435) && (scrolled < 1300) ) {
      aside.classList.add("aside-fixed");
      aside.classList.add("fadeIn");
    } else {
      aside.classList.remove("aside-fixed");
      aside.classList.remove("fadeIn");
    }
  }
}

//Форма быстрого заказа
var call_form_fast_order  = document.querySelectorAll(".click");
var form_order = document.querySelector(".modal-form-bg.order");

call_form_fast_order = [].slice.call(call_form_fast_order);
call_form_fast_order.forEach(function(item, i, call_form_fast_order) {
  call_form_fast_order[i].addEventListener('click', function(event) {
    event.preventDefault();
    form_order.classList.add("show");
  })
});

//Форма добавления в корзину
var form_add_to_basket = document.querySelector(".modal-form-bg.add-to-basket");
var call_form_add_to_basket  = document.querySelectorAll(".to-basket");
var call_form_add_to_basket_1  = document.querySelectorAll(".btn-add-to-basket");
var close_add_to_basket = document.querySelector(".btn-continue");

call_form_add_to_basket = [].slice.call(call_form_add_to_basket);
call_form_add_to_basket.forEach(function(item, i, call_form_add_to_basket) {
  call_form_add_to_basket[i].addEventListener('click', function(event) {
    event.preventDefault();
    form_add_to_basket.classList.add("show");
  })
});

call_form_add_to_basket_1 = [].slice.call(call_form_add_to_basket_1);
call_form_add_to_basket_1.forEach(function(item, i, call_form_add_to_basket_1) {
  call_form_add_to_basket_1[i].addEventListener('click', function(event) {
    event.preventDefault();
    form_add_to_basket.classList.add("show");
  })
});

close_add_to_basket.addEventListener("click", function(event){
  event.preventDefault();
  form_add_to_basket.classList.remove("show");
})

//Заказать звонок
var form_order_call = document.querySelector(".modal-form-bg.order-call");
var btn_order_call = document.querySelectorAll(".btn-order-call");

btn_order_call = [].slice.call(btn_order_call);
btn_order_call.forEach(function(item, i, btn_order_call) {
  btn_order_call[i].addEventListener('click', function(event) {
    event.preventDefault();
    form_order_call.classList.add("show");
  })
});

//Закрываем все формы по нажатию на крестик
var close_form = document.querySelectorAll(".close");
var forms = document.querySelectorAll(".modal-form-bg");

close_form = [].slice.call(close_form);
close_form.forEach(function(item, i, close_form) {
  close_form[i].addEventListener('click', function(event) {
    event.preventDefault();
    for(var i = 0; i < forms.length; i++) {
      forms[i].classList.remove("show");
    }
  })
});

// Закрываем вспдывающие формы при нажатии на Esc
window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    for(var i = 0; i < forms.length; i++) {
      forms[i].classList.remove("show");
    }
  }  
});

// Табы на странице "Карточка товара"
var btn_tabs = document.querySelectorAll(".btn-tab");
var info_tabs = document.querySelectorAll(".info-tab");

btn_tabs = [].slice.call(btn_tabs);
info_tabs = [].slice.call(info_tabs);

function open_tab (i){
  for(var y = 0; y < info_tabs.length; y++) {
      if(info_tabs[y].classList.contains("show")) {
        info_tabs[y].classList.remove("show");
        btn_tabs[y].classList.remove("current-tab");
      };
    info_tabs[i].classList.add("show");
    btn_tabs[i].classList.add("current-tab");
  }
};
    
btn_tabs.forEach(function(item, i, btn_tabs) {
  btn_tabs[i].addEventListener("click", function(event){
    event.preventDefault();
    open_tab(i);
  })
});