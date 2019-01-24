$(document).ready(function(){
  
  let oldValue;
  let idLocalStorage;

  function reset() {
    $('.input-task').val('')
  }

  function addTaskItem(inputVal) {
    let taskItem = $(`<li><input type="text" class="item-task" value="${inputVal}">
    <input type="button" class="input-delete" value="delete">
    <input type="button" class="input-edit" value="edit"></li>`)
    $('.task-list').append(taskItem)
  }

  function addLocalStorage(inputVal) {
    let len = localStorage.length
    let key = localStorage.key(len - 1)
    len > 0 ? idLocalStorage = +key + 1 : idLocalStorage = 0
    localStorage.setItem(idLocalStorage, inputVal)
  }

  function removeLocalStorage(inputVal) {
    let removeKey
    for(let i = 0, len = localStorage.length; i < len; i++) {
      let key = localStorage.key(i)
      let value = localStorage[key]
      if(value === inputVal){
        localStorage.removeItem(key)
        removeKey = key
      }
    }
   }

   function editLocalStorage(oldVal, editVal) {
     for(let i = 0, len = localStorage.length; i < len; i++) {
       let key = localStorage.key(i)
       let value = localStorage[key]
       if( oldVal === value){
         localStorage.setItem(key, editVal)
       }
     }
   }

   function showLocalStorage() {
     let len = localStorage.length
     if (len > 0) {
       for (let i = 0; i < len; i++) {
         let key = localStorage.key(i)
         let value = localStorage[key]
         addTaskItem(value)
       }
     }
   }

  showLocalStorage()

  $('.form').on('click', '.add-task', function() {
      let inputTask = $('<input type="text" class="input-task" placeholder="Enter your task">')
      let inputSave = $('<input type="button" class="input-save" value="save">')
    if ($('.form').find('.input-task').length === 0) {
      $('.form').append(inputTask, inputSave)
    }
  })

  $('.form').on('click', '.input-save', function() {
    let inputVal = $('.input-task').val()
    inputVal ? (
      addTaskItem(inputVal),
      addLocalStorage(inputVal)
    ): alert('You really enter your task?')
    reset()
  })

  $('.task-list').on('click', '.input-delete', function() {
   $(this).parent().slideUp(1000)
    let inputVal = $(this).parent().find('.item-task').val()
    removeLocalStorage(inputVal)
  })

  $('.task-list').on('click', '.input-edit', function() {
    oldValue = $(this).parent().find('.item-task').val()
    let inputTaskEdit = $(this).parent().find('.item-task')
    inputTaskEdit.addClass('editItem')
    let editValue = inputTaskEdit.val()
    let taskItemNew = $(`<input type="text" class="item-task editItem" value=${editValue}>
    <input type="button" class="input-save" value="save">
    <input type="button" class="input-cancel" value="cancel">`)
    $(this).parent().empty().append(taskItemNew)
  })

  $('.task-list').on('click', '.input-save', function() {
    let inputVal = $(this).parent().find('.item-task').val()
    let taskItem = $(`<li><input type="text" class="item-task" value=${inputVal}>
    <input type="button" class="input-delete" value="delete">
    <input type="button" class="input-edit" value="edit"></li>`)
    $(this).parent().empty().append(taskItem)
    editLocalStorage(oldValue, inputVal)
  })

  $('.task-list').on('click', '.input-cancel', function() {
    let taskItem = $(`<li><input type="text" class="item-task" value=${oldValue}>
    <input type="button" class="input-delete" value="delete">
    <input type="button" class="input-edit" value="edit"></li>`)
    $(this).parent().empty().append(taskItem)
  })

})