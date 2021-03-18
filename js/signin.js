class Account {
    constructor() {
        this.inEmail = document.getElementById('inEmail');
        this.inPassword = document.getElementById('inPassword');
    }

    authentication() {
        // TEST
        var userStorage = window.localStorage.getItem('accounts');
        
        var checkEmail = userStorage.search(this.inEmail.value);
        var checkPassword = userStorage.search(this.inPassword.value);

        if (checkEmail & checkPassword) {
            var base_url = `//${document.location.host}/painting-project/`;

            window.location.href = `${base_url}/html/user.html`;
        }
    }
}

window.addEventListener('load', ()=>{

    
    document.getElementById("btSubmit").addEventListener('click', ()=>{
        
        var account = new Account();

        account.authentication();
    })

})