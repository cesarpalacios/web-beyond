fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(json => Personajes(json.results))


function Personajes(character){
    const container = document.getElementById('personajes')
    
    character.map(rick => {container.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${rick.image} alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${rick.name}</p>
                </div>
            </div>
        </div>`})

    // .map(personajillo => {
    //     container.innerHTML +=`
    //         <div class="col">
    //         <div class="card" style="width: 18rem;">
    //             <img class="card-img-top" src=${personajillo.image} alt="Card image cap">
    //             <div class="card-body">
    //                 <p class="card-text">${personajillo.name}</p>
    //             </div>
    //     </div>
    //     </div>
    //     `});

    // container.innerHTML = `
    // <div class="row">
    //     <div class="col-sm">
    //         <div class="card" style="width: 18rem;">
    //             <img class="card-img-top" src=${character[1].image} alt="Card image cap">
    //             <div class="card-body">
    //                 <p class="card-text">${character[1].name}</p>
    //             </div>
    //         </div>
    //     </div>
    
    //     <div class="col-sm">
    //         <div class="card" style="width: 18rem;">
    //             <img class="card-img-top" src=${character[2].image} alt="Card image cap">
    //             <div class="card-body">
    //                 <p class="card-text">${character[2].name}</p>
    //             </div>
    //         </div> 
    //     </div>
    // </div>
    // `;
    
    


    
}