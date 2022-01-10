const form = document.querySelector("form")
const input = document.querySelector("[name='todo']")
const todoList = document.querySelector(".todos")

const todoItems = []

function addTodo(todoText) {

    // Creating new Item (container)
    const newItem = document.createElement("div")
    newItem.innerText = todoText
    newItem.classList.add("new-item")


    // Creating Edit button
    const newItemEditForm = document.createElement("form")
    const newItemEdit = document.createElement("label")

    const newItemEditButton = document.createElement("input")
    newItemEditButton.setAttribute("type", "submit")
    newItemEditButton.classList.add("new-item-edit-button")

    const newItemEditSVG = document.createElement("img")
    newItemEditSVG.setAttribute("src", "svg/iconmonstr-pencil-14.svg")
    newItemEditSVG.classList.add("new-item-edit-svg")
    newItemEdit.append(newItemEditButton, newItemEditSVG)
    newItemEditForm.appendChild(newItemEdit)
    newItemEditForm.addEventListener("submit", editItem)


    // Creating Remove button
    const newItemRemoveForm = document.createElement("form")
    const newItemRemove = document.createElement("label")

    const newItemRemoveButton = document.createElement("input")
    newItemRemoveButton.setAttribute("type", "submit")
    newItemRemoveButton.classList.add("new-item-remove-button")

    const newItemRemoveSVG = document.createElement("img")
    newItemRemoveSVG.setAttribute("src", "svg/12555439561530177266.svg")
    newItemRemoveSVG.setAttribute("width", "25px")
    newItemRemoveSVG.classList.add("new-item-remove-svg")
    newItemRemove.append(newItemRemoveButton, newItemRemoveSVG)
    newItemRemoveForm.appendChild(newItemRemove)
    newItemRemoveForm.addEventListener("submit", removeItem)

    // Appending form -> item -> todoList
    const buttonsContainer = document.createElement("div")
    buttonsContainer.classList.add("buttons-container")
    buttonsContainer.append(newItemEditForm, newItemRemoveForm)
    newItem.appendChild(buttonsContainer)

    todoItems.push(newItem)
    
    todoList.appendChild(newItem)

    function removeItem(event) {
        event.preventDefault()
        newItem.remove()
    }
    function editItem(event) {
        event.preventDefault()
    }
}

form.onsubmit = (event) => {
    event.preventDefault()
    addTodo(input.value)
}