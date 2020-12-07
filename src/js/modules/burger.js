let burger = (triggerSelector,menuSelector) =>{
    let btn = document.querySelector(triggerSelector),
        menu = document.querySelector(menuSelector);
    
    menu.style.display = 'none';

    btn.addEventListener('click', ()=>{
        if(menu.style.display == 'none' && screen.availWidth < 993){
            menu.style.display = 'block';
        }else{
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', ()=>{
        if(screen.availWidth > 992){
            menu.style.display = 'none';
        }
    });

};

export default burger;