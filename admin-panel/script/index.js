const toggleSideBar = () =>{
    const sidebar = document.getElementById('sidebar')
    const section = document.getElementById('section')
    const navbar = document.getElementById('navbar')
    const width = sidebar.style.width

    if(width === "280px")
    {
        sidebar.style.width = "0px"
        section.style.width = "100%"
        navbar.style.width = "100%"
        section.style.marginLeft = "0px"
        navbar.style.marginLeft = "0px"
    }else{
        sidebar.style.width = "280px"
        section.style.width = "calc(100% - 280px)"
        navbar.style.width = "calc(100% - 280px)"
        section.style.marginLeft = "280px"
        navbar.style.marginLeft = "280px"
    }
    
}