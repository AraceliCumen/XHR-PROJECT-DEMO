const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchForText;
let cl = console.log();

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchForText = searchField.nodeValue();
  getNews();
});

getNews = () =>{
  const articleRequest =  new XMLHttpRequest();
  articleRequest.open('GET', 'http://api.nytimes.com/svc/v2/articlesearch.json?q=${searchForText}&api-key=<65082f4668484e9484931f976feb3d4c>')
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

handleError = () =>{
  cl('Se ha presentado un error');
} 

addNews = () =>{
  const data = JSON.parse(thos.responseText);
  const response = data.response;
  cl(data);
}