const id_space = document.body.querySelector('#ID')
const pw_space = document.body.querySelector('#PW')
const pwConf_space = document.body.querySelector('#PW_Con')
const button_space = document.body.querySelector('#Confirm')

//addEventListner
//버튼부터
//클릭이벤트에 반응

function validate()
{
    if(pw_space.value == pwConf_space.value)
    {
        console.log(`ID:${id_space.value} PW:${pw_space.value}`)
    }
    else
    {
        window.alert("비밀번호가 일치하지 않습니다")
    }
}

button_space.addEventListener("click", validate)


