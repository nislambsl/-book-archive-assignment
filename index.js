const searchBook = () => {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;
  // Clear Search Input
  searchInput.value = ''
  const url = ` https://openlibrary.org/search.json?q=${searchText}`;
  
  fetch(url)
  .then(res => res.json())
  .then(data => displaySeach(data.docs))

}

const displaySeach = docs => {
 const output = document.getElementById('output');
 docs.forEach(doc => {
     
     const div = document.createElement('div');
     div.classList.add('col');
     const imgUrl = ` https://covers.openlibrary.org/b/id/${doc.cover_i}-S.jpg`

     div.innerHTML = `  
     <div class="card">
     <img class="img-fluid img-thumbnail" src="${imgUrl}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${doc.title}</h5>
     <p>${doc.author_name}</p>
     <p>${doc.publisher}</p>
     <p>${doc.first_publish_year}</p>
    
   
     </div>
   </div>
   `;
   output.appendChild(div);


 });
}