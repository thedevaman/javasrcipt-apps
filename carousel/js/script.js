const slider = document.getElementById('slider')
var size = 940
var move = 0
const totalSize = size * 4

const next = () =>{
    if(move < totalSize-size)
    {
        move = move+size
        slider.style.marginLeft = `-${move}px`
    }
   
}

const prev = () =>{
if(move >= size)
{
move = move-size
slider.style.marginLeft = `-${move}px`
}
   
}