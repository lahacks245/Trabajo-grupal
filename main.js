const url="https://api.languagelayer.com/detect?access_key=612f48fb72f500bb26d254403acc5e35"
fetch(url)
   
.then (respuesta => respuesta.json())

.then(idioma => {
    
    //document.getElementById("texto").innerHTML += `${url}?query= ${texto} ` 

let url2 =`${url}?query= ${document.getElementById("texto")} `

let detectado = idioma.results.language_name


})




? access_key = 612f48fb72f500bb26d254403acc5e35
    & query = 