window.onload = ()=>{
  fetchTasks()
}

function openDialog()
{
     new Swal({
        html:`<div class="text-left space-y-4">
                 <h1 class="text-xl font-semibold text-black">Add New Task</h1>
                 <form onsubmit="storetask(event)" class="space-y-4">
                   <input id="task" type="text" class="w-full rounded px-3 py-2 border border-gray-100" placeholder = Enter Task!"/>
                   <input id="date" type="date" class="w-full rounded px-3 py-2 border border-gray-100" />
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
  const dateInput = document.getElementById("date")
  const task = taskInput.value.trim()
  const date = dateInput.value.trim()
  const key = Date.now()
  const payload = {
    task:task,
    date:date,
    status:"scheduled"
  }
  localStorage.setItem(key,JSON.stringify(payload))
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
  
  const data = JSON.parse(localStorage.getItem(key))
  const ui = `
   <tr class="border-b border-gray-200 ">
            <td class="p-3.5">${i}</td>
            <td class="p-3 text-gray-600">${data.task[0].toUpperCase()}${data.task.slice(1)}</td>
            <td class="p-3 text-gray-600">${moment(data.date).format('DD MMM YYYY')}</td>
            <td class="p-3 text-gray-600">
            <select class="border border-grya-300 rounded p-1" onchange="updateStatus(event,${key})">
              <option value="scheduled" ${data.status === 'scheduled'?'selected':''}>Scheduled</option>
              <option value="inprogress" ${data.status === 'inprogress'?'selected':''}>InProgress</option>
              <option value="cancelled" ${data.status === 'cancelled'?'selected':''}>Cancelled</option>
              <option value="completed" ${data.status === 'completed'?'selected':''}>Completed</option>
            </select>
            </td>
            <td class="p-3">
                <div class="flex items-center gap-3">
                    <button class="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-green-700" onclick="openEditModal('${data.task}','${key}','${data.date}')"><i class="ri-pencil-fill"></i></button>
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

const openEditModal = (task,key,date) =>{
     new Swal({
        html:`<div class="text-left space-y-4">
                 <h1 class="text-xl font-semibold text-black">Update Task</h1>
                 <form onsubmit="updatetask(event,${key})" class="space-y-5">
                   <input value= "${task}" id="edit_task" type="text" class="w-full rounded px-3 py-2 border border-gray-100" placeholder = Enter Task!"/>
                    <input value= "${date}" id="edit_date" type="date" class="w-full rounded px-3 py-2 border border-gray-100" />
                   <button class="bg-rose-600 px-6 py-2 rounded text-white mt-4">Save</button>
                 </form>
              </div>`,
        showConfirmButton:false,
    })
}

const updatetask = (event,key) =>{
 
  event.preventDefault()
  const edit_input = document.getElementById('edit_task')
  const edit_date = document.getElementById('edit_date')
  const input_value = edit_input.value.trim()
  const date_value = edit_date.value
  const payload = {
    task : input_value,
    date : date_value
  }
  localStorage.setItem(key,JSON.stringify(payload))
   new Swal({
    icon:"success",
    title:"Task Updated"
  }).then(()=>{
    location.href = location.href
  })
}


const updateStatus = (event,key) =>{

  const status = event.target.value
  const payload = JSON.parse(localStorage.getItem(key))
  payload.status = status
  localStorage.setItem(key,JSON.stringify(payload))
  
  new Swal({
    icon :'success',
    title : 'status Updated',
    text : status.toUpperCase()
  })
}


const serachData = (input) =>{
const keyword = input.value.trim().toLowerCase() 
const keys = Object.keys(localStorage)
const allData = []
for(var key of keys)
{
  const data = JSON.parse(localStorage.getItem(key))
  allData.push(data)

}

const filtered = allData.filter((item)=>{
 return item.task.toLowerCase().indexOf(keyword) != -1
})


const tableBody = document.getElementById("table_body")
var i = 1
   tableBody.innerHTML = " "  
for(var filteredKey of filtered){
  
  const ui = `
   <tr class="border-b border-gray-200 ">
            <td class="p-3.5">${i}</td>
            <td class="p-3 text-gray-600">${filteredKey.task[0].toUpperCase()}${filteredKey.task.slice(1)}</td>
            <td class="p-3 text-gray-600">${moment(filteredKey.date).format('DD MMM YYYY')}</td>
            <td class="p-3 text-gray-600">
            <select class="border border-grya-300 rounded p-1" onchange="updateStatus(event,${filteredKey})">
              <option value="scheduled" ${filteredKey.status === 'scheduled'?'selected':''}>Scheduled</option>
              <option value="inprogress" ${filteredKey.status === 'inprogress'?'selected':''}>InProgress</option>
              <option value="cancelled" ${filteredKey.status === 'cancelled'?'selected':''}>Cancelled</option>
              <option value="completed" ${filteredKey.status === 'completed'?'selected':''}>Completed</option>
            </select>
            </td>
            <td class="p-3">
                <div class="flex items-center gap-3">
                    <button class="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-green-700" onclick="openEditModal('${filteredKey.task}','${filteredKey}','${filteredKey.date}')"><i class="ri-pencil-fill"></i></button>
                    <button class="bg-rose-500 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-rose-700" onclick="deletetask('${filteredKey}')"><i class="ri-delete-bin-line"></i></button>
                </div>
            </td>
        </tr>`
      tableBody.innerHTML += ui  
 i = i+1
}



}