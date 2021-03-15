class User {

    constructor() {
        this.inName = document.getElementById("inName");
        this.inEmail = document.getElementById("inEmail");
        this.inPassword = document.getElementById("inPassword");
    }
   
    get inName() {
        return this._inName;
    }

    set inName(name) {
        if (name.value == null) {
            alert("Entre com um nome válido.")
            name.focus();
        } else {
            this._inName = name.value;
        }
    }

    
    get inEmail() {
        return this._inEmail;
    }

    set inEmail(email) {
        if (email.value == null) {
            alert("Entre com um email válido.");
            email.focus();
        } else {
            this._inEmail = email.value;
        }
    }

    
    get inPassword() {
        return this._inPassword;
    }

    set inPassword(password) {
        if (password.value == null) {
            alert("Entre com uma senha válida.")
            password.focus();
        } else {
            this._inPassword = password.value;
        }
    }
 
}

class UserStorage {
    constructor() {
        
    }

    register(user) {

        this.listUsers = [];

        var userAccount = [
            `"name":"${user.inName}"`,
            `"email":"${user.inEmail}"`,
            `"password":"${user.inPassword}"`
        ]

        if(userAccount == "name:,email:,password:") {
            alert("Cadastro inválido, tente novamente")
        }
        else {
            var userStorage = window.localStorage.getItem('accounts');
            if (userStorage == null) {
               
                this.listUsers.push(userAccount);
    
                window.localStorage.setItem('accounts', this.listUsers);
            } else {
                this.listUsers.push(userAccount);
                this.listUsers.push(userStorage);
    
                window.localStorage.setItem('accounts', this.listUsers);
            }
        }
        

    }
}

window.addEventListener('load', ()=>{
    //window.localStorage.removeItem('accounts');

    var userStorage = new UserStorage();
    document.getElementById("btRegister").addEventListener('click', ()=>{
        var user = new User();
        
        userStorage.register(user);
        window.location.href = "../index.html";
    })

})