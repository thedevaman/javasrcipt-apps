const createuser = (e) => {
e.preventDefault()
alert()
}

const validation = (inputId, errorId) =>{
const input = document.getElementById(inputId)
const lable = document.getElementById(errorId)
const value = input.value.trim()
if(value.length == 0)
{
  lable.classList.remove("hidden")
  lable.innerHTML = `${input.name} *is required`
}

}