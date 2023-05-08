let title1=document.querySelector(".first");
let title2=document.querySelector(".second");
let title3=document.querySelector(".third");
let title4=document.querySelector(".fourth");
let title5=document.querySelector(".fifth");
let title6=document.querySelector(".sixth");
let title7=document.querySelector(".seventh");
let title8=document.querySelector(".eightth");
let title9=document.querySelector(".nineth");
let title10=document.querySelector(".tenth");
let title11=document.querySelector(".levelth");
let title12=document.querySelector(".twelth");


let countent1=document.querySelector("#content-1");
let countent2=document.querySelector("#content-2");
let countent3=document.querySelector("#content-3");
let countent4=document.querySelector("#content-4");
let countent5=document.querySelector("#content-5");
let countent6=document.querySelector("#content-6");
let countent7=document.querySelector("#content-7");
let countent8=document.querySelector("#content-8");
let countent9=document.querySelector("#content-9");
let countent10=document.querySelector("#content-10");
let countent11=document.querySelector("#content-11");
let countent12=document.querySelector("#content-12");

console.log(title1)
fetch("https://api.artic.edu/api/v1/artworks")
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
    let content=data.data;
    console.log(content);
    
   for(var i=0;i<content.length;i++){
    console.log(content[0]);
    console.log(content[0].title);
    console.log(content[1].title);
       title1.innerHTML += content[0].title;
       title2.innerHTML += content[1].title;
       title3.innerHTML += content[2].title;
       title4.innerHTML += content[3].title;
       title5.innerHTML += content[4].title;
       title6.innerHTML += content[5].title;
       title7.innerHTML += content[6].title;
       title8.innerHTML += content[7].title;
       title9.innerHTML += content[8].title;
       title10.innerHTML += content[9].title;
       title11.innerHTML += content[10].title;
       title12.innerHTML += content[11].title;

       countent1.innerHTML +=`
       <h2>1) ${content[0].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[0].artist_title}</div>
       <h4>History:</h4> 
       <div class ="history"> ${content[0].publication_history
       }</div> 
       `
       countent2.innerHTML +=`
       <h2>2) ${content[1].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[1].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[1].publication_history
       }</div> 
       `
       countent3.innerHTML +=`
       <h2>3) ${content[2].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[2].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[2].publication_history
       }</div> 
       `
       countent4.innerHTML +=`
       <h2>4) ${content[3].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[3].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[3].publication_history
       }</div> 
       `
       countent5.innerHTML +=`
       <h2>5) ${content[4].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[4].artist_title}</div>
       <h4>History:</h4> 
       <div class ="history"> ${content[4].publication_history
       }</div> 
       `
       countent6.innerHTML +=`
       <h2>6) ${content[5].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[5].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[5].publication_history
       }</div> 
       `
       countent7.innerHTML +=`
       <h2>7) ${content[6].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[6].artist_title}</div>
       <h4>History:</h4> 
       <div class ="history"> ${content[6].publication_history
       }</div> 
       `
       countent8.innerHTML +=`
       <h2>8) ${content[7].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[7].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[7].publication_history
       }</div> 
       `
       countent9.innerHTML +=`
       <h2>9) ${content[8].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[8].artist_title}</div>
       <h4>History:</h4> 
       <div class ="history"> ${content[8].publication_history
       }</div> 
       `
       countent10.innerHTML +=`
       <h2>10) ${content[9].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[9].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[9].publication_history
       }</div> 
       `
       countent11.innerHTML +=`
       <h2>11) ${content[10].title}</h2>
       <h4>Artist:</h4> 
       <div class="artist">${content[10].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[10].publication_history
       }</div> 
       `
       countent12.innerHTML +=`
       <h2>12) ${content[11].title}</h2>
       <h4>Artist:</h4>
       <div class="artist"> ${content[11].artist_title}</div> 
       <h4>History:</h4>
       <div class ="history"> ${content[11].publication_history
       }</div> 
       `
     
    break;
   }
         
         
            
         
        
  
        






})
.catch((err)=>{console.log(err)})