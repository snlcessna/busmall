'use strict';

var context = document.getElementById('image-chart').getContext('2d');

function Image(name, path, color) {
  this.name = name;
  this.path = path;
  this.color = color;
  this.clicks = 0;
  this.displays = 0;
  allImages.push(this);

}

var allImages = [];
var displayedImages = [];
var selectionsRemaining = 25;
var chartColors = ['black', 'white', 'brown', 'green', 'blue', 'red', 'black', 'white', 'brown', 'green', 'blue', 'red', 'black', 'white', 'brown', 'green', 'blue', 'red', 'black'];
var moreColors = ['red', 'black', 'white', 'brown', 'green', 'blue', 'red', 'black', 'white', 'brown', 'green', 'blue'];

var bag = new Image('bag', 'img/bag.jpg', 'red');
var banana = new Image('banana', 'img/banana.jpg', 'yellow');
var bathroom = new Image('bathroom', 'img/bathroom.jpg', 'brown');
var boots = new Image('boots', 'img/boots.jpg', 'orange');
var breakfast = new Image('breakfast', 'img/breakfast.jpg', 'blue');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg', 'purple');
var chair = new Image('chair', 'img/chair.jpg', 'light-blue');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg', 'green');
var dogduck = new Image('dogduck', 'img/dog-duck.jpg', 'grey');
var dragon = new Image('dragon', 'img/dragon.jpg', 'gold');
var pen = new Image('pen', 'img/pen.jpg', 'red');
var petsweep = new Image('petsweep', 'img/pet-sweep.jpg', 'yellow');
var scissors = new Image('scissors', 'img/scissors.jpg', 'brown');
var shark = new Image('shark', 'img/shark.jpg', 'orange');
var sweep = new Image('sweep', 'img/sweep.png', 'blue');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg', 'purple');
var unicorn = new Image('unicorn', 'img/unicorn.jpg', 'light-blue');
var usb = new Image('usb', 'img/usb.gif', 'green');
var watercan = new Image('watercan', 'img/water-can.jpg', 'grey');
var wineglass = new Image('wineglass', 'img/wine-glass.jpg', 'gold');

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

  displayedImages = [];
  allImages[0].displays++;
  allImages[1].displays++;
  allImages[2].displays++;
} //end of function

function shuffle() {
  var counter = allImages.length;
  var temp = 0;
  var index = 0;

  while (counter--) {  // While there are elements in the array
    index = (Math.random() * counter) | 0; // Pick a random index

    temp = allImages[counter];
    allImages[counter] = allImages[index];
    allImages[index] = temp; // And swap the last element with it
  }

  return allImages;
}

var first = document.getElementById('0');
first.addEventListener('click', handleClicks);

var second = document.getElementById('1');
second.addEventListener('click', handleClicks);

var third = document.getElementById('2');
third.addEventListener('click', handleClicks);

document.getElementById('selections-remaining').innerHTML = (selectionsRemaining);

function handleClicks(event) {
  selectionsRemaining--;
  document.getElementById('selections-remaining').innerHTML = (selectionsRemaining);

  if (selectionsRemaining > 0) {

    allImages[event.target.id].clicks++; //increment Click var in the clicked image by 1.
    showImages(); //Recall function to display three new images.
    //selectionsRemaining--;
  } else {
    finalResults();
    alert('You are out of clicks');
    return;
  }
}

showImages(); //Initial call to the function.

function finalResults() {
  allImages.sort(function (a, b) {
        return b.clicks - a.clicks;
      });
  drawChart();
}

var imageLabels = [];
var imageClicks = [];
var imageDisplays = [];

function drawChart(){
  for (var i = 0; i < allImages.length; i++) {
    imageLabels.push(allImages[i].name);
  }

  for (var i = 0; i < allImages.length; i++) {
    imageClicks.push(allImages[i].clicks);
  }

  for (var i = 0; i < allImages.length; i++) {
    imageDisplays.push(allImages[i].displays);

  }

  var imageChart = new Chart(context, {
    type: 'bar',
    data:
    {
      labels: imageLabels,
      datasets:
      [
        {
        label: '# of Clicks',
        data: imageClicks,
        backgroundColor: chartColors,
      },
      {
        label: '# of Displays',
        data: imageDisplays,
        backgroundColor: moreColors,
      },
    ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      },
    },
  });

}
