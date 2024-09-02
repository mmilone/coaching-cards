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
    // Add more cards here...
];

// Function to generate a random card
function generateRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];

    // Set the title
    document.getElementById('card-title').innerText = card.title;

    // Collect content items with labels
    const contentItems = [];
    for (const [key, value] of Object.entries(card)) {
        if (key !== 'title' && value) {
            contentItems.push(`${capitalizeFirstLetter(key)}:\n${value}`);
        }
    }

    // Sort contentItems to maintain the order and select the first two
    const selectedItems = contentItems.slice(0, 2);

    // Display the selected content items in order
    document.getElementById('card-content').innerText = selectedItems.join('\n\n');
}

// Helper function to capitalize the first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Generate a card when the page loads
window.onload = generateRandomCard;
