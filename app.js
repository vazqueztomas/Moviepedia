// const d = document;
// const $buttonAdd = d.getElementById('add-btn');
// const $buttonClear = d.getElementById('clear-btn');
// const $container = d.getElementById('container');

// function agregaReview(){
//     const input = d.getElementById('rev-text');
//     const h1 = d.createElement('h1')

//     h1.innerHTML = input.value
    
//     $container.appendChild(h1)
    
// }


// function clearReview(){
//     $container.removeChild($container.lastChild)
// }

// $buttonAdd.addEventListener('click', () => {
//     agregaReview();
// })

// $buttonClear.addEventListener('click', () => {
//     clearReview();
// })
const d = document;

const $buttonOpenForm = d.getElementById('open-form');
const $buttonAdd = d.getElementById('add-movie-btn')
const $container_movies = d.getElementById('container-movies');
const $container_form = d.getElementById('form')

$buttonOpenForm.addEventListener('click', () => {
    $container_form.classList.toggle('toggle')
})


$buttonAdd.addEventListener('click', () => {
    const name = d.getElementById('name-text');
    const rev = d.getElementById('rev-text');
    const newDiv = d.createElement('div');
    const movieTitle = d.createElement('h2');
    const movieRev = d.createElement('p');


    movieTitle.innerHTML = name.value
    movieRev.innerHTML = rev.value    
     
    // newDiv.style.classList('div-movies');
    newDiv.appendChild(movieTitle);
    newDiv.appendChild(movieRev);
    $container_movies.appendChild(newDiv);

    name.value = ''
    rev.value = ''



})


