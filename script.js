// Array of coaching cards
const cards = [
    {
        title: "Finding Strength in Adversity",
        quote: "The more difficulties one faces in the world, the more perfect one becomes. The more you plough and dig the ground, the more fertile it becomes. The more you sharpen the steel by grinding, the better it cuts. — ‘Abdu’l-Bahá",
        reflection: "Consider a recent difficulty. How might this experience help you grow stronger?"
    },
    {
        title: "Endurance and Growth",
        quote: "Difficulties are like winter; it is cold, it is dreary, but spring follows, and the bloom of the roses will appear. — ‘Abdu’l-Bahá",
        affirmation: "I have the strength to endure challenges, knowing they lead to growth."
    },
    {
        title: "Self-Compassion",
        tip: "Treat yourself with the same kindness you would offer to a friend in a similar situation.",
        exercise: "Write a letter of encouragement to yourself as if you were your own best friend."
    },
    {
        title: "Courage in Uncertainty",
        reflection: "Choosing courage over comfort is a personal challenge; it requires stepping into discomfort for growth.",
        exercise: "Identify one area where you can step out of your comfort zone today."
    },
    {
        title: "Daily Gratitude",
        exercise: "Write down three things you are grateful for today, no matter how small.",
        affirmation: "Gratitude opens my heart to possibilities."
    },
    {
        title: "Practicing Mindfulness",
        exercise: "Take five minutes to sit quietly, breathe deeply, and observe your thoughts without judgment.",
        affirmation: "I am present in this moment."
    },
    {
        title: "Overcoming Fear",
        question: "What fear is currently holding you back? What small step can you take today to face it?",
        affirmation: "I am capable of overcoming my fears."
    },
    {
        title: "Living Authentically",
        question: "What does it mean to live authentically for you? How can you bring more authenticity into your life?",
        affirmation: "I honor my true self."
    },
    {
        title: "Accepting Imperfection",
        reflection: "Embrace progress over perfection; each step forward is a victory.",
        exercise: "Reflect on an instance where striving for perfection held you back. What could have been different if you embraced imperfection?"
    },
    {
        title: "Celebrating Small Wins",
        exercise: "Identify one small win from today and celebrate it in a meaningful way.",
        affirmation: "Every step forward, no matter how small, is progress."
    },
    {
        title: "Letting Go of Comparison",
        tip: "Your journey is unique; comparison diminishes your progress.",
        question: "What can you do today to focus on your own path instead of comparing yourself to others?"
    },
    {
        title: "Seeking Joy",
        content: "Joy is found in small moments.",
        exercise: "Identify three things that brought you joy today and reflect on them."
    },
    {
        title: "Self-Awareness",
        question: "What is one pattern or behavior you have noticed about yourself recently?",
        exercise: "Reflect on how this pattern affects your daily life."
    },
    {
        title: "Practicing Patience",
        tip: "Patience is not the ability to wait, but how you act while waiting.",
        affirmation: "I am patient with myself and my journey."
    },
    {
        title: "Finding Balance",
        tip: "Balance is not something you find; it’s something you create.",
        question: "What is one small way you can create more balance in your life today?"
    },
    {
        title: "Strength in Community",
        content: "You are not alone. Reach out to those who support you and let them in.",
        exercise: "Reach out to one person today and share how you're feeling."
    },
    {
        title: "Self-Affirmation",
        content: "Affirm your worth and potential daily.",
        exercise: "Write an affirmation that resonates with you and repeat it every morning."
    },
    {
        title: "Living with Purpose",
        reflection: "Living with purpose means aligning your actions with what truly matters to you.",
        exercise: "Identify one action you can take today that aligns with your deeper values and goals."
    },
    {
        title: "Enduring Patience",
        quote: "Patience, under all conditions, is a light that illuminates the path. — 'Abdu’l-Bahá",
        affirmation: "I move forward with patience and determination."
    },
    {
        title: "Understanding Your Values",
        question: "What are your top three values, and how do they show up in your ideal work environment?",
        exercise: "Reflect on a recent decision. Did it align with your core values?"
    },
    {
        title: "Defining Success",
        question: "How do you define success for yourself, beyond the job title or salary?",
        affirmation: "Success is defined by me and aligned with my values."
    },
    {
        title: "Clarifying Your Purpose",
        reflection: "Purpose is found in the intersection of what you love, what you are good at, and what the world needs.",
        exercise: "Reflect on your purpose. How can you align your daily actions with your highest aspirations?"
    },
    {
        title: "Knowing Yourself",
        reflection: "Understanding yourself is the key to unlocking your full potential.",
        question: "What are three things you’ve learned about yourself recently? How do these insights help guide your path?"
    },
    {
        title: "Vision for the Future",
        exercise: "Imagine your life in five years. Write down what it looks like, feels like, and what you are doing."
    },
    {
        title: "Learning from Mistakes",
        content: "Mistakes are proof that you are trying.",
        question: "What is one mistake you have made recently, and what did you learn from it?"
    },
    {
        title: "Identifying Limiting Beliefs",
        question: "What is one belief you have that might be holding you back?",
        exercise: "Rewrite this belief in a way that empowers you."
    },
    {
        title: "Celebrating Your Wins",
        exercise: "List five accomplishments you are proud of, no matter how small.",
        affirmation: "I celebrate my progress and growth."
    },
    {
        title: "Understanding Your Needs",
        question: "What are three non-negotiables for you in any job or life situation?",
        exercise: "Reflect on how these needs are or are not being met currently."
    },
    {
        title: "Identifying Your Support System",
        exercise: "List the people who support you the most. How can you lean on them this week?",
        affirmation: "I am supported and valued."
    },
    {
        title: "Exploring Your Interests",
        question: "What interests have you always wanted to explore but haven't yet?",
        exercise: "Choose one interest and take the first step towards exploring it."
    },
    {
        title: "Evaluating Your Priorities",
        content: "Your priorities shape your reality.",
        question: "What are your current priorities, and are they aligned with what you truly want?"
    },
    {
        title: "Understanding Your Motivation",
        question: "What motivates you to get out of bed every morning?",
        exercise: "Reflect on how you can incorporate more of this motivation into your daily routine."
    },
    {
        title: "Recognizing Your Strengths",
        exercise: "Ask three people you trust to share one strength they see in you.",
        affirmation: "I am strong, capable, and full of potential."
    },
    {
        title: "Aligning Actions with Goals",
        tip: "Small steps taken consistently lead to significant change.",
        exercise: "Identify one action you can take today that aligns with a long-term goal."
    },
    {
        title: "Cultivating Self-Awareness",
        content: "Self-awareness is the foundation of growth.",
        exercise: "Spend 10 minutes today journaling about your thoughts and feelings."
    },
    {
        title: "Exploring Opportunities",
        question: "What new opportunities have you noticed recently?",
        exercise: "Write down one opportunity and the first step to pursuing it."
    },
    {
        title: "Defining Your Path",
        exercise: "Create a vision board or mind map for your ideal career path.",
        reflection: "Think about the path you are on. Are you moving toward your ideal future?"
    },
    {
        title: "Setting Intentions",
        tip: "Intentions are more powerful than goals because they define the reason behind your actions.",
        exercise: "Set one intention for today that reflects your deeper values."
    },
    {
        title: "Building Meaningful Connections",
        tip: "Genuine connections are built on mutual respect, trust, and empathy.",
        exercise: "Reach out to someone you haven’t spoken to in a while and ask how they are doing."
    },
    {
        title: "Active Listening",
        content: "Active listening is the foundation of meaningful communication.",
        exercise: "In your next conversation, practice active listening by focusing fully on the speaker and asking thoughtful questions."
    },
    {
        title: "Networking with Purpose",
        tip: "Approach networking with a mindset of giving, not just getting.",
        exercise: "Identify one person in your network whom you can offer help, support, or valuable information today."
    },
    {
        title: "Expanding Your Network",
        question: "What areas of your life or work would benefit from new connections?",
        exercise: "Identify one group, event, or online community you can join to meet people with similar interests."
    },
    {
        title: "Embracing Diversity in Connections",
        content: "Diverse connections bring new perspectives and ideas.",
        exercise: "Make an effort to connect with someone from a different background or field this week."
    },
    {
        title: "Being Open to New Perspectives",
        tip: "New perspectives can lead to growth and innovation.",
        exercise: "Engage in a conversation with someone who has a different viewpoint. Listen openly and ask questions to understand their perspective."
    },
    {
        title: "Nurturing Relationships",
        content: "Relationships thrive on consistent effort and communication.",
        exercise: "Send a message or make a call to a friend or colleague today, simply to check in and show you care."
    },
    {
        title: "Creating Safe Spaces",
        tip: "Create an environment where others feel safe to express themselves.",
        exercise: "Think of one way you can make your next interaction more open and supportive."
    },
    {
        title: "Offering Genuine Compliments",
        content: "A sincere compliment can strengthen a connection.",
        exercise: "Offer a genuine compliment to someone today and observe their reaction."
    },
    {
        title: "Practicing Vulnerability",
        tip: "Vulnerability fosters deeper connections and trust.",
        exercise: "Share something personal with someone you trust, allowing them to see a more authentic side of you."
    },
    {
        title: "Finding Common Ground",
        tip: "Look for shared interests or goals to create a stronger connection.",
        exercise: "In your next conversation, identify one thing you have in common with the other person and build on it."
    },
    {
        title: "Effective Follow-Up",
        content: "Following up after a meeting or event shows that you value the connection.",
        exercise: "Reach out to someone you recently met and express your interest in staying in touch."
    },
    {
        title: "Offering Help First",
        tip: "The best way to build a network is to be of service.",
        exercise: "Find one person in your network who might need help and offer your assistance without expecting anything in return."
    },
    {
        title: "Active Participation in Communities",
        content: "Being actively involved in communities helps you build trust and visibility.",
        exercise: "Engage in a community discussion or contribute to a group activity this week."
    },
    {
        title: "Understanding Nonverbal Communication",
        tip: "Nonverbal cues are just as important as words in communication.",
        exercise: "Practice being aware of your body language in your next conversation. Notice how it aligns with your words."
    },
    {
        title: "Expressing Appreciation",
        content: "Appreciation strengthens bonds and encourages continued connection.",
        exercise: "Send a note of appreciation to someone who has positively impacted your life or work."
    },
    {
        title: "Being Present in Conversations",
        tip: "Being fully present shows respect and interest in the other person.",
        exercise: "In your next conversation, put away distractions (like your phone) and give your full attention."
    },
    {
        title: "Using Open-Ended Questions",
        tip: "Open-ended questions encourage deeper and more meaningful discussions.",
        exercise: "Practice asking open-ended questions today to learn more about the people you interact with."
    },
    {
        title: "Building a Reciprocal Network",
        content: "A strong network is built on giving and receiving support.",
        exercise: "Identify one person in your network who has helped you recently and find a way to reciprocate their kindness."
    },
    {
        title: "Setting SMART Goals",
        tip: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound.",
        exercise: "Choose one goal and make it SMART by applying these criteria."
    },
    {
        title: "Breaking Down Big Goals",
        tip: "Large goals can feel overwhelming; break them into smaller, manageable tasks.",
        exercise: "Identify a big goal you have and break it down into three smaller steps."
    },
    {
        title: "Prioritizing Actions",
        question: "What actions will have the most significant impact on reaching your goal?",
        exercise: "List the top three actions you can take today to move closer to your goal."
    },
    {
        title: "Daily Planning",
        tip: "Start each day by planning three key tasks you want to accomplish.",
        exercise: "Write down your three key tasks for today."
    },
    {
        title: "Weekly Review",
        exercise: "At the end of each week, review your progress. What worked well, and what could be improved?",
        question: "How can you adjust your actions for better results next week?"
    },
    {
        title: "Staying Focused",
        tip: "Avoid distractions by setting clear boundaries for work time.",
        exercise: "Identify one distraction you can eliminate or minimize today."
    },
    {
        title: "Overcoming Procrastination",
        reflection: "Procrastination often comes from fear or uncertainty.",
        exercise: "Identify one task you've been putting off and take the first small step to start it."
    },
    {
        title: "Celebrating Milestones",
        tip: "Celebrate your achievements, no matter how small.",
        exercise: "Write down three milestones you've reached and plan a small celebration for each."
    },
    {
        title: "Visualizing Success",
        exercise: "Take a few minutes to visualize yourself achieving your goal. What does it feel like? What do you see, hear, and experience?",
        affirmation: "I can see my success clearly and move towards it with confidence."
    },
    {
        title: "Accountability Partners",
        tip: "Share your goals with someone you trust to help keep you accountable.",
        exercise: "Find an accountability partner and share your goal with them today."
    },
    {
        title: "Creating Positive Habits",
        content: "Habits are the building blocks of success.",
        exercise: "Identify one habit you want to develop and take the first step today."
    },
    {
        title: "Learning from Failure",
        reflection: "Failure is an opportunity to learn and grow.",
        question: "What is one failure that taught you a valuable lesson? How can you apply that lesson today?"
    },
    {
        title: "Time Management",
        tip: "Use tools like calendars or to-do lists to manage your time effectively.",
        exercise: "Plan your next week with specific tasks and deadlines."
    },
    {
        title: "Maintaining Motivation",
        reflection: "Motivation can fluctuate, but commitment keeps you moving.",
        exercise: "Identify three things that keep you motivated and create a plan to incorporate them into your routine."
    },
    {
        title: "Adjusting Goals When Needed",
        tip: "It’s okay to adjust your goals as circumstances change.",
        question: "Are there any goals you need to adjust to better reflect your current priorities?"
    },
    {
        title: "Mindful Action",
        exercise: "Practice mindful action by being fully present in each task you perform today.",
        affirmation: "I act with intention and purpose."
    },
    {
        title: "Keeping a Progress Journal",
        tip: "Documenting your journey helps you reflect and adjust.",
        exercise: "Start a progress journal and write down what you've achieved today."
    },
    {
        title: "Building Resilience in Goal Setting",
        content: "Challenges will arise, but resilience is key to staying on track.",
        exercise: "Think of a past goal you achieved despite obstacles. What strengths did you use, and how can they help you now?"
    },
    {
        title: "Aligning Goals with Values",
        question: "Are your goals aligned with your core values?",
        exercise: "Review your current goals and adjust any that do not reflect your true values."
    },
    {
        title: "The Power of Presence",
        tip: "Being present means fully engaging with the current moment.",
        exercise: "Take a moment today to pause, breathe deeply, and notice your surroundings. What do you see, hear, and feel?"
    },
    {
        title: "Mindful Breathing",
        exercise: "Practice mindful breathing for 3 minutes. Inhale deeply, hold, and exhale slowly. Focus only on your breath.",
        affirmation: "I find calm and clarity in my breath."
    },
    {
        title: "Body Scan Meditation",
        exercise: "Close your eyes and perform a body scan from head to toe, noticing any tension and releasing it with each breath.",
        reflection: "How did your body feel before and after this exercise?"
    },
    {
        title: "Gratitude Practice",
        exercise: "At the end of each day, write down three things you are grateful for.",
        affirmation: "Gratitude fills my heart and brightens my day."
    },
    {
        title: "Mindful Eating",
        tip: "Eat slowly and savor each bite, noticing the flavors, textures, and aromas.",
        exercise: "Practice mindful eating during your next meal. How does it feel compared to eating mindlessly?"
    },
    {
        title: "Digital Detox",
        exercise: "Choose a period today to disconnect from digital devices. Notice how it impacts your mood and focus.",
        reflection: "How did this break from technology make you feel?"
    },
    {
        title: "Connecting with Nature",
        tip: "Nature has a calming and grounding effect on the mind.",
        exercise: "Spend 10 minutes outside, noticing the natural world around you. What do you observe?"
    },
    {
        title: "Self-Care Routine",
        content: "Self-care is not selfish; it is essential.",
        exercise: "Identify one self-care activity you can do today and make time for it."
    },
    {
        title: "Practicing Forgiveness",
        reflection: "Holding onto grudges weighs you down.",
        exercise: "Identify one person (including yourself) you need to forgive and take the first step today."
    },
    {
        title: "Mindful Walking",
        tip: "Walk slowly and notice each step, feeling the ground beneath you and the rhythm of your body.",
        exercise: "Go for a 10-minute mindful walk today and notice how it impacts your mood."
    },
    {
        title: "The Power of Silence",
        content: "Silence can be a source of strength and insight.",
        exercise: "Spend 5 minutes in complete silence, observing your thoughts without judgment."
    },
    {
        title: "Affirmations for Wellbeing",
        tip: "Positive affirmations can rewire your mindset.",
        exercise: "Choose one affirmation to repeat to yourself throughout the day."
    },
    {
        title: "Mindful Listening",
        exercise: "In your next conversation, practice mindful listening by giving your full attention and refraining from interrupting.",
        reflection: "How did this affect the quality of your interaction?"
    },
    {
        title: "Journaling for Clarity",
        exercise: "Spend 10 minutes journaling about your current thoughts and feelings. Notice any patterns or insights that emerge.",
        affirmation: "I find clarity through reflection."
    },
    {
        title: "Creating a Morning Ritual",
        tip: "Start your day with a mindful morning ritual to set a positive tone.",
        exercise: "Design a morning routine that includes one mindful activity, such as meditation, stretching, or journaling."
    },
    {
        title: "Loving-Kindness Meditation",
        exercise: "Close your eyes and send loving-kindness to yourself and others by repeating: 'May I/they be happy, may I/they be healthy, may I/they be at peace.'",
        reflection: "Notice how this exercise makes you feel."
    },
    {
        title: "Progressive Muscle Relaxation",
        tip: "Progressive relaxation helps reduce stress and tension in the body.",
        exercise: "Tense each muscle group for 5 seconds, then release. Start from your feet and move upward."
    },
    {
        title: "Finding Your Center",
        exercise: "When feeling overwhelmed, pause and take three deep breaths, focusing on the present moment.",
        affirmation: "I am calm and centered, no matter what arises."
    },
    {
        title: "Mindful Ending to the Day",
        tip: "End your day mindfully by reflecting on what went well and what you are grateful for.",
        exercise: "Take 5 minutes before bed to reflect on three positive things that happened today."
    }    
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
            // Use the .label class for proper formatting
            contentItems.push(`<span class="label">${capitalizeFirstLetter(key)}:</span><p>${value}</p>`);
        }
    }

    // Select the first two content items to display in order
    const selectedItems = contentItems.slice(0, 2);

    // Display the selected content items in order
    document.getElementById('card-content').innerHTML = selectedItems.join('');
}

// Helper function to capitalize the first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Generate a card when the page loads
window.onload = generateRandomCard;
