class UserLogged {
    constructor() {
        this.pOutUser__logged = document.getElementById("pUser__logged");
    }

    loadUser() {
        var username = window.localStorage.getItem('username');
        var desenho = window.localStorage.getItem('desenho');

        var response = `${username}<br>
                        ${desenho}<br>`

        this.pOutUser__logged.innerHTML = response;
    }
}

window.addEventListener('load', ()=>{
    new UserLogged().loadUser();
})