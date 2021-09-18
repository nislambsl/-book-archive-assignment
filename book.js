const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // Clear Search Input
    searchInput.value = ''
    const url = ` https://openlibrary.org/search.json?q=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.docs))

}

