// Главный слайдер
var slider_index = document.querySelector(".main-slider");
var slides_node = document.querySelectorAll(".slide");
var slides_arr = [slides_node.length];
var buttons = [slides_arr.length];
var btn_prev = document.querySelector(".slider .block-prev");
var btn_next = document.querySelector(".slider .block-next");
var start = 0;

for(var i = 0; i < slides_node.length; i++) {
  slides_arr[i] = slides_node.item(i);
};

for(var i = 0; i < slides_arr.length; i++) {
  if(slides_arr[i].classList.contains("current")) {
    slides_arr[i].classList.remove("current");
  }
};

slides_arr[0].classList.add("current");

btn_prev.addEventListener("click", function(event) {
  for(var i = 0; i < slides_arr.length; i++) {
    if(slides_arr[i].classList.contains("current")) {
      slides_arr[i].classList.remove("current");
      buttons[i].classList.remove("current");
      if(i === 0) {
        slides_arr[slides_arr.length-1].classList.add("current");
        buttons[slides_arr.length-1].classList.add("current");
        break;
      } else {
        slides_arr[i-1].classList.add("current");
        buttons[i-1].classList.add("current");
        start = i-1;
        clearInterval(timer);
        slider_time_press(start);
      }
    }
  }
});

btn_next.addEventListener("click", function(event) {
  for(var i = 0; i < slides_arr.length; i++) {
    if(slides_arr[i].classList.contains("current")) {
      slides_arr[i].classList.remove("current");
      buttons[i].classList.remove("current");
      if(i === slides_arr.length - 1) {
        slides_arr[0].classList.add("current");
        buttons[0].classList.add("current");
      } else {
        slides_arr[i+1].classList.add("current");
        buttons[i+1].classList.add("current");
        start = i+1;
        clearInterval(timer);
        slider_time_press(start);
      }
      break;
    }
  }
});

slider_index.addEventListener("click", function(event) {
  if(event.target.nodeName == "BUTTON") {
    var press_i = event.target.textContent-1;
    start = press_i;
    clearInterval(timer);
    slider_time_press(start);
  } 
});

function add_buttons() {
  for(var i = 0; i < slides_arr.length; i++) {
    buttons[i] = document.createElement("button");
    buttons[i].className = "btn-slider animated fadeIn";
    if(i === 0) {
      buttons[i].className = "btn-slider current";  
    }
    buttons[i].innerHTML = i+1;
    document.querySelector(".btns-slider").appendChild(buttons[i]);
  }
};

function slides(slides_arr, i, buttons) {
  var status = true;
  if(i === slides_arr.length) {
    i -= 1;
  }
  if(i === -1) {
    i += 1;
  }
  if(slides_arr[i].classList.contains("current")) { // Если  у  данного элемента есть класс active
    slides_arr[i].classList.remove("current"); // то удаляем его
    buttons[i].classList.remove("current");
    var next_i = i + 1; // создаём переменную, в  которой храним номер элемента, которому будет присвоем класс active
    if(next_i > slides_arr.length-1) { // Если выходит за границы массива, то обнуляем
      next_i = 0;
    }
    slides_arr[next_i].classList.add("current"); // Добавляем класс Active    
    buttons[next_i].classList.add("current");
    status = false;
    return status;
  }
  return status;
};

add_buttons();      

function slider_time(start) {
  timer = setInterval(function() {
    for(var i = start; i < slides_arr.length; i++) {
      if(!slides(slides_arr, i, buttons)) {
        break;
      }
    }
  }, 7000);
  start = 0;
};

slider_time(start);

function slides_press(slides_arr, i, buttons) {
  var status = true;
  for(var y = 0; y < slides_arr.length; y++) {
    if(slides_arr[y].classList.contains("current")) {
      slides_arr[y].classList.remove("current");   
      
      buttons[y].classList.remove("current");
    }
  }

  if(i === slides_arr.length) {
    i -= 1;
  }
  if(i === -1) {
    i += 1;
  }

  slides_arr[i].classList.add("current");
  
  buttons[i].classList.add("current");
  return status;
};

function slider_time_press(start) {
  for(var i = start; i < slides_arr.length; i++) {
    if(slides_press(slides_arr, i, buttons)) {
      break;
    }
  }
  slider_time(start);
};

// Слайдер продуктов на главной
var main_products_modal = document.querySelectorAll(".products-slider");
var main_products = document.querySelectorAll(".products-slider .product");
var main_products_arr = [main_products.length];
var products_prev = document.querySelector(".products-slider .block-prev");
var products_next = document.querySelector(".products-slider .block-next");

var width = document.documentElement.clientWidth;

main_products_modal.offsetWidth = main_products_modal.offsetWidth; 



for(var i = 0; i < main_products.length; i++) {
  main_products_arr[i] = main_products.item(i);
};

if(width >= 1201) {
for(var i = 0; i < main_products_arr.length; i++) {
  if(i < 4) {
    main_products_arr[i].classList.add("product-show");
  }
};

products_next.addEventListener("click", function(event) {  
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
      break;
    }
  }
  if((i+4) >= main_products_arr.length) {
  } else {
    main_products_arr[i].classList.remove("product-show");
    main_products_arr[i+4].classList.add("product-show");
  } 
});

products_prev.addEventListener("click", function(event) {
  var last;
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
    last = i;
    }
  }
  i = last;
  if((i-4) < 0) {
  } else {
    main_products_arr[i].classList.remove("product-show")
    main_products_arr[i-4].classList.add("product-show")
  }
});



};

if(width < 1201 && width >= 993) {
  for(var i = 0; i < main_products_arr.length; i++) {
  if(i < 3) {
    main_products_arr[i].classList.add("product-show");
  }
};

products_next.addEventListener("click", function(event) {  
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
      break;
    }
  }
  if((i+3) >= main_products_arr.length) {
  } else {
    main_products_arr[i].classList.remove("product-show");
    main_products_arr[i+3].classList.add("product-show");
  } 
});

products_prev.addEventListener("click", function(event) {
  var last;
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
    last = i;
    }
  }
  i = last;
  if((i-3) < 0) {
  } else {
    main_products_arr[i].classList.remove("product-show")
    main_products_arr[i-3].classList.add("product-show")
  }
});

};

if(width < 993 && width >= 769) {
  console.log(768);
  for(var i = 0; i < main_products_arr.length; i++) {
  if(i < 2) {
    main_products_arr[i].classList.add("product-show");
  }
};

products_next.addEventListener("click", function(event) {  
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
      break;
    }
  }
  if((i+2) >= main_products_arr.length) {
  } else {
    main_products_arr[i].classList.remove("product-show");
    main_products_arr[i+2].classList.add("product-show");
  } 
});

products_prev.addEventListener("click", function(event) {
  var last;
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
    last = i;
    }
  }
  i = last;
  if((i-2) < 0) {
  } else {
    main_products_arr[i].classList.remove("product-show")
    main_products_arr[i-2].classList.add("product-show")
  }
});

  
}

if(width < 769) {

for(var i = 0; i < main_products_arr.length; i++) {
  if(i < 1) {
    main_products_arr[i].classList.add("product-show");
  }
};

products_next.addEventListener("click", function(event) {  
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
      break;
    }
  }
  if((i+1) >= main_products_arr.length) {
  } else {
    main_products_arr[i].classList.remove("product-show");
    main_products_arr[i+1].classList.add("product-show");
  } 
});

products_prev.addEventListener("click", function(event) {
  var last;
  for(var i = 0; i < main_products_arr.length; i++) {
    if(main_products_arr[i].classList.contains("product-show")) {
    last = i;
    }
  }
  i = last;
  if((i-1) < 0) {
  } else {
    main_products_arr[i].classList.remove("product-show")
    main_products_arr[i-1].classList.add("product-show")
  }
});

}