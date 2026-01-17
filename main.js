
let button = document.getElementById('button');

button.addEventListener('click', function(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    localStorage.setItem("Title", title);
    
});


    

