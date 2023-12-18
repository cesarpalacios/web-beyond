//document.getElementById('authors')?.innerHTML('hola')

fetch('http://127.0.0.1:5000/get_books')
    .then(response => response.json())
    .then(json => authors_get(json.books))



function authors_get(lista){
    const container = document.getElementById('autores')
    lista.map( author => {
        container.innerHTML += `
          <tr>
            <td>${author.id}</td>
            <th>${author.author_id}</th>
            <td>${author.title}</td>
          </tr>
        `
    }
    )
}


function authors_post(){
   
    if (document.form.id_autor.value && document.form.nombre_libro_autor.value){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "title": document.form.nombre_libro_autor.value,
        "author_id": parseInt(document.form.id_autor.value)
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };
    
        fetch("http://127.0.0.1:5000/insert_books", requestOptions)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => alert('error', error));
    }else{
        alert('Ingerese el nombre del autor')
    }
    

}

