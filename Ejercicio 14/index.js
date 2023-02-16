const boton = document.querySelector('#btn');

boton.addEventListener('click', () => {
    alert('Clic en el boton');
})

$(() =>{

    $('#btn').click(() =>{
        console.log('Hola, estoy utilizando jQuery');
    })

})