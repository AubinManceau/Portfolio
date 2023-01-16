let navigationDrawer = document.getElementById('navigation_drawer')
let overlay = document.getElementById('overlay')
let btnOpen = document.getElementById('btn_open_drawer')
let btnClose = document.getElementById('btn_close_drawer')
let body = document.body

function openDrawer(){
    navigationDrawer.classList.add('open')
    overlay.classList.remove('hidden')
    overlay.classList.add('visible')
}

function closeDrawer(){
    navigationDrawer.classList.remove('open')
    overlay.classList.remove('visible')
    setTimeout(() => {
        overlay.classList.add('hidden')
    }, 300);
}

btnOpen.addEventListener('click', openDrawer)
btnClose.addEventListener('click', closeDrawer)
overlay.addEventListener('click', closeDrawer)