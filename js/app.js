//Petición Y Promesa Fetch
function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

//Referencia
getCharacters(data => {
    data.results.forEach(personaje => {
        const container = document.createRange().createContextualFragment
        (`
        <div class="container">
            <div class="row">
                <div class="card">
                    <div class="card-body d-flex align-items-center">
                        <div class="cardposition">
                            <div class="card-img">
                                <img src="${personaje.image}" class="imagen"></img>
                            </div>
                            <div class="">
                                <p class="card-text my-2 textotipouno">${personaje.name}</p>
                            </div>
                            <div class="">
                                <p class="card-text my-2 textotipodos">${personaje.gender}</p>
                            </div>
                            <div class="">
                                <p class="card-text my-2 textotipodos">${personaje.status}</p>
                            </div>
                            <div class="boton">
                                <button type="button" class="textotipouno btn btn btn-outline-warning my-2" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Conoce más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `);
        const main = document.querySelector("main");
        main.append(container);
    });
});


