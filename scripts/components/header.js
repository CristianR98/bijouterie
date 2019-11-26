let body = document.body
let header = document.createElement('header')
let banner = new Image()
let container = document.createElement('div')

banner.src = './img/simple-house-01.jpg'

container.classList.add('header-banner')
banner.classList.add('banner')
header.classList.add('main-header')

header.innerHTML = `<h1 class="page-title">
    <a class="page-title" href="index.html">
        <img class="main-image" src="./img/simple-house-logo.png">
        <span>Bijoutery Lavalle</span>
    </a>
</h1>
<nav class="main-nav">
<ul class="links-container">
    <li class="list-item"><a href="" class="link">Productos</a></li>
    <li class="list-item"><a href="" class="link">Contacto</a></li>
    <li class="list-item"><a href="" class="link">Sobre mi</a></li>
</ul>
</nav>`

container.appendChild(banner)
container.appendChild(header)

body.appendChild(container)


let initial = -115
let scrollYInitial = scrollY

document.addEventListener('scroll', evt => {
    console.log(evt)
    if (scrollY < scrollYInitial) {
        initial -= scrollYInitial - scrollY
    } else {
        initial -= scrollYInitial - scrollY
    }

    console.log(initial)

    banner.style.top = `${initial}px`

    scrollYInitial = scrollY

})