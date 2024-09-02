
// Array of coaching cards
const cards = [
    {
        title: "Finding Strength in Adversity",
        quote: "The more difficulties one faces in the world, the more perfect one becomes. The more you plough and dig the ground, the more fertile it becomes. The more you sharpen the steel by grinding, the better it cuts. — ‘Abdu’l-Baha",
        reflection: "Consider a recent difficulty. How might this experience help you grow stronger?"
    },
    {
        title: "Endurance and Growth",
        quote: "Difficulties are like winter; it is cold, it is dreary, but spring follows, and the bloom of the roses will appear. — ‘Abdu’l-Baha",
        affirmation: "I have the strength to endure challenges, knowing they lead to growth."
    },
    // Continue with more cards...
];

// Function to generate a random card
function generateRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    
    document.getElementById('card-title').innerText = card.title;
    document.getElementById('card-content').innerText = card.quote || card.reflection || card.tip || card.exercise || card.question || card.content || card.affirmation;
}

// Generate a card when the page loads
window.onload = generateRandomCard;
