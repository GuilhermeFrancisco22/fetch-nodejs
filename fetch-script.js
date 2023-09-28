const url = "https://dummyjson.com/products"

/*  Fetch ==> vai no servidor (noejs - feito por nós)
    e através do  endpoit/url, PEGA as informações
*/

// nomedafunc(URL, {})


// fetch(url, {
//     method: "get",
// }).then(result =>
//     result.json()
// ).then(data => console.log(data))
// .catch(err => console.log(err))

// function showInfo(result) {
//     console.log("Banana")
//     console.log(result)
// }

fetch(url, { method: "get" })
.then(result => result.json())
.then(dados => console.log(dados))