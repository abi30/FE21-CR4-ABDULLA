

    
 const header = document.createElement("header");
 header.setAttribute("id" , "header");
//  body.insertBefore(header,body.firstChild);
//  document.body.firstChild.appendChild(header);



const main= document.getElementById("main");
// const form= document.getElementById("form");
// const search= document.getElementById("search");
 const allMovies=JSON.parse(movies);
 const url=allMovies.posterurl;
// initially get fav movies
// console.log(url);
getMovies();
async function getMovies(){

    showMovies(allMovies);
}

function showMovies(allMovies) {

    allMovies.forEach(movie => {

        const {title,genres,poster,releaseDate,like,voteAvg,storyline,posterurl}=movie;
    
        const movieEl=document.createElement("div");
        // movieEl.id.add("movie");
        movieEl.classList.add("movie");
        movieEl.innerHTML=`
        <img src="${poster}" 
        alt="${title}">
        <div class="movie-info">
            <h4>Title:${title}</h4>
            <h5>genres:${genres}</h5>
            <span class="${getClassByRate(voteAvg)}">Rating:${voteAvg}</span>
            <h6>Rel-Date:${releaseDate}</h6>
            
        </div>  
       `;
    main.appendChild(movieEl);
    
    
           
    });


for(let i= 0; i<allMovies.length;i++){
        const allInfo=document.getElementsByClassName("movie-info");
        var likeCount=document.createElement("div");
        likeCount.classList.add("like");

        // likeCount.innerHTML=`${allMovies[i].like}`;
        allInfo[i].appendChild(likeCount);
        var btn = document.createElement("button"); 
        btn.setAttribute("id","likebtn"+[i]);
        btn.innerHTML="like";
        likeCount.appendChild(btn);
        var spn = document.createElement("span");
        spn.setAttribute("id","likes"+[i]);
        likeCount.appendChild(spn);
    

}


    
}


function getClassByRate(vote){

if(vote>=8){
    return"green";
}else if (vote>=5){
    return "orange";
}else{
    return "red";
}

}




for(let i= 0;i<allMovies.length;i++){


var btn=document.getElementById("likebtn"+[i]);

   btn.addEventListener("click",()=>{
    punti =document.getElementById("likebtn"+[i]).value; 
    punti++;
    document.getElementById("likebtn"+[i]).value=punti;
    document.getElementById("likes"+[i]).innerHTML=punti;

    });


}

// const header = document.createElement("header");
// header.setAttribute("id" , "header");
// document.body.appendChild(header);


const header_form=document.createElement("form");
header_form.setAttribute("id","form");
document.header.appendChild(header_form);


 
// function clicca()

{/* form.addEventListener("submit",moviesSearch()


{/* // (e)=>{
//     e.preventDefault();
//     const searchTerm=search.value;
//     if(searchTerm){
//         moviesSearch(searchTerm);
//         search.value="";
//     }
// } */}









 {/* function moviesSearch(input_value){
    
    // input.toString();
   for(let i=0; i<allMovies.length;i++){
       var str=allMovies[i].title;
       console.log(str);
       var n=str.search(input_value);

    console.log(allMovies[i].title);
    if(m==allMovies[i].title){
      showMovies(allMovies[i]);
    }
}

} */}

// var h1 = document.createElement('h1');
// var content = document.createTextNode('text');
// h1.appendChild(content);
// document.body.appendChild(h1);