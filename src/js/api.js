
function searchFor(){
    var value =  document.getElementById('searchfor').value;
    consumeapi(value);
    return false;
 }

 function consumeapi(value){
    fetch(`https://www.omdbapi.com/?s=${value}&Type=series&apikey=3a181e1a`)
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      console.log(res.Search[0].Title);
      addtvserie(res.Search);
    });
 }


  function addtvserie(data){
    var card = data.map(function(element,index){
        return (`<div class='col-sm'><div class='card' style='width: 18rem;'> <img src='${element.Poster}' class='card-img-top' alt=''...'> <div class='card-body'> <h5 class='card-title'>${element.Title}</h5>  <p class='card-text'>${element.Year}</p>    </div>   </div></div>`);
    })
    document.getElementById('tvseries').innerHTML = card;  
  }