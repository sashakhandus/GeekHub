$(document).ready(function(){

  function reset() {
    $('.input-task').val('')
  }

  function addTaskItem() {
    let inputVal = $('.input-task').val()
    let taskItem = $(`<li><input type="text" class="item-task" value=${inputVal}>
    <input type="button" class="input-delete" value="delete">
    <input type="button" class="input-edit" value="edit"></li>`)

    $('.task-list').append(taskItem)
  }

  $('.form').on('click', '.add-task', function() {
      let inputTask = $('<input type="text" class="input-task" placeholder="Enter your task">')
      let inputSave = $('<input type="button" class="input-save" value="save">')
    if ($('.form').find('.input-task').length === 0) {
      $('.form').append(inputTask, inputSave)
    }
  })

  $('.form').on('click', '.input-save', function() {
    let inputVal = $('.input-task').val()
    inputVal ? addTaskItem() : alert('You really enter your task?')
    reset()
  })

  $('.task-list').on('click', '.input-delete', function() {
   $(this).parent().slideUp(2000)
  })

  $('.task-list').on('click', '.input-edit', function() {
    let inputTaskEdit = $(this).parent().find('.item-task')
    inputTaskEdit.addClass('editItem')
    let editValue = inputTaskEdit.val()
    let taskItemNew = $(`<input type="text" class="item-task" value=${editValue}>
    <input type="button" class="input-save" value="save">
    <input type="button" class="input-cancel" value="cancel">`)

    $(this).parent().empty().append(taskItemNew)

  })
})