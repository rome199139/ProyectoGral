const login = {
    user: 'arturoromerog@gmail.com',
    pass: 'abcd1234'
}

const loginJSON = JSON.stringify(login);
localStorage.setItem('login',loginJSON);
console.log(loginJSON);

let loginLocalStore = JSON.parse(localStorage.getItem('login'));
console.log(loginLocalStore.user);
console.log(loginLocalStore.pass);

var form = document.getElementById('login-form');

form.addEventListener('submit', validarLogin);

function validarLogin(e){
    e.preventDefault();
    var newLogin = document.getElementById('usuario').value;
    var newPass = document.getElementById('password').value;
    if(newLogin === loginLocalStore.user && newPass === loginLocalStore.pass ){
        console.log('Digito bien el usuario y contraseña... puede continuar');
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

//class Login {
//    static traerLogin(){
//        let loginLocalStore = JSON.parse(localStorage.getItem('login'));
//    }
//}