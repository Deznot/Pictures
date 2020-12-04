let filter = (menuSelector,contentSelector,noSelector) =>{
    let menu = document.querySelector(menuSelector),
        content = document.querySelector(contentSelector),
        no = document.querySelector(noSelector);

    menu.addEventListener('click', (e)=>{
        let target = e.target,
            targetClass = target.classList.value;


        menu.children.forEach(item => item.classList.remove('active'));

        content.children.forEach(item =>{
            item.style.display = 'none';
            item.classList.add('animated');
            item.classList.remove('fadeIn');
        });

        no.style.display = 'none';
        no.classList.add('animate');
        no.classList.remove('fadeIn');
        
        
        if(target && target.tagName == "LI"){
            target.classList.add('active');
            content.children.forEach(item=>{
                if(item.classList.contains(targetClass)){
                    item.classList.add('fadeIn');
                    item.style.display = 'block';
                }else if(targetClass == 'grandmother' || targetClass == 'granddad'){
                    no.style.display = 'block';
                    no.classList.add('fadeIn');
                }
            });
        }

    });

};

export default filter;