'use strict';

function Image(name, path) {
  this.name = name;
  this.path = path;
  allImages.push(this);

}

var allImages = [];
var displayedImages = [];

var bag = new Image('bag', 'img/bag.jpg');
var banana = new Image('banana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast = new Image('boots', 'img/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg');
var chair = new Image('chair', 'img/chair.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogduck = new Image('dogduck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var petsweep = new Image('petsweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'img/unicorn.jpg');
var usb = new Image('usb', 'img/usb.gif');
var watercan = new Image('watercan', 'img/water-can.jpg');
var wineglass = new Image('wineglass', 'img/wine-glass.jpg');

function showImages() {
  shuffle();
  for (var i = 0; i < 3; i++) {
    for (var x = 0; x < 3; x++) {
      while (allImages[i] == displayedImages[x]) {
        shuffle();
      }//end while
    }//end for
  } //end for

  displayedImages.push(allImages[0]);
  first.setAttribute('src', allImages[0].path);

  displayedImages.push(allImages[1]);
  second.setAttribute('src', allImages[1].path);

  displayedImages.push(allImages[2]);
  third.setAttribute('src', allImages[2].path);

  allImages = [];
} //end of function

function shuffle() {
  var counter = allImages.length;
  var temp = 0;
  var index = 0;

  // While there are elements in the array
  while (counter--) {
    // Pick a random index
    index = (Math.random() * counter) | 0;

    // And swap the last element with it
    temp = allImages[counter];
    allImages[counter] = allImages[index];
    allImages[index] = temp;
  }

  return allImages;
}

var first = document.getElementById('0');
var second = document.getElementById('1');
var third = document.getElementById('2');

showImages();
