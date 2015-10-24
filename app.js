(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Slides = require('./slides.js');
new Slides();
},{"./slides.js":2}],2:[function(require,module,exports){
var Slides = function () {
  var slides_selector = '[data-slides] li';
  var slider_controls_selector = '[data-slider-control]';
  this.slides = document.querySelectorAll(slides_selector);
  this.slider_controls = document.querySelectorAll(slider_controls_selector);
  
  this.current_index = 0;
  
  this.addEventListeners();
  this.slide();
};

Slides.prototype.addEventListeners = function () {
  var _this = this;
  for (var i = 0; i < this.slider_controls.length; i++) {
    var slider_control = this.slider_controls[i];
    
    slider_control.addEventListener('click', function (e) {
      e.preventDefault();
      _this.goTo(this.dataset.sliderControl);
    });
  }
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
},{}]},{},[1]);
