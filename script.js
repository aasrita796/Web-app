function login() {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".shop-container").style.display = "block";
}

function searchItems() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".item");
    
    items.forEach(item => {
        let title = item.querySelector("h2").textContent.toLowerCase();
        if (title.includes(input)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}
