
const openModal = e => {

    const templateOne = document.getElementById('template-one'),
    templateTwo = document.getElementById('template-two'),
    templateThree = document.getElementById('template-three')

    const newTemplateOne = templateOne.content.cloneNode(true),
    newTemplateTwo = templateTwo.content.cloneNode(true),
    newTemplateThree = templateThree.content.cloneNode(true)

    e.stopPropagation()
    const id = e.target.id

    if (e.target.id) {
        document.querySelector('.modal').style.opacity = 1
        document.querySelector('.modal').style.visibility = 'visible'
    }

    switch (id) {
        case 'button-one':
            document.getElementById('modal').appendChild(newTemplateOne)
        break;

        case 'button-two':
            document.getElementById('modal').appendChild(newTemplateTwo)
        break;

        case 'button-three':
            document.getElementById('modal').appendChild(newTemplateThree)
        break;
    }

}

document.querySelector('.container').addEventListener('click', openModal)

document.querySelector('.modal').addEventListener('click', e => {
    document.querySelector('.template-content').remove()
    document.querySelector('.modal').style.visibility = 'hidden'
})











