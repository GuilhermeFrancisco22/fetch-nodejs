const url = "https://dummyjson.com/products"

/*  Fetch ==> vai no servidor (noejs - feito por nós)
    e através do  endpoit/url, PEGA as informações
*/

// nomedafunc(URL, {})

fetch(url, { method: "get" })
.then(result => result.json())
.then(dados => console.log(dados))

function showInfo(result) {
    console.log(result.products)
    result.products.forEach(element => {
        console.log(element.description)
        console.log(element.images[0])
    })
}