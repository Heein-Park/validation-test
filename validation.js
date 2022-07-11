const id_space = document.body.querySelector('#ID')
const pw_space = document.body.querySelector('#PW')
const pwConf_space = document.body.querySelector('#PW_Con')
const button_space = document.body.querySelector('#Confirm')
const forHidden = document.body.querySelector('#Result')

//addEventListner
//버튼부터
//클릭이벤트에 반응

function validate()
{
    if(pw_space.value == pwConf_space.value)
        forHidden.textContent = "일치합니다."

    else
        forHidden.textContent = "일치하지 않습니다."

    forHidden.classList.remove('hidden')
}

button_space.addEventListener("click", validate)


