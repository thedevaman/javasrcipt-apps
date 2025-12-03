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