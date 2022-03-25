console.log("NEWS API");

//Initialize the news api parameters
let source = "bbc-news";
let apiKey = "6054210f15a0453191cc2d0fd623941d";

//grab news container
let newsAccordian = document.getElementById("newsAccordian");
//create ajax get request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

// xhr.getResponseHeader('Content-type', 'application/json');
// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    console.log(articles);
    let newsHTML = "";
    articles.forEach(function(element,index) {
      
      let news = `<div class="card">
        <p>
          
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapseExample">
          ${element["title"]}
          </button>
        </p>
        <div class="collapse" id="collapse${index}">
          <div class="card card-body">
            ${element["content"]}. <a href=" ${element["url"]}" target="_blank" >Read more here. </a>
          </div>
        </div>
      </div>`;

    newsHTML += news;
      
    }); 
        
    newsAccordian.innerHTML= newsHTML;
  }
   
  else {
    console.log("Some error occured");
  }
};

xhr.send();
