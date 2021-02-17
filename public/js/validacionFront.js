let qs = function(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {
    let form = qs('#createForm')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        let inputTitle = qs('#title')
            inputRating = qs('#rating')
            inputAwards = qs('#awards')
            inputLength = qs('#length')

        let errorTitle = qs('#errorTitle')
            errorRating = qs('#errorRating')
            errorAwards = qs('#errorAwards')
            errorLength = qs('#errorLength')
        
        let regexOnlyLetters = /^[A-Za-z]+$/;
        
        let errores = {}

        // console.log("La REGEX ES ", regexOnlyLetters.test(inputTitle.value))

        // VALIDACION TITLE

        if(inputTitle.value.length == 0) {
            errores.title = "Este campo es obligatorio"
            errorTitle.innerText = errores.title
        } else if(inputTitle.value.length < 2) {
            errores.title = "Mínimo 2 caracteres..."
            errorTitle.innerText = errores.title
        } else if(!regexOnlyLetters.test(inputTitle.value)) {
            errores.title = "Solo letras..."
            errorTitle.innerText = errores.title
        }
        else {
            delete errores.title
            errorTitle.innerText = ""
        }

        // VALIDACION RATING

        if(inputRating.value.length == 0) {
            errores.rating = "Este campo es obligatorio"
            errorRating.innerText = errores.rating
        } else {
            delete errores.rating
            errorRating.innerText = ""
        }
        // ENVIAMOS EL FORMULARIO???

        console.log(errores)
        
        if(Object.keys(errores).length == 0) {
            form.submit()
        }
        
    })
})