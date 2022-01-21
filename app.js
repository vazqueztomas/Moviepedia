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
const $movieName = d.getElementById('name-text');
const $revText = d.getElementById('rev-text');


$buttonOpenForm.addEventListener('click', () => {
    $container_form.classList.toggle('toggle')
})

$buttonAdd.addEventListener('click', () => {    
    // validate name and rev text is complete
    if ($movieName.value.length == 0 || $revText.value.length == 0) {
        alert('Te falta completar algun formulario')
    } else {
        addMovie();    
    }
})

function addMovie(){
    let newDiv = d.createElement('div');
    let movieTitle = d.createElement('h2');
    let movieRev = d.createElement('p');

    // button clear movie
    const $buttonClear = d.createElement('button');    
    $buttonClear.innerHTML = '-'
    $buttonClear.classList= 'remove-btn'
    $buttonClear.addEventListener ('click', () => {
        removeLastMovie();
    })


    movieTitle.innerHTML = $movieName.value
    movieRev.innerHTML = $revText.value    
     
    newDiv.appendChild(movieTitle);
    newDiv.appendChild(movieRev);
    newDiv.appendChild($buttonClear)
    $container_movies.appendChild(newDiv);

    // delete values from inputs.
    $movieName.value = ''
    $revText.value = ''
}

// this function is for buttons to clear movies 
function removeLastMovie(){
    $container_movies.removeChild($container_movies.lastChild)
}




