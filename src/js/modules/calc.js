let calc = (size,material,options,promocode,result,resSum) =>{
    let sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result),
        sum = 0;

    function calcFunc(){
        sum = Math.round((+sizeBlock.value)*(+materialBlock.value)+(+optionsBlock.value));
        if(!sizeBlock.value || !materialBlock.value){
            resultBlock.textContent = "Пожалуйства, введите размер и материал";
        }else if(promocodeBlock.value == "IWANTTOPART"){
            resultBlock.textContent = Math.round(sum * 0.7);
            resSum.price = Math.round(sum * 0.7);
        }else{
            resultBlock.textContent = sum;
            resSum.price = sum;
        }
    }

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change',calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input',calcFunc);
};

export default calc;