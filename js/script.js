
$(document).ready(function() {

  // INPUT CHANGING
  $('input').attr('autocomplete', 'off');
  $(".input-form-name").focus(function() {
  $('.input-form-text-name').addClass('input-form-text-changing');
  $('.input-form-name').addClass('input-form-border');
  });
  $(".input-form-name").blur(function() {
    if($('.input-form-name').val()=="") {
      $('.input-form-text-name').removeClass('input-form-text-changing');
      $('.input-form-name').removeClass('input-form-border');
    }
    else { 
      $('.input-form-text-name').addClass('input-form-text-changing');
      $('.input-form-name').addClass('input-form-border');
    }
  });

  $(".input-form-town").focus(function() {
  $('.input-form-text-town').addClass('input-form-text-changing');
  $('.input-form-town').addClass('input-form-border');
  });
  $(".input-form-town").blur(function() {
    if($('.input-form-town').val()=="") {
      $('.input-form-text-town').removeClass('input-form-text-changing');
      $('.input-form-town').removeClass('input-form-border');
    }
    else { 
      $('.input-form-text-town').addClass('input-form-text-changing');
      $('.input-form-town').addClass('input-form-border');
    }
  });

  $(".input-form-skype").focus(function() {
  $('.input-form-skype').addClass('input-form-border');
  $('.input-form-text-skype').addClass('input-form-text-changing');
  });
  $(".input-form-skype").blur(function() {
    if($('.input-form-skype').val()=="") {
      $('.input-form-skype').removeClass('input-form-border');
      $('.input-form-text-skype').removeClass('input-form-text-changing');
    }
    else {
      $('.input-form-skype').addClass('input-form-border'); 
      $('.input-form-text-skype').addClass('input-form-text-changing');
    }
  });

  $(".input-form-email").focus(function() {
  $('.input-form-email').addClass('input-form-border');  
  $('.input-form-text-email').addClass('input-form-text-changing');
  });
  $(".input-form-email").blur(function() {
    if($('.input-form-email').val()=="") {
      $('.input-form-email').removeClass('input-form-border');  
      $('.input-form-text-email').removeClass('input-form-text-changing');
    }
    else { 
      $('.input-form-text-email').addClass('input-form-text-changing');
      $('.input-form-email').addClass('input-form-border');  
    }
  });



  // COUNT OPTION YEAR
  for(var i=1980;i<=1999;i++) {
    $(".select").prepend("<option>"+i+"</option>");
  }


  // Select
  $('.select').each(function(){
    // Variables
    var $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 500;

    $this.hide();
    // Wrap all in select box
    $this.wrap('<div class="select"></div>');
    // Style box
    $('<div>',{
      class: 'select__gap',
      text: ''
    }).insertAfter($this);
    
    var selectGap = $this.next('.select__gap'),
      caret = selectGap.find('.caret');
    // Add ul list
    $('<ul>',{
      class: 'select__list'
    }).insertAfter(selectGap);    

    var selectList = selectGap.next('.select__list');
    // Add li - option items
    for(var i = 0; i < selectOptionLength; i++){
      $('<li>',{
        class: 'select__item',
        html: $('<span>',{
          text: selectOption.eq(i).text()
        })        
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
    }
    // Find all items
    var selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function(){
      if(!$(this).hasClass('on')){
        $(this).addClass('on');
        selectList.slideDown(dur);

        selectItem.on('click', function(){
          var chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectGap.text($(this).find('span').text());

          selectList.slideUp(dur);
          selectGap.removeClass('on');
        });
        
      } else {
        $(this).removeClass('on');
        selectList.slideUp(dur);
      }
    });   

  });
  // SELECT
var wid = $(window).width();
if(wid>=768) {
  $(".select__list").niceScroll({scrollspeed:50,cursorwidth: "7px",cursorcolor:"#d9d9d9",cursorborderradius: "3px"});
}
else { 
}
  // FOR SELECT ICON
  var d = 0;
  $('.select__gap, .select__item').click(function() {
  d++;
  if(d=='1') {
    $('.select__gap').addClass('select__gap-up');
    $('.select__gap').removeClass('select__gap-down');   
  }
  else {
  }
  if(d=='2') {
    d=0;
    $('.select__gap').removeClass('select__gap-up');
    $('.select__gap').addClass('select__gap-down'); 
  }
  else {
  }
  });
  $(".select__item").click(function() {
  $('.input-form-text-year').addClass('input-form-text-changing');
  $('.select__gap').addClass('input-form-border');
  });


// SCROLLING LINKS
  $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
  });


// SCROLLING
  $('.scroll-top').click(function() {
    $('html').animate({
      scrollTop: 0
    }, 800);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
      $('.menu').addClass('menu-shadow');
    }
    else {
      $('.menu').removeClass('menu-shadow');
    }
    if ($(this).scrollTop() >= 400) {
      $('.scroll-top').removeClass('scroll-top-none');
    } 
    else {
      $('.scroll-top').addClass('scroll-top-none');
    }
    });
});