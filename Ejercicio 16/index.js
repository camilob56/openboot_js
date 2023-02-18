const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');
const papeleraR = document.querySelectorAll('#papelera');

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event => {
        console.log('Arrastrando el parrafo' + parrafo.innerText);
        parrafo.classList.add('dragging')
        event.dataTransfer.setData('id', parrafo.id)
        const imagen = document.querySelector('.imgFantasma');
        event.dataTransfer.setDragImage(imagen, 0, 0)

    })

    
    parrafo.addEventListener('dragend', () => {
        parrafo.classList.remove('dragging')
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'copy';
    })


    seccion.addEventListener('drop', event => {
        console.log('Drop');
        const idParrafo = event.dataTransfer.getData('id');
        const parrafo = document.getElementById(idParrafo);
        seccion.appendChild(parrafo);
    })
})

papeleraR.forEach(papelera => {
    papelera.addEventListener('dragover', event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'copy';

    })

    papelera.addEventListener('drop', event => {
        console.log('Drop');
        const idParrafo = event.dataTransfer.getData('id');
        const parrafo = document.getElementById(idParrafo);
        papelera.appendChild(parrafo);
    })

})