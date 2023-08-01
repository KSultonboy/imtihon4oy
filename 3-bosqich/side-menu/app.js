const seachBtn = document.querySelector('.search__btn')
const seachMenu = document.querySelector('.search__menu')
const runMenu = document.querySelector('.run__menu')
const seachClose = document.querySelector('.close')
const runClose = document.querySelector('.closee')
const Run = document.querySelector('.search__run')


seachBtn.addEventListener('click', function(){
    seachMenu.classList.add('active')
})

seachClose.addEventListener('click', function(){
    seachMenu.classList.remove('active')
})


Run.addEventListener('click', function(){
    runMenu.classList.add('active')
})

runClose.addEventListener('click', function(){
    runMenu.classList.remove('active')
})