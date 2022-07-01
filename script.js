const bg = document.querySelector('#btn')

bg.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    document.querySelector('.group').classList.toggle('dark')
    document.querySelector('.group-two').classList.toggle('dark')
})