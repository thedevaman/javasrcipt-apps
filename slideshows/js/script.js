var index = 0
const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
]

const preview = document.getElementById("preview")
const counter = document.getElementById("counter")
counter.innerHTML  = `${index+1}/${images.length}`

const next = () =>{
 if(images.length-1 > index)
 {
    index = index + 1
    const path = images[index]
    preview.style.backgroundImage = `url('${path}')`
}else{
    index = 0
    const path = images[index]
    preview.style.backgroundImage = `url('${path}')`
}

counter.innerHTML  = `${index+1}/${images.length}`

}

const prev = ()=>{
if(index > 0)
{
    index = index - 1
    const path = images[index]
     preview.style.backgroundImage = `url('${path}')`
}else{
    index = images.length-1
    const path = images[index]
     preview.style.backgroundImage = `url('${path}')`
}
counter.innerHTML  = `${index+1}/${images.length}`

}

setInterval(()=>(
    next()
),3000)