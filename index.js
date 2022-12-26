const radiobox = document.querySelectorAll('.radio')

if (radiobox){
    radiobox.forEach((radio)=>{
        radio.addEventListener('change',()=>{
            if(radio.checked){
                const btn = document.querySelector('#btn');
                btn.disabled = false 
            }   
        });
         
    })
}


