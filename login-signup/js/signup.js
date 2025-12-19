const createuser = (e) => {
e.preventDefault()
validation("fullname","fullname-error")
validation("email","email-error")
validation("password","password-error")
const fullname = document.getElementById('fullname').value.trim()
const email = document.getElementById('email').value.trim()
const password = document.getElementById('password').value.trim()
const payload =JSON.stringify({
  fullname:fullname, // fullname
  email:email,// email
  password:password, //password

})
const key = Date.now()
localStorage.setItem(key,payload)


}

const validation = (inputId, errorId) =>{
const input = document.getElementById(inputId)
const lable = document.getElementById(errorId)
const value = input.value.trim()
if(value.length == 0)
{
  lable.classList.remove("hidden")
  lable.innerHTML = `${input.name} *is required`
  throw new Error(`${input.name} *is required`)
}else{
   lable.classList.add("hidden")
  lable.innerHTML = `${input.name} *is required`
}

}