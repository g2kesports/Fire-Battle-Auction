let players = [
    { name: "Player 1", price: 1000 },
    { name: "Player 2", price: 2000 },
    { name: "Player 3", price: 1500 },
];

let currentPlayerIndex = 0;
let currentBid = players[currentPlayerIndex].price;

document.getElementById("current-player").innerText = players[currentPlayerIndex].name;
document.getElementById("current-bid").innerText = currentBid;

function placeBid() {
    let bidAmount = parseInt(document.getElementById("bid-amount").value);
    if (bidAmount > currentBid) {
        currentBid = bidAmount;
        document.getElementById("current-bid").innerText = currentBid;
        alert("Bid placed successfully!");
    } else {
        alert("Your bid must be higher than the current bid!");
    }
}
