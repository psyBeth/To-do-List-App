const inputBox = document.querySelector("#input-box")
const addBtn = document.querySelector(".add-btn")
const newList = document.querySelector(".liste")
const silBtn = document.querySelector(".sil")
const listArr = []

addBtn.addEventListener("click", (e) => {
    if(inputBox.value.trim() == ""){
        alert("Please set an avaliable goal.")
    } else {
        if(listArr.includes(inputBox.value)){
            alert("You have already set this goal.")
        } else {
            listArr.push(inputBox.value)
        

    //? will add to the <ul>
    const liste = document.createElement("li") //* writing tag in ""
    liste.className = "todo"
    liste.innerHTML = `${inputBox.value}<button class ="sil">🗑️</button>`

    // or we can write this instead of the 9th line:
    //const text = document.createTextNode(inputBox.value)
    //liste.appendChild(text) //* parent element first

    newList.appendChild(liste)

    liste.style.color= "white" //! can be in css tho idk
    liste.style.listStyleType = "none"
    inputBox.value = ""
    inputBox.focus() //* when added don't have to click again to write goal

        }
    }
} ) //* adding event //(e) is a parameter

newList.addEventListener("click", (e) => {
    //console.log(e.target) //* e.target means what you clicked
    if(e.target.className == "sil"){
        e.target.closest("li").remove()
    } else if (e.target.className == "todo") {
        e.target.classList.add("checked")
    }

})

//? use the enter key to add
inputBox.addEventListener("keyup", (e) => {
    // console.log(e.key); //*output is Enter
    if(e.key == "Enter"){
        addBtn.click()
    }
})