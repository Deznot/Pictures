import {getResources} from '../services/requests';

let showMoreStyles = (trigger, wrapper) => {
    let btn = document.querySelector(trigger);


    function createCard(response){
        response.forEach(({src,title,link}) =>{
            let card = document.createElement('div');
            card.classList.add('animated','fadeInRight','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

        
            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href="#">${link}</a>
            </div>
            `;

            document.querySelector(wrapper).appendChild(card);

        }); 
    }

    btn.addEventListener('click',function(){
        getResources('assets/db.json')
        .then(res => {
            createCard(res.styles);
            setTimeout(()=>{this.remove();},300);
        })
        .catch(error => {
            if(!document.querySelector('.err')){
                let err = document.createElement('div');
                err.classList.add('err');
                err.textContent = `Что-то пошло не так, сервер не отвечает..`;
                err.style.textAlign = 'center';
                document.querySelector(wrapper).appendChild(err);
            }
            
        });

        
          
    });
   

        

};

export default showMoreStyles;