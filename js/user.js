class UserLogged {
    constructor() {
        this.pOutUser__logged = document.getElementById("pUser__logged");
        this.spanOutUser__logged = document.getElementById("spanOutUser__logged");
    }

    loadUser() {
        var username = window.localStorage.getItem('username');
        var desenho = window.localStorage.getItem('desenho');

        var response = `${username}<br>
                        ${desenho}<br>`

        this.pOutUser__logged.innerHTML = response;

        response = `${username}`

        this.spanOutUser__logged.innerHTML = response;
    }
}

window.addEventListener('load', ()=>{
    new UserLogged().loadUser();
})