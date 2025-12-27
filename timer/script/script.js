
// settimeout used for delay (its run after given time only once)
// setTimeout(()=>{

//      Swal.fire({
//         html:`<img src="images/ads.png" alt="ads" width="100%"/>`,
//         showConfirmButton: false
//     })

// },5000)


// setInterval(()=>{
//     const dateTime = new Date()
//     const time = dateTime.toLocaleTimeString()
//     const timer = document.getElementById('timer')
//     timer.innerHTML = time
// },1000)


const download = ()=>{

   
     let s = 5
    const timer = document.getElementById('timer')
   const interval = setInterval(()=>{
     s = s-1
     timer.innerHTML = `your download will start in ${s} sec`
     if(s == 0)
     {
        clearInterval(interval)
         const a = document.createElement('a')
         a.href = "images/ads.png"
         a.download = "ads.png"
         a.click()
         a.remove()
         timer.innerHTML = ''
     }
    },1000)
    timer.innerHTML = "your download will start in 05 sec"

}

const login = (e) => {
e.preventDefault()
const username  = document.getElementById('email').value.trim()
const password  = document.getElementById('password').value.trim()

if(username == "test@gmail.com" && password == "123456")
{
 new Swal({
        icon : 'success',
        title: 'Login Success!',
        text : "Please wait for redirection!"
    })   

    setTimeout(()=>{
        location.href = 'https://www.google.com/'
    },5000)

}else{
    new Swal({
        icon : 'error',
        title: 'Login Failed!'
    })
}


}