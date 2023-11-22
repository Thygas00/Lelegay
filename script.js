function mostrargay() {
    const elx = document.getElementById("elx");

    elx.classList.toggle("mostrando");
}

function mostrarbai() {
    const elx = document.getElementById("elx");

    if (!elx.classList.contains("mostrando")) {
        alert("Você precisa apertar o botão 'Baitola' primeiro, baitola do carai!");
    } else {
        document.getElementById("second").style.display = "block";
    }
}