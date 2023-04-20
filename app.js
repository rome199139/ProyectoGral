const login = {
    user: 'arturoromerog@gmail.com',
    pass: 'abcd1234'
}

const loginJSON = JSON.stringify(login);
localStorage.setItem('login',loginJSON);
console.log(loginJSON);

let numeroVeces = 2;
let numeroVecesPass = 3;

let loginLocalStore = JSON.parse(localStorage.getItem('login'));
console.log(loginLocalStore.user);
console.log(loginLocalStore.pass);

let form = document.getElementById('login-form');

form.addEventListener('submit', validarLogin);

function validarLogin(e){
    e.preventDefault();
    let newLogin = document.getElementById('usuario').value;
    let newPass = document.getElementById('password').value;
        if(newLogin === loginLocalStore.user && newPass === loginLocalStore.pass ){
        alert('Digito bien el usuario y contraseña... puede continuar');
        console.log("sigo pagina menu");
        window.open("./menu.html");
    }else if(numeroVeces <= 2 && numeroVeces > 0){        
        alert("Esos no son los datos de usuario y/o contraseña correctos, te quedan " + numeroVeces + " intentos");
        numeroVeces = numeroVeces - 1;
        console.log(numeroVeces);
    }else if(numeroVeces === 0){
        alert("Para ver los datos de usuario y contraseña de click en ¿Olvidaste tu usuario? y ¿Haz olvidado tu contraseña?");
    }
}


document.querySelector('#login-form').addEventListener('submit',(e)=> {
    e.preventDefault();
    //const usuario = document.querySelector('#titulo').value;
    //const password = document.querySelector('#password').value;
    
    //console.log(usuario);
    //console.log(password);
    
});

function traerLogin1(){
    let loginLocalStore = JSON.parse(localStorage.getItem('login'));
        console.log(loginLocalStore);
    }
    
 function crear() {
    alert("Hola ... Aqui se construira la ventana para crear una cuenta!!!!");
  }
            
 function user() {
    alert("Hola ... Digita como usuario arturoromerog@gmail.com");  
  }  

function pass() {
     alert("Hola ... Digita como contraseña: abcd1234");     
  } 

 function menuFactura() {
    window.open("./menuFactura.html");
 }
  
  
    /*if(numeroVeces <= 2 && numeroVeces > 0){        
        if(newLogin === loginLocalStore.user && newPass === loginLocalStore.pass ){
            console.log('Digito bien el usuario y contraseña... puede continuar');
        }else {
            alert("Esos no son los datos de usuario y/o contraseña correctos, te quedan " + numeroVeces + " intentos");
            numeroVeces = numeroVeces - 1;
            console.log(numeroVeces);                
        }
    }else if(numeroVeces === 0){
        alert("Para ver los datos de usuario y contraseña de click en ¿Olvidaste tu usuario? y ¿Haz olvidado tu contraseña?");
    }*/