const HTMLResponse = document.querySelector("#app");
let ul = document.createElement("ul");

//esto nos va a devolver una promesa
fetch("../data/data.json")
  .then((response) => response.json())
  .then((comentarios) => {
    comentarios.forEach((comentario) => {
      let elem = document.createElement("li");
      elem.appendChild(
        document.createTextNode(`${comentario.id} ${comentario.texto}`)
      );
      ul.appendChild(elem);
    });
    HTMLResponse.appendChild(ul);
    //const tpl = photos.map(
    //(photo) => `<li>${photo.id} ${photo.thumbnailUrl}</li>`);
    // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
  });
//-----------------------------------------------------------

