const DECORATORS = ['M', 'H', 'I', 'V', 'X']
class Pulsera {

    constructor(element) {
        this.element = element
        console.log(this.element)
        this.legend = this.element.querySelector('.legend')
        this.decorators = element.querySelectorAll('.decorate')
    }

    setApparence(apparence) {
        this.legend.innerHTML = apparence.legend
        this.legend.style.color = apparence.color
        this.element.style.backgroundColor = apparence.background
        this.decorators[0].innerHTML = apparence.decorators
        this.decorators[0].style.color = apparence.color
        this.decorators[1].innerHTML = apparence.decorators
        this.decorators[1].style.color = apparence.color
    }

}

class Apparence {

    constructor(legend, background, color, decorators) {
        this.legend = legend
        this.background = background
        this.color = color
        this.decorators = decorators
    }

}

class Editor {

    constructor(form) {
        this.form = form
        this.legendEdit = form.querySelector('#legendEdit')
        this.backgroundEdit = form.querySelector('#backgroundEdit')
        this.colorEdit = form.querySelector('#colorEdit')
        this.decorators = form.querySelector('#decoratorsEdit')
    }

}

let pulsera = new Pulsera(document.getElementById('pulsera')),
    editor = new Editor(document.getElementById('editor'))

editor.form.addEventListener('input', () => {
    let legend = editor.legendEdit.value,
        background = editor.backgroundEdit.value,
        decorators = DECORATORS[editor.decorators.value],
        color = editor.colorEdit.value,
        apparence = new Apparence(legend, background, color, decorators)
    console.log(apparence)
    pulsera.setApparence(apparence)
})
console.log(pulsera)
console.log(editor)