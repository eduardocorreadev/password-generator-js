const showPassowrd = document.getElementById('show')
const buttonCopy = document.getElementById('button-copy')

document.getElementById('gerar-senha').addEventListener('click', event => {
    event.preventDefault()

    let sizePassowrd = document.getElementById('size-password').value
    let errorArea = document.getElementById('error-area')

    if (sizePassowrd !== '0') {
        const carac = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:[]{}"
        let password = ""

        for (let i = 0; i < sizePassowrd; i++) {
            let randomNumber = Math.floor(Math.random() * carac.length)
            password += carac.substring(randomNumber, randomNumber + 1)
        }

        showPassowrd.value = password
        errorArea.innerHTML = ''
        buttonCopy.style.display = 'block'
    } else {
        errorArea.innerHTML = 'É necessário selecionar o tamanho da senha!'
        buttonCopy.style.display = 'none'
    }

})

function copyPassword(content) {
    content.select()
    content.setSelectionRange(0, 99999)
    document.execCommand("copy")
}