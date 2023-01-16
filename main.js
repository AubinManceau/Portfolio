let navigationDrawer = document.getElementById('navigation_drawer')
let btnOpen = document.getElementById('btn_open_drawer')
let btnClose = document.getElementById('btn_close_drawer')
let body = document.body

function openDrawer(){
    navigationDrawer.classList.add('open')
}

function closeDrawer(){
    navigationDrawer.classList.remove('open')
}

btnOpen.addEventListener('click', openDrawer)
btnClose.addEventListener('click', closeDrawer)