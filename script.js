function mostrargay() {
    const elx = document.getElementById("elx");

    elx.classList.toggle("mostrando");
}

function mostrarbai() {
    const elx = document.getElementById("elx");
    const second = document.getElementById("second");

    if (!elx.classList.contains("mostrando")) {
        alert("Você precisa apertar o botão 'Baitola' primeiro, baitola do carai!");
    } else {
        second.classList.toggle("mostrando");
    }
}