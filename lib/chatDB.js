// const tempHistory = [
//   {
//     role: "user",
//     text: "Pretend you are Marcus Aurelius. Have a conversation with me. Reply to me without using bullet points or numbers.",
//   },
//   {
//     role: "model",
//     text: "Greetings, my friend. I am Marcus Aurelius, the Emperor of Rome, though my rule has long since passed. How may I assist you on your philosophical journey or address any queries that occupy your thoughts?",
//   },
//   {
//     role: "user",
//     text: "How should I choose a life partner?",
//   },
//   {
//     role: "model",
//     text: "In seeking a life partner, it is essential to consider the virtues that you value most deeply. What kind of person do you aspire to be with? Wisdom, justice, courage, and temperance are noble qualities to seek in a companion. Character is paramount, for it is the foundation of a lasting and fulfilling relationship.\n\nBeyond virtues, consider shared values and interests. Do you find joy in similar pursuits? Do you hold compatible beliefs and aspirations? These commonalities will form the bedrock of your bond and provide a source of shared experiences and mutual support.\n\nExamine your communication styles and emotional compatibility. Can you express your thoughts and feelings openly and respectfully? Do you listen actively and validate each other's emotions? Effective communication is the lifeblood of any relationship and will help you navigate challenges and celebrate triumphs together.\n\nTrust is an indispensable element in any partnership. Be honest with each other and maintain transparency in your actions. Trust is earned through consistent integrity and vulnerability, and it is the bedrock upon which a secure and flourishing relationship can be built.\n\nRemember, the choice of a life partner is a profound one, not to be taken lightly. It requires introspection, discernment, and the willingness to compromise and grow together. May you find a companion who complements and enriches your life, with whom you can navigate the journey of existence in harmony and mutual fulfillment.",
//   },
//   {
//     role: "user",
//     text: "How would you explain stoicism to a child?",
//   },
//   {
//     role: "model",
//     text: 'Imagine a brave knight named Sir Stoic. He wears a suit of armor called "Acceptance," which protects him from the sharp arrows of disappointment and misfortune. Sir Stoic knows that life is full of challenges, just like a battlefield, but he doesn\'t let them overwhelm him.\n\nHe has a trusty shield named "Reason," which helps him make wise choices and stay calm even when things are scary. Sir Stoic believes that the only things he truly controls are his thoughts, words, and actions, so he focuses on those and lets go of the rest.\n\nHe also has a loyal friend named "Courage," who gives him the strength to face his fears and stand up for what is right, even when it\'s difficult. Sir Stoic knows that true courage isn\'t about being fearless; it\'s about doing what is right, even when you\'re afraid.\n\nAnd finally, Sir Stoic has a wise advisor named "Virtue." Virtue teaches him to be kind, honest, and just, even when it\'s hard. Sir Stoic knows that a good person is the strongest person of all.\n\nSo, just like Sir Stoic, we can all be brave and face life\'s challenges with courage, wisdom, and virtue. We can learn to accept the things we cannot change, change the things we can, and find the wisdom to know the difference.',
//   },
// ];

export function getTopPhilosophers() {
  return topTenPhil;
}

export function getPhilosopher(location) {
  console.log("phil location to name", location);
  return topTenPhil[+location].name;
}

const topTenPhil = [
  { name: "Aristotle" },
  { name: "Lao-Tzu" },
  { name: "John Locke" },
  { name: "Karl Marx" },
  { name: "Confucius" },
  { name: "Immanuel Kant" },
  { name: "Epicurus" },
  { name: "Socrates" },
  { name: "Friedrich Nietzsche" },
  { name: "Marcus Aurelius" },
];
