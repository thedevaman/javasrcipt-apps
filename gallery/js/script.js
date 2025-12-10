function demo(){
    const title = document.getElementById('title')
    title.classList.add("demoo")
}

function updatedemo()
{
     const title = document.getElementById('title')
    title.className = "test"
}
function removedemo()
{
    const title = document.getElementById('title')
    title.classList.remove('saurav')
}

function addEffect(animation)
{
    const picture = document.getElementById('picture')
    picture.className = animation
   
}

function removeEffect()
{
    const picture = document.getElementById('picture')
    picture.className = ""
}

function getWish()
{
    const currentDate = new Date();
    const hour = currentDate.getHours()

    if(hour >= 4 && hour < 12)
    {
      document.getElementById('wish').innerHTML = "Good Morning";
    }else if(hour >= 12 && hour <=16)
    {
       document.getElementById('wish').innerHTML = "Good Afternoon";
    }else if(hour > 16 && hour <= 20)
    {
      document.getElementById('wish').innerHTML = "Good Evening";
    }
    else{
     document.getElementById('wish').innerHTML = "Good Night";
    }

}


const showPassword = () =>{

    const input = document.getElementById('input')
    const inputType = input.type

    if(inputType == "password")
    {
        input.type = "text" 
    }else{
        input.type = "password"
    }

}

