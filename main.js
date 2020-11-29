function literals1(){
    let moviePoster = "anyURL"
    let movieTitle = "My Movie Title";
    var li = 
`<li>
<div class="row">
<div class="col-md-4">
<img src="${moviePoster}" height="250" alt="" />
</div><div class="col-md-8">
<h2>${movieTitle}</h2>
</div>
</div>
</li>`;
    console.log(li);
}