let scrolling = (elemSelector) =>{
    let upElem =document.querySelector(elemSelector);
    

    window.addEventListener('scroll', ()=>{
        if(document.documentElement.scrollTop > 1650){
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        }else{
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });



    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.5;
    
    links.forEach(link =>{
        link.addEventListener('click', function(event){
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            
            requestAnimationFrame(step);

            function step(time){
                if(start === null){
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed , widthTop + toBlock) : 
                    Math.min(widthTop + progress/speed, widthTop + toBlock));


                document.documentElement.scrollTo(0,r);
                
                if(r != widthTop + toBlock){
                    requestAnimationFrame(step);
                }else{
                    location.hash = hash;
                }
            }
        
        });
    });



    // плавный скролл на чистом JS
    // let element = document.documentElement,
    //     body = document.body;

    // function calcScroll(){
        
    //     upElem.addEventListener('click', function(event){
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);

    //         if (this.hash !== ''){
    //             event.preventDefault();
    //         }

    //         let hashElement = document.querySelector(this.hash),
    //             hashElementTop = 0;
            
    //         while(hashElement.offsetParent){
    //             hashElementTop += hashElement.offsetTop;
    //             hashElement = hashElement.offsetParent;
    //         }

    //         Math.round(hashElementTop);

    //         smoothScroll(scrollTop,hashElementTop, this.hash);

    //     });
        
    //     function smoothScroll(from,to,hash){
    //         let timeInterval = 1,
    //             speed,
    //             prevScroll;
            
    //         if (to > from){
    //             speed = 30;
    //         }else{
    //             speed = -30;
    //         }

    //         let move = setInterval(()=>{
    //             let scrollTop = Math.round(element.scrollTop || body.scrollTop);

    //             if(
    //                 prevScroll === scrollTop ||
    //                 (to > from && scrollTop >= to) ||
    //                 (to < from && scrollTop <= to)
    //               ){
    //                     clearInterval(move);
    //                     history.replaceState(history.state, document.title, location.href.replace(/#.*$/g,'')+hash);
    //             }else{
    //                 element.scrollTop += speed;
    //                 body.scrollTop += speed;
    //                 prevScroll = scrollTop;
    //             }

    //         },timeInterval);

    //     }
    // }
    // calcScroll();

};

export default scrolling;