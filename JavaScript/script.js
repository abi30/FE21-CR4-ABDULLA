



const header_form=document.createElement("form");
header_form.setAttribute("id","form");
document.getElementById("myheader").appendChild(header_form);

const input_search= document.createElement("input");
input_search.setAttribute("id" ,"search");
input_search.classList.add("search");
input_search.setAttribute("placeholder" ,"search");
document.getElementById("form").appendChild(input_search);




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
        <img  src="${poster}" 
        alt="${title}" onclick="movieInfo()">
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

function movieInfo() {
    for(let i= 0; i<allMovies.length;i++){


      
             document.getElementsByClassName("movie")[i] .addEventListener("click",()=>{
                // var big_div=document.
                var big_img=document.createElement("img");
                big_img.setAttribute("id","dig_img"+[i]);
                big_img.src=allMovies[i].poster;
                console.log(allMovies[i].poster);
                var new_div=document.getElementsByClassName("movie")[i];
                new_div.setAttribute("style" ,"width:150%;");
                new_div.appendChild(big_img);
                // var p=document.createElement("p");
                // var q=createTextNode(allMovies[i].storyline);
                // p.appendChild(q);
                // document.querySelector("#myheader").appendChild(p);

                // poster[i].style.display="flex";
                // cardContainers[i].setAttribute("style","width:100%;");
                // cardMinis[i].style.display="none";
            });
            
            // cardMaxis[i].addEventListener("click",()=>{
            //     cardMinis[i].style.display="block";
            //     cardContainers[i].setAttribute("style",  "width: auto;");
            //     cardMaxis[i].style.display="none";
            // });
            
            
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



// var foo= document.getElementsByTagName("footer");
// foo.setAttribute("id", "foo");
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
