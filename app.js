const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")

async function fetchPosts(api) {
    let reponse = await fetch(`${api}/posts`)
    reponse
          .json()
          .then((res)=> createCard(res))
          .catch((err)=> console.log(err))
          .finally(()=>{
            loading.style.display = "none"
          })
}

fetchPosts(API_URL)


function createCard(data) {
    data.slice(0,10).forEach((user) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = 
    });
}