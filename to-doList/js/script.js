window.onload = ()=>{
  fetchTasks()
}

function openDialog()
{
     new Swal({
        html:`<div class="text-left space-y-4">
                 <h1 class="text-xl font-semibold text-black">Add New Task</h1>
                 <form onsubmit="storetask(event)">
                   <input id="task" type="text" class="w-full rounded px-3 py-2 border border-gray-100" placeholder = Enter Task!"/>
                   <button class="bg-indigo-600 px-6 py-2 rounded text-white mt-4">Add</button>
                 </form>
              </div>`,
        showConfirmButton:false,
    })
}

function storetask(event)
{
  event.preventDefault()
  const taskInput = document.getElementById("task")
  const task = taskInput.value.trim()
  const key = Date.now()
  localStorage.setItem(key,task)
  new Swal({
    icon:"success",
    title:"Task Created"
  })
}

const fetchTasks = ()=>{
//const allDataLength = localStorage.length  //data count in localstorage
const keys = Object.keys(localStorage)
for(var key of keys){
  const task = localStorage.getItem(key)
console.log(task)
}
// console.log(keys)
}