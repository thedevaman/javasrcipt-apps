
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

    const a = document.createElement('a')
    a.href = "images/ads.png"
    a.download = "ads.png"
    a.click()
    a.remove()

}