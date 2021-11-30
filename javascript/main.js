function changeHovernav(){
    var navHeader = document.querySelectorAll('#nav-header > li');
    var iconDown = document.querySelectorAll('#nav-header > li > i');
    
        for(let i=0; i < navHeader.length; i++){
            if (i>1 && i<5){
                navHeader[i].addEventListener('mouseover',function(){
                    iconDown[i-2].classList.remove('ti-angle-down');
                    iconDown[i-2].classList.add('ti-angle-up');
                })
                navHeader[i].addEventListener('mouseout',function(){
                    iconDown[i-2].classList.remove('ti-angle-up');
                    iconDown[i-2].classList.add('ti-angle-down');
                })
            }
        }
}    
changeHovernav();


function sliderItem(){
    $('#recipeCarousel').carousel({
        interval: 10000
      })
      
      $('.carousel .carousel-item').each(function(){
          var minPerSlide = 7;
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<minPerSlide;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              next.children(':first-child').clone().appendTo($(this));
            }
      });
}
sliderItem();
function openItem(){
    var btnItem = document.querySelectorAll('.js-btnItem');
    var modalItem = document.querySelector('.js-modal-Item');
    var btnCloseModal = document.querySelector('.js-btn-close');
    var modalContainer = document.querySelector('.js-modal-container');
    
    modalContainer.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
    
    function showModal() {
        modalItem.classList.add('open');
    }
    function hiddenModal(){
        modalItem.classList.remove('open');
    }
    for(let i=0; i<btnItem.length; i++){
        btnItem[i].addEventListener('click',showModal);
        btnCloseModal.addEventListener('click',hiddenModal);
        modalItem.addEventListener('click',hiddenModal);
    }
 
}
openItem()

function backTop(){
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });
    $("#scrollToTopBtn").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({scrollTop: 0}, 1000);
     });
}
backTop()