
function checkBoxHandler () {
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checked");
    })
}

export default checkBoxHandler;