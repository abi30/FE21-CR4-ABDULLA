


// -------------------------create form
const header_form=document.createElement("form");
header_form.setAttribute("id","form");
document.getElementById("myheader").appendChild(header_form);

// ------------------------button for sorting
const sort_button=document.createElement("button");
sort_button.setAttribute("id","sort_button");
sort_button.innerHTML="like sorting";
sort_button.setAttribute("onclick", "sorting_like()");
sort_button.style.backgroundColor="transparent";
sort_button.style.borderRadius="20px";
document.getElementById("myheader").appendChild(sort_button);

// ------------------------input for searching
const input_search= document.createElement("input");
input_search.setAttribute("id" ,"search");
input_search.classList.add("search");
input_search.setAttribute("placeholder" ,"search");
document.getElementById("form").appendChild(input_search);


    var pre_click="";

    const main= document.getElementById("main");
    const allMovies=JSON.parse(movies);

        getMovies();

        async function getMovies(){

        showMovies(allMovies);
        }

        // ------------------------showMovies our main funtion..
     function showMovies(allMovies) {
  
    allMovies.forEach(movie => {
   
    
        const {id,title,genres,poster,releaseDate,like,voteAvg,storyline,posterurl}=movie;
        let backgroundColor="";
        if(like>=10 ){
            backgroundColor="#7FE816";
        }else if (like>=7){
            backgroundColor="#FCA607";
        }else if(like>=4){
            backgroundColor="#FC0707";
        }else{
            backgroundColor="#4aabe4;";
        }
    
        const movieEl=document.createElement("div");
 
        movieEl.classList.add("movie");
        movieEl.setAttribute("id", "movie"+id);
        movieEl.innerHTML=`
        <img id="${id}" src="${poster}" 
        alt="${title}" onclick="movieInfo(this.id)">
        <div class="movie-info" id="movie-info${id}">
            <h4>Title:${title}</h4>
            <h5>genres:${genres}</h5>
            <span class="${getClassByRate(voteAvg)}">Rating:${voteAvg}</span>
            <h6>Rel-Date:${releaseDate}</h6>
            <div class="like" id="${id}">
            <button id="likebtn${id}" onclick="like_count(${id})" value="${like}">like</button>
            <span id="likes${id}" style="background-color:${backgroundColor}">${like}</span>
            </div>
        </div>  
       `;
    main.appendChild(movieEl);
    
           
    });

}



// ------------------------like count funtion..
function like_count(id){
    var likeValue=document.getElementById("likebtn"+[id]).value; 
    likeValue++;
    allMovies[id-1].like=likeValue;
    document.getElementById("likebtn"+[id]).value=likeValue;
    var like_span=document.getElementById("likes"+[id]);
    like_span.innerHTML=likeValue;

    if(likeValue>=10 ){
        like_span.style.backgroundColor="#7FE816";
    }else if (likeValue>=7){
        like_span.style.backgroundColor="#FCA607";
    }else if (likeValue>=4){
        like_span.style.backgroundColor="#FC0707";
    }else{
        like_span.style.backgroundColor="#4aabe4;";
    }

}


// ------------------------like sorting
 function sorting_like(){
     

// ------------------------this functin is very usefull for sorting value
     allMovies.sort(function(a, b){
         return b.like - a.like;
     })
     //console.log(allMovies);
     main.innerHTML = "";
     showMovies(allMovies);
 }



 
// ------------------------onclick on the picture then you can see the story of movie

   function movieInfo(clicked) {

    var pre_storyLine = document.getElementById(pre_click);
    if(pre_storyLine !=undefined)
        pre_storyLine.remove();

        //   console.log(clicked);
                var storyLine=document.createElement("p")
                pre_click = "storyline"+[clicked];
                storyLine.setAttribute("id","storyline"+[clicked]);
                var text_story=document.createTextNode(allMovies[clicked].storyline);
                storyLine.appendChild(text_story);
                storyLine.ondblclick = clear_history;
                var  target_div=document.getElementById("movie"+[clicked]);
                storyLine.setAttribute("style" ,"width:100%;");
                target_div.appendChild(storyLine);
                    
    
    
}


// ------------------------take al time one click..and other clear
function clear_history(clickedId){
    console.log("clear_history");
    var pre_storyLine = document.getElementById(pre_click);
    if(pre_storyLine !=undefined)
       pre_storyLine.remove();

}


// ------------------------rating color function

function getClassByRate(vote){

        if(vote>=8){
        return"green";
        }else if (vote>=5){
        return "orange";
        }else{
        return "red";
        }

}

// ------------------------search function is not completed  is going on
 function moviesSearch(input_value){
    
    
   for(let i=0; i<allMovies.length;i++){
       var str=allMovies[i].title;
       console.log(str);
       var n=str.search(input_value);

    console.log(allMovies[i].title);
    if(m==allMovies[i].title){
      showMovies(allMovies[i]);
    }
}

} 



// ------------------------all are footer with h1

const foo= document.createElement("footer");
foo.setAttribute("id","foo");
document.body.appendChild(foo);
foo.style.backgroundColor="#373b69";
foo.style.height="100px";


const lastHeader= document.createElement("h1");
lastHeader.setAttribute("id" ,"lastHeader");
var node_text= document.createTextNode("my Movies List");
lastHeader.appendChild(node_text);
lastHeader.style.color="white";
lastHeader.style.textAlign="center";
lastHeader.style.padding="2rem";

document.getElementById("foo").appendChild(lastHeader);
