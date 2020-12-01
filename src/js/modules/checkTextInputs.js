let checkTextInputs = (selector) =>{
    let inputs = document.querySelectorAll(selector);

    inputs.forEach(item =>{
        item.addEventListener('keypress', (e)=>{
            if (e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
        });
    });

};

export default checkTextInputs;