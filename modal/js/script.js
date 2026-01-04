const modal = document.getElementById('modal')
const openModal = () =>{ 
    modal.classList.remove('hidden')
}

const closeModal = () =>{ 
    modal.classList.add('hidden')
}

const toggleCollapse =()=>{
    const collapse = document.getElementById('collapse')
    const height = collapse.style.height
    if(height == "0px")
    {
    collapse.style.height = '150px'
    collapse.style.padding = '16px'
    }else{
        collapse.style.height = '0px'
        collapse.style.padding = '0px'
    }
}