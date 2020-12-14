let modals = () =>{
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false){
        let trigger =  document.querySelectorAll(triggerSelector),
            modal =  document.querySelector(modalSelector),
            close =  document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();


        trigger.forEach(item => {
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault();
                }
                windows.forEach(item=>{
                    item.style.display=  "none";
                    item.classList.add('animated','fadeIn');
                });

                btnPressed = true;

                if (destroy){
                    item.remove();
                }
                
                modal.style.display=  "block";
                document.body.style.marginRight =  `${scroll}px`;
                document.body.style.overflow = 'hidden';
                fixAbsolute('.fixed-gift');
            });

        });

        close.addEventListener('click', ()=>{
            windows.forEach(item=>{
                item.style.display=  "none";
            });
            modal.style.display=  "none";
            document.body.style.overflow = '';
            document.body.style.marginRight =  `0px`;
            fixAbsolute('.fixed-gift');
        });
        
        modal.addEventListener('click', (e)=>{
            
            if (e.target === modal){
                windows.forEach(item=>{
                    item.style.display=  "none";
                });
                modal.style.display=  "none";
                document.body.style.overflow = '';
                document.body.style.marginRight =  `0px`;
                fixAbsolute('.fixed-gift');
            }
        });
    
    }


    function showModalByTime(selector,time){
        setTimeout(function (){
            let display;

            document.querySelectorAll('[data-modal]').forEach(item =>{
                if (getComputedStyle(item).display !== 'none'){
                    display = 'block';
                }
            });
            
            if (!display){               
                document.querySelector(selector).style.display = 'block'; 
                document.body.style.overflow = 'hidden';
                fixAbsolute('.fixed-gift');
                
            }           
             
        },time);
    }
    
    function calcScroll (){
        let div = document.createElement('div');

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;

    }

    function openByScroll(selector){
        window.addEventListener('scroll', ()=>{
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)){
                document.querySelector(selector).click();
            }
        });
    }

    function fixAbsolute(absoluteSelector) {
        let absolute = document.querySelectorAll(absoluteSelector),
          scroll = calcScroll();
          
        absolute.forEach(item => {
          let rightS = getComputedStyle(item).right;
          if (document.body.style.overflow == 'hidden') {
            item.style.right = `calc(${rightS} + ${scroll}px)`;
            } else {
            item.style.right = `calc(${rightS} - ${scroll}px)`;
            }
         });
    }

    bindModal('.button-design','.popup-design','.popup-design .popup-close');
    bindModal('.button-consultation','.popup-consultation','.popup-consultation .popup-close');
    bindModal('.fixed-gift','.popup-gift','.popup-gift .popup-close',true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 60000);
  
    
};

export default modals;
