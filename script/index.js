const accordionButton = document.querySelectorAll(".accordion_item-buttom");

function open(){
    this.classList.toggle("open");

    let panel = this.nextElementSibling;
    if(panel.style.display === "block"){
        panel.style.display = "none";
    }else{
        panel.style.display = "block";
    }
}
accordionButton.forEach(button => button.addEventListener("click", open))