class UserLogged {
    constructor() {
        this.pOutUser__logged = document.getElementById("pUser__logged");
        this.spanOutUser__logged = document.getElementById("spanOutUser__logged");
    }

    loadUser() {
        var username = window.localStorage.getItem('username');
        var desenho = window.localStorage.getItem('desenho');

        var response = `${username}<br>
                        <span style="font-family: 'Brush Script MT'; font-size:24px;">${desenho}</span><br>`

        this.pOutUser__logged.innerHTML = response;

        response = `${username}`

        this.spanOutUser__logged.innerHTML = response;
    }
}

function openModal(image) {
    
    $('#exampleModalCenter').on('show.bs.modal', function() {
        $('.img-fluid').attr('src', image);
    })
}

window.addEventListener('load', ()=>{
    new UserLogged().loadUser();

    document.getElementById("picture4").addEventListener('click', ()=>{
        var image = document.getElementById("picture4");
        openModal(image.src);
    })

    document.getElementById("picture6").addEventListener('click', ()=>{
        var image = document.getElementById("picture6");
        openModal(image.src);
        
    })

    document.getElementById("picture7").addEventListener('click', ()=>{
        var image = document.getElementById("picture7");
        openModal(image.src);
    })
})