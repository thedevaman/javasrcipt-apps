window.onload =()=>{

  const user = localStorage.getItem('session')
  if(user)
  {
    location.replace('profile.html')
  }

}

const login = (e)=>{
    e.preventDefault();
    validation("email","email-error")
    validation("password","password-error")

    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()
    const emailError = document.getElementById('email-error')
    const passwordError = document.getElementById('password-error')

   const user = localStorage.getItem(email)

   if(user)
   {
   const data = JSON.parse(user)
   if(data.password === password)
   {
    localStorage.setItem('session',user)
    location.replace('profile.html');
   }else{
     passwordError.classList.remove('hidden')
     passwordError.innerHTML = "password not matched"
   }
   }else{
   emailError.classList.remove('hidden')
   emailError.innerHTML = "user doesn't exist please sign up first"
   }

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