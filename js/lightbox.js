const imagens = document.querySelectorAll('.img-galeria')
const imagensLight = document.querySelector('.agregar-imagem')
const containerLight = document.querySelector('.image-light')
const hamburguer1 = document.querySelector('.hamburguer');

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        aparecerImagem(imagem.getAttribute('src'))
    })
})

containerLight.addEventListener('click', (e) => {
    if (e.target !== imagensLight) {
        containerLight.classList.toggle('show')
        imagensLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})


const aparecerImagem = (imagem) => {
    imagensLight.src = imagem;
    containerLight.classList.toggle('show')
    imagensLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}