window.onload = ()=>{

const user = localStorage.getItem('isLogin')
if(!user)
{
   location.replace('login.html')

}
}
const logout = ()=>{
    localStorage.removeItem('isLogin')
    location.replace('login.html')
}

const uploadImage = ()=>{

    const input = document.getElementById('file-input') 
    const picture = document.getElementById('picture')
    const file = input.files[0]
   const url = URL.createObjectURL(file)
   picture.src = url
   

}