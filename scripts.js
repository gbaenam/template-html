modal = document.getElementById('modal')

const openModal = e => {
    e.stopPropagation()
    const id = e.target.id

    if (e.target.id) {
        modal.style.opacity = 1
        modal.style.visibility = 'visible'
    }

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
}

document.querySelector('.container').addEventListener('click', openModal)

modal.addEventListener('click', e => {
    modal.style.visibility = 'hidden'
    document.querySelector('.template-content').remove()
})


