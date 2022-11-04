const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('input');
const searchData = document.querySelector('.search-data');
searchBtn.onclick = () => {
    searchBox.classList.add('active');
    searchInput.classList.add('active');
    searchBtn.classList.add('active');
    closeBtn.classList.add('active');
    searchData.classList.add('active');
    if (searchInput.value != "") {
        let values = searchInput.value;
        searchData.innerHTML = "Você pesquisou por "+" <span style='font-weight: 500;'> "+ values +" </span>";
    } else {
        searchData.innerHTML = "";
    }
}

closeBtn.onclick = () => {
    searchBox.classList.remove('active');
    searchInput.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    searchData.classList.remove('active');
    searchInput.value = "";
}