let mask = (selector) =>{
    function setCursorPosition (pos,el){
        el.focus();
        if(el.setSelectionRange){
            el.setSelectionRange(pos,pos);
        }else if (el.createTextRange){
            let range = el.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask(event){
        let matrix = '+3 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''), //7
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length){
            val = def;
        }


        this.value = matrix.replace(/./g, function(a){
            return /[_\d]/.test(a) && i<val.length ? val.charAt(i++) : i >= val.length? '' : a;
        });



        if(event.type == 'blur'){
            if(this.value.length == 2){
                this.value = '';
            }
        }else{
            setCursorPosition(this.value.length,this);
        }

    }

    let inputs = document.querySelectorAll(selector);

        inputs.forEach(input =>{
            input.setAttribute('autocomplete','off');
            input.addEventListener('mouseup', createMask);
            input.addEventListener('keyup', createMask, (e)=>{
                if(e.code ==='ArrowLeft'){
                    e.preventDefault();
                }
            });
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
};

export default mask;