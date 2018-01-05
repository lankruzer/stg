/* Слайдер на карте товара */
var product_slider = document.querySelector(".cart-block-slider");

if(product_slider) {
  var main_images_node = product_slider.querySelectorAll(".big-img");
  var main_imgaes = [main_images_node.length];
  var small_images_node = product_slider.querySelectorAll(".small-img");
  var small_images = [small_images_node.length];
  var prev = product_slider.querySelector(".slider-prev");
  var next = product_slider.querySelector(".slider-next");
  var overlay = document.querySelector(".overlay");
  
  for (var i = 0; i < main_images_node.length; i++) {
    main_imgaes[i] = main_images_node.item(i);
    small_images[i] = small_images_node.item(i);
  }
  
  for(var i = 0; i < small_images.length; i++) {
    small_images[i].classList.remove("show");
  }
  
  for(var i = 0; i < small_images.length; i++) {
    if(i < 3) {
      small_images[i].classList.add("show");
    }
  }
  
  small_images[0].classList.add("current-js");
  
  prev.addEventListener("click", function(event) {
    var last;
    for(var i = 0; i < small_images.length; i++) {
      if(small_images[i].classList.contains("show")) {
        last = i;
      }
    }
    i = last;
    if((i-3) < 0) {
    } else {
      small_images[i].classList.remove("show")
      small_images[i-3].classList.add("show")
    }
    var last_curr;
    for(var y = 0; y < small_images.length; y++) {
      if(small_images[y].classList.contains("current-js")) {
        last_curr = y;
      }
    }
    y = last_curr;
    if(y > 0) {
      small_images[y].classList.remove("current-js");
      small_images[y-1].classList.add("current-js");        
      for(var i = 0; i < main_imgaes.length; i++) {
        main_imgaes[i].classList.remove("show");
      }
      main_imgaes[y-1].classList.add("show");
    }
  });

  next.addEventListener("click", function(event) {  
    for(var i = 0; i < small_images.length; i++) {
      if(small_images[i].classList.contains("show")) {
        break;
      }
    }        
    if((i+3) >= small_images.length) {
    } else {
      small_images[i].classList.remove("show");
      small_images[i+3].classList.add("show");
    }
    for(var y = 0; y < small_images.length; y++) {
      if(small_images[y].classList.contains("current-js")) {
        break;
      }
    }
    if((y + 1) < small_images.length) {
      for(var i = 0; i < main_imgaes.length; i++) {
        main_imgaes[i].classList.remove("show");
      }
      small_images[y].classList.remove("current-js");
      small_images[y+1].classList.add("current-js");
      main_imgaes[y+1].classList.add("show");
    }
  });
  
  small_images.forEach(function(item, i, small_img_arr) { //Кликалка по маленьким картинкам
    small_images[i].addEventListener("click", function(event){
      for(var y = 0; y < small_images.length; y++) {
        if(small_images[y].classList.contains("current-js")) {
          small_images[y].classList.remove("current-js");
        }
      }
      small_images[i].classList.add("current-js");
      for(var y = 0; y < main_imgaes.length; y++) {
        main_imgaes[y].classList.remove("show");
      }
      main_imgaes[i].classList.add("show");
    })
  })
  
  main_imgaes.forEach(function(item, i, main_imgaes) {
    main_imgaes[i].addEventListener("click", function(event) {
      event.preventDefault();
      var image = overlay.childNodes.item(0);
      if(image) {
        overlay.removeChild(image);            
      }
      img = document.createElement('img');
      imgHref = main_imgaes[i].getAttribute('href');
      img.setAttribute('src', imgHref);
      img.classList.add("zoom-img");
      overlay.classList.add("show");
      overlay.appendChild(img);
      if(overlay.classList.contains("show")) {
        overlay.addEventListener("click", function() {
          image = overlay.childNodes.item(0);
          if(image) {
            overlay.removeChild(image);            
          }   
          overlay.classList.remove("show");
        })
      }
    })
  }) 
}




/* Слайдер товаров на странице "Карта товара" */
var main_products = document.querySelectorAll(".products-more .product");
var main_products_arr = [main_products.length];
var products_prev = document.querySelector(".products-more .block-prev");
var products_next = document.querySelector(".products-more .block-next");
var width = document.documentElement.clientWidth;

for(var i = 0; i < main_products.length; i++) {
  main_products_arr[i] = main_products.item(i);
};

if(width > 1200) {
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
      main_products_arr[i].classList.remove("product-show")
      main_products_arr[i+3].classList.add("product-show")
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
}

if(width < 1200 && width > 992 ) {
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
      main_products_arr[i].classList.remove("product-show")
      main_products_arr[i+2].classList.add("product-show")
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



if(width < 992) {
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
      main_products_arr[i].classList.remove("product-show")
      main_products_arr[i+1].classList.add("product-show")
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