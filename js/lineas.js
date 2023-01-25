function cambiar() {
    const url = 'https://randomuser.me/api/';

    fetch(url)
        .then(res => res.json())
        .then( data => mostrar(data));
    
    const mostrar = (data) => {
        console.log(data)
        document.getElementById("nombres").innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`
        document.getElementById("imagen").innerHTML = `<div class="row border-bottom ms-1 me-1 pt-3"></div>
        <img id="foto" class="card-img-top ps-3 pe-3 mt-4 mb-4" src="${data.results[0].picture.large}" alt="foto carnet">`
    }
}

