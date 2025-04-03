$(document).ready(function() {

  $("#lightGallery").lightGallery();
});

const facts = [
    "I once climbed a mountain!"
];

document.getElementById('surprise-button').addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact-display').textContent = randomFact;
});
