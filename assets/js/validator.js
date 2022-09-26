// reponse enigme

window.onload = ()=>{
    let myform = document.getElementsByClassName('myform');
    myform.addEventListener('submit',function(e){
        let Reponse = document.getElementById('Reponse');
        if(Reponse.value ==''){
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ ne peut pas etre vide';
            invalid.style.color = 'red';
        }
       else{
        e.preventDefault();
        document.getElementById('popupbox').style.display = 'block';
       }
        
        // window.scrollTo(top);
    })
}

// formulaire home

window.onload = ()=>{
    let myform = document.getElementsByClassName('formulaire');
    myform.addEventListener('submit',function(e){
        let email = document.getElementById('email');
        if(email.value ==''){
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ email ne peut pas etre vide';
            invalid.style.color = 'red';
        }
       else{
        e.preventDefault();
        document.getElementById('popupbox').style.display = 'block';
       }
        
        // window.scrollTo(top);
    })
}

$(document).ready(function(){
   
    
});
