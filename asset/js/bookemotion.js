console.log("book emotion.js connected")

function openCard(evt, cardID) {
    document.getElementById(cardID).style.display = "flex"; // show that content
    document.getElementById('container').style.display = "none";
}
 function closeCard(evt, cardID) {
    document.getElementById(cardID).style.display = "none"; // show that content
    document.getElementById('container').style.display = "grid";
}