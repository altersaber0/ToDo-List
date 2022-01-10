const form = document.querySelector("form")
const input = document.querySelector("[name='todo']")
const todoList = document.querySelector("#todolist")

const todoItems = []
const todoStrings = []

function addTodo(todoText) {

    // Creating new Item (and textContainer inside)
    const newItem = document.createElement("div")
    const textContainer = document.createElement("div")
    textContainer.classList.add("text-container")
    textContainer.innerText = todoText
    newItem.appendChild(textContainer)
    newItem.classList.add("new-item")
    todoList.classList.add("todos")


    // Creating Edit button
    const newItemEditForm = document.createElement("form")
    newItemEditForm.classList.add("buttons-form")
    const newItemEdit = document.createElement("label")
    newItemEdit.classList.add("buttons-label")
    // Edit button itself (will be hidden via CSS inside the label)
    const newItemEditButton = document.createElement("input")
    newItemEditButton.setAttribute("type", "submit")
    newItemEditButton.classList.add("new-item-edit-button")
    // SVG to cover the Edit button
    const newItemEditSVG = document.createElement("img")
    newItemEditSVG.setAttribute("src", "svg/iconmonstr-pencil-14.svg")
    newItemEditSVG.classList.add("new-item-edit-svg")
    newItemEdit.append(newItemEditButton, newItemEditSVG)
    newItemEditForm.appendChild(newItemEdit)
    newItemEditForm.addEventListener("submit", editItem)


    // Creating Remove button
    const newItemRemoveForm = document.createElement("form")
    newItemRemoveForm.classList.add("buttons-form")
    const newItemRemove = document.createElement("label")
    newItemRemove.classList.add("buttons-label")
    // Remove buttom itself (will be hidden via CSS inside the label)
    const newItemRemoveButton = document.createElement("input")
    newItemRemoveButton.setAttribute("type", "submit")
    newItemRemoveButton.classList.add("new-item-remove-button")
    // SVG to cover the Remove button
    const newItemRemoveSVG = document.createElement("img")
    newItemRemoveSVG.setAttribute("src", "svg/12555439561530177266.svg")
    newItemRemoveSVG.setAttribute("width", "24px")
    newItemRemoveSVG.classList.add("new-item-remove-svg")
    newItemRemove.append(newItemRemoveButton, newItemRemoveSVG)
    newItemRemoveForm.appendChild(newItemRemove)
    newItemRemoveForm.addEventListener("submit", removeItem)


    // Creating container for both buttons
    const buttonsContainer = document.createElement("div")
    buttonsContainer.classList.add("buttons-container")
    buttonsContainer.append(newItemEditForm, newItemRemoveForm)
    newItem.appendChild(buttonsContainer)

    // Add Item to the array todoItems as an object
    todoItems.push(newItem)
    // Add Item to the array todoStrings as a string
    todoStrings.push(todoText)
    
    todoList.appendChild(newItem)

    // Callback for Removing Item
    function removeItem(event) {
        event.preventDefault()
        newItem.remove()
    }
    // Callback for Editing Item
    function editItem(event) {
        event.preventDefault()
        // Creating the warning message after ToDo's text
        const warningSpan = document.createElement("span")
        warningSpan.innerText = "Press <Enter> to save"
        warningSpan.classList.add("warning-span")
        textContainer.appendChild(warningSpan)

        textContainer.setAttribute("contenteditable", "true")
        textContainer.addEventListener("keydown", e => {
            // Pressing Enter verifies the input and prevents from futher editing
            if (e.keyCode == 13) {
                textContainer.removeAttribute("contenteditable")
                // Removing warning message
                warningSpan.remove()
            }
        })
    }
}
// Submitting form calls addTodo() if the current value is not an empty string
form.onsubmit = (event) => {
    event.preventDefault()
    if (input.value !== "") {
        addTodo(input.value)
    }
    input.value = ""
}