menu  = document.querySelector('.menu')
dropdown = document.querySelector('.navlist1')

function drop(){
    if(dropdown.style.height < '1'){
        dropdown.style.height = '100vh'
        dropdown.style.display = 'flex'
    }
    else{
        dropdown.style.height = '0'
    }
}