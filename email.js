//CÓDIGO DE VALIDAÇÃO DE EMAIL 

function checarEmail(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf("@") == -1 ||
       document.forms[0].email.value.indexOf(".") == -1){
           alert("Por favor, informe um e-mail válido");
           return false;
       }else{
          alert("E-mail informado com sucesso")
          document.getElementById("email").innerHTML = document.forms[0].email.value;
       }
   }