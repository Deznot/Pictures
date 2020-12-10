import {postData} from "../services/requests";
function forms (resSum){
    let forms  = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('input[name = upload]');

    // checkNumInputs('input[name="user_phone"]');
    
    let message = {
        loading : 'Идет загрузка...',
        success : 'Скоро с вами свяжутся',
        failure : 'Что-то пошло не так',
        spinner : 'assets/img/spinner.gif',
        ok : 'assets/img/ok.png',
        fail : 'assets/img/fail.png'
    };

    let path = {
        designer : 'assets/server.php',
        question : 'assets/question.php',
    };

   


    let clearInputs = ()=>{
        inputs.forEach((input)=>{
            input.value = "";
        });
        upload.forEach(item =>{
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
        for(let key of Object.keys(resSum)){
            delete resSum[key];
        }
    };

    upload.forEach((item)=>{
        item.addEventListener('input', ()=>{
            let dots,
                arr = item.files[0].name.split('.');

            if (item.files[0].name.split('.')[0].length > 6 ){dots = '...';} else {dots = '.';}

            let name = arr[0].slice(0,6) + dots +arr[1];
            item.previousElementSibling.textContent = name;
            item.previousElementSibling.style.color = '';
        });
    });

    forms.forEach((item)=>{
        item.addEventListener('submit', (e)=>{
            if(e.target){
                e.preventDefault();
            }
            if ((item.closest('.popup-design') || item.classList.contains('calc_form')) && !item.upload.value){
                item.querySelector('[name=upload]').previousElementSibling.style.color = 'red';
                
            }else{
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.parentNode.appendChild(statusMessage);

                item.classList.add('animated', 'fadeOutUp');
                setTimeout(()=>{
                    item.style.display = 'none';
                },400);

                let statusImg = document.createElement('img');
                    statusImg.setAttribute('src', message.spinner);
                    statusImg.classList.add('animated','fadeInUp');
                    statusMessage.appendChild(statusImg);

                let textStatus = document.createElement('div');
                    textStatus.textContent = message.loading;
                    statusMessage.appendChild(textStatus);


                let formData = new FormData(item);
                if (item.classList.contains('calc_form')){
                    for(let key in resSum){
                        formData.append(key, resSum[key]);
                    }
                }

                
                let api;
                item.closest('.popup-design') || item.classList.contains('calc_form')  ? 
                api = path.designer : api= path.question;
                
                postData(api , formData)
                .then (res =>{
                    textStatus.textContent = message.success;
                    statusImg.setAttribute('src', message.ok);
                })
                .catch(()=>{
                    textStatus.textContent = message.failure;
                    statusImg.setAttribute('src', message.fail);
                })
                .finally(()=>{
                    clearInputs();
                    setTimeout(()=>{
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
            }
   
        });
    });
}

export default forms;