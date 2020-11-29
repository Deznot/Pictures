
let sliders = (slides,dir,prev,next) => {
    let paused;
    let slideIndex = 1,
        items = document.querySelectorAll(slides);
       
    
    function showSlides(n){
        if(n > items.length){
            slideIndex = 1;
        }
        if( n<1){
            slideIndex = items.length;
        }

        items.forEach((item)=>{
            item.style.display = 'none';
            item.classList.add('animated');
        });

        items[slideIndex-1].style.display ='block';
    }

    showSlides(slideIndex);

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    try{
        let nextBtn = document.querySelector(next),
            prevBtn = document.querySelector(prev);
        
        nextBtn.addEventListener('click',()=>{
            plusSlides(1);
            items[slideIndex-1].classList.remove('slideInLeft');
            items[slideIndex-1].classList.add('slideInRight');

        });
        prevBtn.addEventListener('click',()=>{
            plusSlides(1);
            items[slideIndex-1].classList.remove('slideInRight');
            items[slideIndex-1].classList.add('slideInLeft');
        });
    
    }catch(e){}

    function activateAnimation(){
        if (dir === 'vertical'){
            paused = setInterval(function (){
                plusSlides(1);
                items[slideIndex-1].classList.add('slideInDown');
                
            },3000);
        }else{
            paused = setInterval(function (){
                plusSlides(1);
                items[slideIndex-1].classList.remove('slideInLeft');
                items[slideIndex-1].classList.add('slideInRight');
            },3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', ()=>{
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', ()=>{
        activateAnimation();
    });


};

export default sliders;