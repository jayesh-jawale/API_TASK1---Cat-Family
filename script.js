let image = document.getElementById('image');
let button = document.getElementById('button');
let table = document.getElementById('table');

let newRow = document.createElement('tr');
let id = document.createElement('td');
let height = document.createElement('td');
let width = document.createElement('td');

button.addEventListener('click', breeds)

function breeds(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        image.src = data[0].url;
        image.style.height = '300px';
        image.style.width = '300px';

        id.innerHTML = `${data[0].id}`;
        height.innerHTML = `${data[0].height}`;
        width.innerHTML = `${data[0].width}`;

        //Appending tr to td's
        newRow.appendChild(id);
        newRow.appendChild(height);
        newRow.appendChild(width);

        //Then appending main table to tr
        table.appendChild(newRow);
    })
    .catch((err) => {
        console.log(err, 'Unable to fetch data');
    })
}

breeds();