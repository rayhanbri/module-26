console.log('event handler');

// number 1

document.getElementById('btn-update-text').addEventListener('click', function () {
    // console.log('clicked button')
    const pageTitleElement = document.getElementById('page-title')
    //  console.log(pageTitleElement)
    pageTitleElement.innerText = 'updated with javascript'
})


// Number 2 start 
document.getElementById('btn-login').addEventListener('click', function () {
    const loginTitle = document.getElementById('login-title')
    loginTitle.innerText = "user log in successfully"
})


// number 3 start 
document.getElementById('btn-update').addEventListener('click', function () {
    // console.log('button clicked');
    const inputName = document.getElementById('input')
    const name = inputName.value
    // console.log(name)
    let inputP = document.getElementById('input-p')
    inputP.innerText = name;
    console.log(inputP)

})