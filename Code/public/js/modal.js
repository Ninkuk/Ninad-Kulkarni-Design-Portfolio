var modalTitle = document.getElementById("modalTitle");
var modalContent = document.getElementById("modalContent");

modalTitles =
    [
        "FBLA Regional #3 Conference",
        "Key Club Southewest District Convention",
        "FBLA State Leadership Conference",
        "FBLA National Leadership Conference",
        "Paradise Valley Unified School District Honor",
        "Arizona State Governer Commendation",
        "FBLA Regional #3 Conference",
        "Key Club Southewest District Convention",
        "FBLA State Leadership Conference",
        "FBLA National Leadership Conference"
    ];

modalTexts =
    [
        "FBLA Regional #3 Conference",
        "",
        "",
        ""
    ];

function setModalContent(card) {
    modalTitle.innerHTML = modalTitles[card];
    modalContent.innerHTML = modalTexts[card];
}