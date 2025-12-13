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
  }).then(()=>{
    location.href = location.href
  })
  
}

const fetchTasks = ()=>{
//const allDataLength = localStorage.length  //data count in localstorage
const keys = Object.keys(localStorage)
const tableBody = document.getElementById("table_body")
var i = 1
for(var key of keys){
  
  const task = localStorage.getItem(key)
  const ui = `
   <tr class="border-b border-gray-200 ">
            <td class="p-3.5">${i}</td>
            <td class="p-3 text-gray-600">${task}</td>
            <td class="p-3">
                <div class="flex items-center gap-3">
                    <button class="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-green-700" onclick="openEditModal('${task}','${key}')"><i class="ri-pencil-fill"></i></button>
                    <button class="bg-rose-500 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-rose-700" onclick="deletetask('${key}')"><i class="ri-delete-bin-line"></i></button>
                </div>
            </td>
        </tr>`
      tableBody.innerHTML += ui  
 i = i+1
}
}

const deletetask = (key) =>{

  localStorage.removeItem(key)
 location.href = location.href
}

const openEditModal = (task,key) =>{
     new Swal({
        html:`<div class="text-left space-y-4">
                 <h1 class="text-xl font-semibold text-black">Update Task</h1>
                 <form onsubmit="updatetask(event,${key})">
                   <input value= "${task}" id="edit_task" type="text" class="w-full rounded px-3 py-2 border border-gray-100" placeholder = Enter Task!"/>
                   <button class="bg-rose-600 px-6 py-2 rounded text-white mt-4">Save</button>
                 </form>
              </div>`,
        showConfirmButton:false,
    })
}

const updatetask = (event,key) =>{
 
  event.preventDefault()
  const edit_input = document.getElementById('edit_task')
  const input_value = edit_input.value.trim()
  localStorage.setItem(key,input_value)
   new Swal({
    icon:"success",
    title:"Task Updated"
  }).then(()=>{
    location.href = location.href
  })
}