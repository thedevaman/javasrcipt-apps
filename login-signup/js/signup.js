window.onload =()=>{

  const user = localStorage.getItem('session')
  if(user)
  {
    location.replace('profile.html')
  }

}

const createuser = (e) => {
e.preventDefault()
const form = e.target
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
const key = email
localStorage.setItem(key,payload)
form.reset()
swal({
  icon:'success',
  title:'Signup success'
})


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



const togglePassword = ()=>{

const inputPassword = document.getElementById('password')
const type =  inputPassword.type
const password_icon = document.getElementById('password-icon')
if(type === "password")
{
  inputPassword.type = 'text'
  password_icon.className = "ri-eye-off-line"
}else{
  inputPassword.type = "password"
  password_icon.className = "ri-eye-line"
}
}