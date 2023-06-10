let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let info = document.getElementById("info")
let limit = document.getElementById("limit")
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>`~"
    
    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = ''
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
} 

function getPassword() {
    if (passwordLength.value > 100) {
        alert("Jumlah Tidak Boleh Melebihi 100")
        return
    } else if (passwordLength.value == 0 || passwordLength.value <= 0) {
        alert("Jumlah Tidak Valid")
        return
    }
    if (passwordLength.value != '') {
        const newPassword = generatePassword(passwordLength.value)
        password.value = newPassword
        info.textContent = "Save your password !!!"
        document.title = 'Password Generated :)'
        setTimeout(() => {
            document.title = 'Password Generator'
        }, 5000)
        setTimeout(() => {
            info.textContent = ''
        }, 10000)
    } else {
        alert("Masukkan jumlah !")
    }
}

function savePassword() {
    let dataPassword = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya: ${dataPassword}`))
    saveButton.setAttribute('download', 'MyPasswordGenerator.txt')

}
