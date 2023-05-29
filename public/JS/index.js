const vinosYalgoMas = firebase.firestore().collection("Vinoteca")


//Aca se separa llamamos la base de datos de firebase.
let nombreEventos = document.getElementById("todosLosEventos")
var searchContainer = document.getElementById("inputSearch")
var formulario = document.getElementById("formulario")
var portada = document.getElementById("portada")
var carousel = document.getElementById("carousel")
let dataVinos = [];
let vinos
var todosLosVinos = [];
var vinosBlancos = [];
var vinosTintos = [];
var vinosEspumantes = [];
var cervezas = [];
var accesorios=[];
var delicateses=[];

let search = " ";

async function getDB() {
    await vinosYalgoMas.get()
        .then((results) => {
            console.log(results)
            const data = results.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            dataVinos.push(...data)

            vinos = dataVinos

            console.log("Toda data en la colección 'vinos' ", data);

            for (var i = 0; i < vinos.length; i++) {
                if (vinos[i].Tipo === "Tinto") {
                    vinosTintos.push(vinos[i])
                }
                else if (vinos[i].Tipo === "Blanco") {
                    vinosBlancos.push(vinos[i])

                }
                else if (vinos[i].Tipo === "Cerveza") {
                    cervezas.push(vinos[i])

                }
                else if (vinos[i].Tipo === "Accesorios") {
                    accesorios.push(vinos[i])

                }
                else if (vinos[i].Tipo === "Delicateses") {
                    delicateses.push(vinos[i])

                }
                else {
                    vinosEspumantes.push(vinos[i])
                }
            }
            console.log("Blancos", vinosBlancos)
            console.log("Tintos", vinosTintos)
            console.log("Espumantes", vinosEspumantes)
            console.log("Todos los vinos", vinos)
            console.log("Todas las Cervezas", cervezas)
            console.log("Todas los Accesorios", accesorios)
            console.log("Todas las Delicateses", delicateses)

        })
};

getDB()


var buttonNavegacion = []

var buttonNav = document.getElementsByClassName("navLink") //Capturo todos los elementos cuya clase es NAVLINK  document.getElementsByClassName. aca quedan todos los botones guardados
for (var i = 0; i < buttonNav.length; i++) { //Recorro todos los elementos con un for que tienen la clase NAVLINK y a medida que los recorre le agraga un escuchador de eventos
    const element = buttonNav[i]
    buttonNavegacion.push(buttonNav[i].innerText)
    //Escuchador de eventos escucha el click
    element.addEventListener("click", function (e) { //Cuando le doy click a los botones por la funcion le pido que me traiga los atributos o propiedades del boton en este caso extraigo el ID
        //document.getElementById("name").innerHTML(e.target.innerText)
        imprimir(e.target.innerText)
    })
}


var buttonCerveza = []
console.log(buttonCerveza)
var buttonCer = document.getElementsByClassName("espumantes") //Capturo todos los elementos cuya clase es NAVLINK  document.getElementsByClassName. aca quedan todos los botones guardados
console.log(buttonCer)
for (var i = 0; i < buttonCer.length; i++) { //Recorro todos los elementos con un for que tienen la clase NAVLINK y a medida que los recorre le agraga un escuchador de eventos
    const element = buttonCer[i]
    buttonCerveza.push(buttonCer[i].innerText)
    console.log(buttonCerveza)
    //Escuchador de eventos escucha el click
    element.addEventListener("click", function (e) { //Cuando le doy click a los botones por la funcion le pido que me traiga los atributos o propiedades del boton en este caso extraigo el ID
        //document.getElementById("name").innerHTML(e.target.innerText)
        imprimir(e.target.innerText)
    })
}

var buttonDelicateses = []
console.log(buttonDelicateses)
var buttonDel = document.getElementsByClassName("blancos") //Capturo todos los elementos cuya clase es NAVLINK  document.getElementsByClassName. aca quedan todos los botones guardados
console.log(buttonDel)
for (var i = 0; i < buttonDel.length; i++) { //Recorro todos los elementos con un for que tienen la clase NAVLINK y a medida que los recorre le agraga un escuchador de eventos
    const element = buttonDel[i]
    buttonDelicateses.push(buttonDel[i].innerText)
    console.log(buttonDelicateses)
    //Escuchador de eventos escucha el click
    element.addEventListener("click", function (e) { //Cuando le doy click a los botones por la funcion le pido que me traiga los atributos o propiedades del boton en este caso extraigo el ID
        //document.getElementById("name").innerHTML(e.target.innerText)
        imprimir(e.target.innerText)
    })
}

var buttonAccesorios = []
console.log(buttonAccesorios)
var buttonAcce = document.getElementsByClassName("tintos") //Capturo todos los elementos cuya clase es NAVLINK  document.getElementsByClassName. aca quedan todos los botones guardados
console.log(buttonAcce)
for (var i = 0; i < buttonAcce.length; i++) { //Recorro todos los elementos con un for que tienen la clase NAVLINK y a medida que los recorre le agraga un escuchador de eventos
    const element = buttonAcce[i]
    buttonAccesorios.push(buttonAcce[i].innerText)
    console.log(buttonAccesorios)
    //Escuchador de eventos escucha el click
    element.addEventListener("click", function (e) { //Cuando le doy click a los botones por la funcion le pido que me traiga los atributos o propiedades del boton en este caso extraigo el ID
        //document.getElementById("name").innerHTML(e.target.innerText)
        imprimir(e.target.innerText)
    })
}
function imprimir(id) {
    console.log(id)
    switch (id) {
        case "Vinos Tintos":
            console.log("Estoy Vinos Tintos")
            nombreEventos.style.display = "flex"
            formulario.style.display = "none"
            display(vinosTintos)
            searchContainer.style.display = "flex"
            portada.style.display="none"

            break;
        case "Vinos Blancos":
            console.log("Estoy Vinos Blancos")
            nombreEventos.style.display = "flex"
            formulario.style.display = "none"
            display(vinosBlancos)
            searchContainer.style.display = "flex"

            break;
        case "Vinos Espumantes":
            console.log("Estoy Vinos Espumantes")
            nombreEventos.style.display = "flex"
            formulario.style.display = "none"
            display(vinosEspumantes)
            searchContainer.style.display = "flex"


            break;
            case "Cervezas":
                console.log("Estoy en cervezas")
                display(cervezas)
                portada.style.display="none"
            break;
            
            case "Delicateses":
                console.log("Estoy en Delicateses")
                display(delicateses)
                portada.style.display="none"

             
            break;
            case "Accesorios":
                console.log("Estoy en Accesorios")
                display(accesorios)
                portada.style.display="none"
            break;

        case "Contacto":
            imprimirFormulario()
            formulario.style.display = "flex"
            console.log("Estoy Formulario")
            let form = document.getElementById("formulario")
            form.addEventListener("submit", function (event) { actionForm(event) })
            nombreEventos.style.display = "none"
            searchContainer.style.display = "none"
            portada.style.display="none"

            break;

        default:
            display(vinos)
            portada.style.display="flex"
            console.log("Estoy en Home")
            nombreEventos.style.display = "flex"
            formulario.style.display = "none"
            searchContainer.style.display = "flex"
                       
            break;


    }

}
function display(array) {
    var html = "";
    for (var i = 0; i < array.length; i++) {
        html += `
        <div class="uno">
        <div class="cards">
            <div class="cardUno">
                <img class="img imagenUno" src="${array[i].Imagen}" alt="" srcset="">
                <div class="title">${array[i].Nombre}</div>
                <div class="price">
                    <div class="price-ver">$${array[i].Precio}</div>                 
                </div>
                <div class="verMas" ><button class="but"><a href="">Agregar al carrito.</a></button></div>
            </div>
        </div> 

        
        `
    }

    document.getElementById("todosLosEventos").innerHTML = html;
}

//console.log(location.search)
function rutas() {
    var time = location.search.split("?time=");

    //console.log(time[1])

    switch (time[1]) {
        case "Past":
            imprimir("Past")
            break;
        case "Upcoming":
            imprimir("Upcoming")
            break;
        case "Contact":
            imprimir("Contact")
            break;
        case "Stats":
            imprimir("Stats")
            break;
        default:
            imprimir("Home")

    }
}


function imprimirFormulario() {
    document.getElementById("formulario").innerHTML = `
    <div class="formulario">
    <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" placeholder= "Nombre y Apellido" required>
                    <label for="icon_prefix"></label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" class="validate" placeholder= "Telefono" required>
                    <label for="icon_telephone"></label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input id="icon_prefix" type="text" class="validate" placeholder= "E-mail" required>
                    <label for="icon_prefix"></label>
                </div>
                <div class="input-field col s6">
                <input type="radio" id= "Female" name="genero" value= "Female">
                <label for = "Female">Female</label>
                <input type="radio" id= "Male" name="genero" value= "Male">
                <label for = "Male">Male</label>
            </div>
                <button class="btn" type="submit" value = "Enviar">Enviar
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </form>
    </div>
</div>
    `
}
function imprimirPortada() {
    document.getElementById("portada").innerHTML =
        `
    `

}


// ---------Filtro por barra de busqueda---------------

var inputSearch = document.getElementById("inputSearch")

inputSearch.addEventListener("keyup", function(vino) { capturaVino(vino) })

function capturaVino(vino) {
    var datoInput = vino.target.value
    
    var search = datoInput.trim().toLowerCase()
 
   //console.log(datoInput)
    var filtrado = vinos.filter(vino  => vino.Nombre.toLowerCase().includes(search))
    //console.log(filtrado)
    if (filtrado.length === 0) {
        nombreEventos.innerHTML = `<h1 class="ceroResult" >No se encontraron Vinos para tu busqueda </h1>`
    }
    else {
        display(filtrado)
    }


}



// ---------------------Captura de datos del form-----------------

function actionForm(event) {
    event.preventDefault()
    console.log(event.target[0].value)

    let formData = {
        Nombre: event.target[0].value,
        Telefono: event.target[1].value,
        Email: event.target[2].value,
        Sexo: event.target[3].value,
    }
    console.log(formData)
}

