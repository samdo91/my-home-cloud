const loginform = document.querySelector('#loginform')
const logininput = document.querySelector('#loginform input')
const hello = document.querySelector("#hello")


const HIDDEN= "hidden"
function loginfuntoin(event) {
    const inputvalue = logininput.value
    event.preventDefault()
    loginform.classList.add(HIDDEN)
    localStorage.setItem("inputvalue",inputvalue)
    greetingfunction(inputvalue)
}
    
    
    function greetingfunction(inputvalue){
    hello.innerHTML = `hello ${inputvalue}`
    hello.classList.remove(HIDDEN)
}

const localgetitem=(localStorage.getItem("inputvalue"))

if (localgetitem===null){
    loginform.classList.remove(HIDDEN)
    loginform.addEventListener("submit", loginfuntoin)
        
} else{
    greetingfunction(localgetitem)

}



function logvaluechenge(){
   hello.classList.toggle("active")
}


hello.addEventListener("click", logvaluechenge)