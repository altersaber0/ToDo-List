const form = document.querySelector("form")
const input = document.querySelector("[name='todo']")
const todoList = document.querySelector(".todos")

const todoItems = []

function addTodo(todoText) {

    // Creating new Item (container)
    const newItem = document.createElement("div")
    newItem.innerText = todoText
    newItem.classList.add("new-item")

    // Creating form for editing & deleting
    const newItemForm = document.createElement("form")
    newItemForm.classList.add("new-item-form")

    // Creating Edit button
    const newItemEdit = document.createElement("label")

    const newItemEditButton = document.createElement("input")
    newItemEditButton.setAttribute("type", "submit")
    newItemEditButton.classList.add("new-item-edit-button")

    const newItemEditSVG = document.createElement("img")
    newItemEditSVG.setAttribute("src", "svg/iconmonstr-pencil-14.svg")
    newItemEditSVG.classList.add("new-item-edit-svg")
    newItemEdit.append(newItemEditButton, newItemEditSVG)

    // Creating Remove button
    const newItemRemove = document.createElement("label")

    const newItemRemoveButton = document.createElement("input")
    newItemRemoveButton.setAttribute("type", "submit")
    newItemRemoveButton.classList.add("new-item-remove-button")

    const newItemRemoveSVG = document.createElement("img")
    newItemRemoveSVG.setAttribute("src", "svg/12555439561530177266.svg")
    newItemRemoveSVG.setAttribute("width", "25px")
    newItemRemoveSVG.classList.add("new-item-remove-svg")
    newItemRemove.append(newItemRemoveButton, newItemRemoveSVG)

    // Appending form -> item -> todoList
    newItemForm.append(newItemEdit, newItemRemove)

    newItem.appendChild(newItemForm)

    todoItems.push(newItem)
    
    todoList.appendChild(newItem)

}

form.onsubmit = (event) => {
    event.preventDefault()
    addTodo(input.value)
}