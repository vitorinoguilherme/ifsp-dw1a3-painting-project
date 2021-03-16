class User {
    constructor() {
        this.inName = document.getElementById("inName");
        this.inDesenho = document.getElementById("inDesenho");
        this.inEmail = document.getElementById("inEmail");
        this.inPassword = document.getElementById("inPassword");

        this.userLocalStorage();
    }
   
    // Validação para os dados de entrada fornecidos pelo usuário.
    validacaoInputs(input) {
        if (input.value == null || input.value == "") {
            alert(`Erro 422: "${input.name}" dados inválidos. `)
            input.focus();
        } else {
            return input.value;
        }
    }

    get inName() {
        return this._inName;
    }

    set inName(input) {
        var inputValidado = this.validacaoInputs(input);
        this._inName = inputValidado;
    }

    get inDesenho() {
        return this._inDesenho;
    }

    set inDesenho(input) {
        var inputValidado = this.validacaoInputs(input);
        this._inDesenho = inputValidado;
    }

    get inEmail() {
        return this._inEmail;
    }

    set inEmail(input) {
        var inputValidado = this.validacaoInputs(input);
        this._inEmail = inputValidado;
    }

    get inPassword() {
        return this._inPassword;
    }

    set inPassword(input) {
        var inputValidado = this.validacaoInputs(input);
        this._inPassword = inputValidado;
    }

    toString() {
        return `\n\tName: ${this.inName}
                \n\tDesenho: ${this.inDesenho}
                \n\tEmail: ${this.inEmail}`
    }

    // Função para salvar dados de usuário no localStorage
    // Dados recuperados na página após o login.
    userLocalStorage() {
        window.localStorage.setItem('username', this.inName);
        window.localStorage.setItem('desenho', this.inDesenho);
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
        window.location.href = "/html/signin.html";
    })

})