

const url = `https://ghibliapi.herokuapp.com/films`;
        const characterurl=[];
        const movielist =[];
        let ul = document.querySelector("ul");
        let h2 = document.querySelector("h2")
        let image= document.querySelector("img")
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(ziburi){
            console.log(ziburi)
            let movie = document.querySelector(".movie")
            for(let i=0;i<ziburi.length;i++){
                movielist[i]=ziburi[i].original_title;
                let list = document.createElement("option")
                list.setAttribute("value",i)
                list.innerHTML= movielist[i];
                movie.appendChild(list)
            }
            console.log(movielist)
            let ml = document.querySelectorAll("option")
            let button = document.querySelector(".button")
            button.addEventListener("click",function(){
                ul.innerHTML=""
                let mnumber = movie.value
                console.log(mnumber);
                let character = ziburi[mnumber].people;
                let imgcode = ziburi[mnumber].image
                image.setAttribute("src",imgcode)

            h2.innerHTML=ziburi[mnumber].original_title
            console.log(character)
            for(let i=0;i<=character.length;i++){
                
                characterurl[i] = character[i];
                console.log(characterurl)
                fetch(characterurl[i])
                .then(function(response){
                    return response.json();
                })
                .then(function(namelist){
                    let name = namelist.name;
                    console.log(name)
                    let li = document.createElement("li");
                    li.innerText=name;
                    ul.appendChild(li);
                })
            }
            })

            
        })