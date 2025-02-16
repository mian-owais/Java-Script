const textArea = document.getElementById("Text_Area")
const totalChar = document.getElementById("Total_Char")
const remainChar = document.getElementById("Remaining_Char")


textArea.addEventListener("keyup", () => {
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalChar.innerText = textArea.value.length
    remainChar.innerText =  textArea.getAttribute("maxLength") - textArea.value.length
}