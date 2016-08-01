$( document ).ready(function() {

  $('#leftNav').click(moveSlideLeft).click(setMarginWidth).click(SlideInfoLeft);
  $('#rightNav').click(moveSlideRight).click(setMarginWidth).click(SlideInfoRight);

//default slidePosition will be 0
var slidePosition=0;

//slide effect
function setMarginWidth(){
var slideHolderMargin=-100*slidePosition;
$('.slide-holder').css("margin-left", slideHolderMargin +'%');
}

//function moveSlideRight
function moveSlideRight() {
  if(slidePosition==2) {
    slidePosition=0
    console.log('current Slide is' + ' ' + slidePosition);
  } else {
    slidePosition++;
    console.log('current Slide is' + ' ' + slidePosition);
  }
}

//function moveSlideRight
  function moveSlideLeft() {
  if(slidePosition==0) {
    slidePosition=2
  } else {
      slidePosition=slidePosition-1;
  }
}

// event Handler for slidePosition when clicking on Right button
  function SlideInfoRight() {
    if (slidePosition == 1) {
    $('#internment-title').hide();
    $('#tule-title').show();
    $('#lake-title').show();
  } else if (slidePosition == 2) {
    $('#heart-title').show();
    $('#mountain-title').show();
    $('#tule-title').hide();
    $('#lake-title').hide();
  }
};

function SlideInfoLeft() {
  if (slidePosition == 1) {
  $('#tule-title').show();
  $('#lake-title').show();
  $('#heart-title').hide();
  $('#mountain-title').hide();
} else if (slidePosition == 0) {
  $('#internment-title').show();
  $('#tule-title').hide();
  $('#lake-title').hide();
}
}

});
