var cropper = null
window.onload = ()=>{

const user = localStorage.getItem('session')
if(!user)
{
   location.replace('login.html')
}

showUserinfo()

}
const logout = ()=>{
    localStorage.removeItem('session')
    location.replace('login.html')
}

const uploadImage = ()=>{

    const input = document.getElementById('file-input') 
    const picture = document.getElementById('picture')
    const file = input.files[0]
   const url = URL.createObjectURL(file)
   picture.src = url
   

}


const loadCropper = ()=>{
  
   const dowloadBtn = document.getElementById('download-btn')
   if(!cropper)
   {
     const picture = document.getElementById('picture')
     
     dowloadBtn.classList.remove('hidden')
     cropper = new Cropper(picture,{
      // aspectRatio: 1,
      viewMode: 1
   })
   }else{
      cropper.destroy()
       dowloadBtn.classList.add('hidden')
      cropper = null
   }
  
}


const downloadImg = () =>{
   const canvas = cropper.getCroppedCanvas()
   const imageString = canvas.toDataURL('image/png')
   const a = document.createElement('a')
   a.href = imageString
   a.download = "sample.png"
   a.click()
   a.remove()
}



const showUserinfo  = ()=>{

   const session = localStorage.getItem('session')
   const prifile_picture = localStorage.getItem('prifile-picture')
   const user = JSON.parse(session)
   const user_name = document.getElementById('user-name')
   const user_email = document.getElementById('user-email')
   user_email.innerHTML = user.email
   user_name.innerHTML = user.fullname
   if(prifile_picture)
   {
      const profile_pic = document.getElementById('profile-pic')
      profile_pic.src = prifile_picture
   }


}

const uploadProfileImg = () =>{
   const input = document.getElementById('profile-pic-input')
   const file = input.files[0]
   // const url = URL.createObjectURL(file)
   const profile_pic = document.getElementById('profile-pic')
   // profile_pic.src = url

   const fileReader = new FileReader()
   fileReader.readAsDataURL(file)
   fileReader.onload = (e)=>{
    const fileString = e.target.result
    profile_pic.src = fileString
    localStorage.setItem('prifile-picture',fileString)
   //  console.log(fileString)
   }
}