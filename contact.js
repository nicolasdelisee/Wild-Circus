const inpUser = document.querySelector('.form_groupe:nth-child(1) input');
const inpMail = document.querySelector('.form_groupe:nth-child(2) input');
const inpPhone = document.querySelector('.form_groupe:nth-child(3) input');
const allImg = document.querySelectorAll('.icone_verif');
const allAlert = document.querySelectorAll('.message_alerte');

inpUser.addEventListener('input', (e) => {
    if (e.target.value.length >= 5) {
        allImg[0].style.display = "inline";
        allImg[0].src = "/assets/pictures/Check_green.svg"
        allAlert[0].style.display = "none";
    }
    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "/assets/pictures/Check_red.svg"
        allAlert[0].style.display = "inline";
    }
})

inpMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;
    if (e.target.value.search(regexEmail) === 0) {
        allImg[1].style.display = "inline";
        allImg[1].src = "/assets/pictures/Check_green.svg"
        allAlert[1].style.display = "none";
    }
    else if (e.target.value.search(regexEmail) === -1) {
        allImg[1].style.display = "inline";
        allImg[1].src = "/assets/pictures/Check_red.svg"
        allAlert[1].style.display = "inline";
    }

})
