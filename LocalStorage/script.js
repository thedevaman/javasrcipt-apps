const store = (e) =>{
    e.preventDefault()
    const form = e.target
    const key = document.getElementById("key").value
    const value = document.getElementById("value").value
    localStorage.setItem(key,value)
    form.reset()
    Swal.fire({
  title: "Submittted!",
  icon: "success",
  showConfirmButton:false,
  toast:true,
  position:"top-end"
});
}