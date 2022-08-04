const url = `https://ghibliapi.herokuapp.com/films`;
        const characterurl=[];
        let ul = document.querySelector("ul");
        let h1 = document.querySelector("h2")
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(ziburi){
            console.log(ziburi)
            let character = ziburi[2].people;
            h1.innerHTML=ziburi[2].original_title
            console.log(character)
            for(let i=0;i<=character.length;i++){
                
                characterurl[i] = character[i];
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