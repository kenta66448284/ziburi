

const url = `https://ghibliapi.herokuapp.com/films`;
        const characterurl=[];
        const movielist =[];
        //必要な要素の取得
        let ul = document.querySelector("ul");
        let h2 = document.querySelector("h2")
        let image= document.querySelector("img")
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(ziburi){
            let movie = document.querySelector(".movie")
            //optionの要素の追加ここでvalueの設定をする
            for(let i=0;i<ziburi.length;i++){
                movielist[i]=ziburi[i].original_title;
                let list = document.createElement("option")
                list.setAttribute("value",i)
                list.innerHTML= movielist[i];
                movie.appendChild(list)
            }
            let button = document.querySelector(".button")
            //buttonをクリックしたあとの処理
            button.addEventListener("click",function(){
                ul.innerHTML="";//ulの初期化(他の作品をクリックしたときに前回見たやつとかぶらないようにするため)
                let mnumber = movie.value;//optionのvalueの取得
                let character = ziburi[mnumber].people;
                let imgcode = ziburi[mnumber].image
                image.setAttribute("src",imgcode)

            h2.innerHTML=ziburi[mnumber].original_title//作品名の表示
            for(let i=0;i<=character.length;i++){
                characterurl[i] = character[i];
                console.log(characterurl)
                fetch(characterurl[i])//キャラクターの詳しい情報のjsonの取得
                .then(function(response){
                    return response.json();
                })
                .then(function(namelist){//liの作成名前の追加＆ulにliを追加する
                    let name = namelist.name;
                    let gender = namelist.gender;
                    console.log(gender)
                    let li = document.createElement("li");
                    li.innerText=name;
                    if(gender=="Female"){
                        li.setAttribute("style","color:red")   
                    }else if(gender=="Male"){
                        li.setAttribute("style","color:blue")
                    }
                    ul.appendChild(li);
                })
            }
            })

            
        })