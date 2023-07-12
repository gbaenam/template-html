modal = document.getElementById('modal')

document.querySelector('.container').addEventListener('click', e => {

    e.stopPropagation()
    const id = e.target.id
    if (e.target.id) modal.setAttribute('style', 'opacity: 1; visibility: visible')

    switch (id) {
        case 'button-one':
            modal.appendChild(document.getElementById('template-1').content.cloneNode(true))
        break;

        case 'button-two':
            modal.appendChild(document.getElementById('template-2').content.cloneNode(true))
        break;

        case 'button-three':
            modal.appendChild(document.getElementById('template-3').content.cloneNode(true))
        break;
    }
})

modal.addEventListener('click', e => {
    document.querySelector('.template-content').remove()
    modal.setAttribute('style', 'opacity: 0; visibility: hidden' )
})


