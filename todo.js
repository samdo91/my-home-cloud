const todo = document.querySelector("#todo")
const todoinput = document.querySelector("#todo input")
const todolist = document.querySelector("#todolist")

let todosavelist = []

function xremove(event) {
    const li = (event.target.parentElement)
    li.remove()
    todosavelist=todosavelist.filter((tod) => tod.id !== parseInt(li.id))
    localtodovalue()
} 


function localtodovalue() {
    localStorage.setItem("todosavelist", JSON.stringify(todosavelist))



}

function todotshow(todoinput) {
    const li = document.createElement("li")
    li.id = todoinput.id
    const span = document.createElement("span")
    span.innerHTML = (todoinput.text)
    const button = document.createElement("button")
    button.innerHTML = ("❌")
    button.addEventListener("click", xremove)
    li.appendChild(span)
    li.appendChild(button)
    todolist.appendChild(li)
}







function todoinputfuntion(event) {
    event.preventDefault()
    const todovalue = todoinput.value
    todoinput.value = ("")
    const valueoj = {
        text: todovalue,
        id: Date.now()
    }
    todotshow(valueoj)
    todosavelist.push(valueoj)
    localtodovalue()
}

todo.addEventListener("submit", todoinputfuntion)

const localget = localStorage.getItem("todosavelist")
if (localget !== null) {
    const parsetodo = JSON.parse(localget)
    todosavelist = parsetodo
    parsetodo.forEach(todotshow)
}

