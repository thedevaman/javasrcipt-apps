function openDialog()
{
     new Swal({
        html:`<div class="text-left space-y-4">
                 <h1 class="text-xl font-semibold text-black">Add New Task</h1>
                 <form>
                   <input type="text" class="w-full rounded px-3 py-2 border border-gray-100" placeholder = Enter Task!"/>
                   <button class="bg-indigo-600 px-6 py-2 rounded text-white mt-4">Add</button>
                 </form>
              </div>`,
        showConfirmButton:false,
    })
}