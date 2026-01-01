const toggleDrawer = ()=>{

const drawer = document.getElementById('drawer')
const width = drawer.style.width
if(width == '0px')
{
    drawer.style.width = '720px'
}else{
    drawer.style.width = '0px'
}

}