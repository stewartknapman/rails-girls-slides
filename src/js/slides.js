var Slides = function () {
  var slides_selector = '[data-slide]';
  var slider_controls_selector = '[data-slider-control]';
  
  this.slides = document.querySelectorAll(slides_selector);
  this.slider_controls = document.querySelectorAll(slider_controls_selector);
  this.current_index = 0;
  
  this.addEventListeners();
  this.slide();
};

Slides.prototype.addEventListeners = function () {
  var _this = this;
  // Add listeners for slide control navigation
  for (var i = 0; i < this.slider_controls.length; i++) {
    var slider_control = this.slider_controls[i];
    
    // click
    slider_control.addEventListener('click', function (e) {
      e.preventDefault();
      _this.goTo(this.dataset.sliderControl);
    });
  }
  
  // keypress
  document.addEventListener('keydown', function(e) {
    var key = e.key || e.keyCode || e.which;
    switch(key) {
      case 37:
        _this.goTo('prev');
        break;
      case 39:
        _this.goTo('next');
        break;
    }
  });
};

Slides.prototype.slide = function () {
  for (var i = 0; i < this.slides.length; i++) {
    var slide = this.slides[i];
    if (i === this.current_index) {
      slide.className = 'active';
    } else if (i < this.current_index) {
      slide.className = 'seen';
    } else {
      slide.className = '';
    }
  }
};

Slides.prototype.goTo = function (action) {
  var prev_index = this.current_index;
  if (action === 'next' && this.current_index + 1 < this.slides.length) {
    this.current_index++;
  } else if (action === 'prev' && this.current_index - 1 > -1) {
    this.current_index--;
  }
  if (this.current_index !== prev_index) {
    this.slide();
  }
};

module.exports = Slides;