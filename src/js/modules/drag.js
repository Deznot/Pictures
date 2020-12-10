let drag = () =>{
    let fileInputs = document.querySelectorAll('[name="upload"]');

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
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
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