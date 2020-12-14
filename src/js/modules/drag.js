let drag = () =>{
    let fileInputs = document.querySelectorAll('[name="upload"]'),
        fileUpload = document.querySelectorAll('.file_upload');

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function debounce(f, ms) {
        //задерживает каждый вызов f на ms миллисекунд.
        let isCooldown = false;
      
        return function() {
          if (isCooldown) {return;}

          f.apply(this, arguments);
      
          isCooldown = true;
      
          setTimeout(() => isCooldown = false, ms);
        }; 
      }

    function dropText(item){
        let block = document.createElement('div');
        block.classList.add('animated','fadeIn');
        block.style.margin = '20px';
        block.textContent = 'Вы можете перетащить ваши фотографии из файловой системы';
        insertAfter(block, item);   
    }

    function delDropText(item){
        if(item.nextElementSibling.classList.contains('fadeIn')){
            item.nextElementSibling.classList.remove('fadeIn');
            item.nextElementSibling.classList.add('fadeOut');
            item.nextElementSibling.remove();
        }
    }

    let wrapDropText = debounce(dropText, 400);


    fileUpload.forEach(item=>{
        item.addEventListener('mouseover', () => wrapDropText(item));

        item.addEventListener('mouseout', () => delDropText(item));
    });

    ['dragenter','dragleave','dragover','drop'].forEach(eventName =>{
        fileInputs.forEach(input=>{
            input.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item){
        item.closest('.file_upload').style.border = "5px solid #C51ABB";
        item.closest('.file_upload').style.backgroundColor = "#949494";
    }

    function unhighLight(item){
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')){
            item.closest('.file_upload').style.backgroundColor = "#fff";
        }else{
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }      
    }

    ['dragenter','dragover'].forEach(eventName =>{
        fileInputs.forEach(input=>{
            input.addEventListener(eventName, ()=> highLight(input), false);
        });
    });

    ['drop','dragleave'].forEach(eventName =>{
        fileInputs.forEach(input=>{
            input.addEventListener(eventName, ()=> unhighLight(input), false);
        });
    });

    fileInputs.forEach(item =>{
        item.addEventListener('drop', (e)=>{
            item.files = e.dataTransfer.files;
            let dots,
                arr = item.files[0].name.split('.');
            arr[0].length >6 ? dots = '...' : dots = '.';
            let name = arr[0].slice(0,6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
            item.previousElementSibling.style.color = '';

        });
    });

};

export default drag;