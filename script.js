// Social Media Impact Data

// Popular social media platforms (String)
let platform1 = "Instagram";
let platform2 = "TikTok";
let platform3 = "Twitter";

// Average daily screen time in hours (Number)
let screenTimeInstagram = 2.5;
let screenTimeTikTok = 3.2;
let screenTimeTwitter = 1.8;

// Total weekly screen time calculation
let totalWeeklyScreenTime = (screenTimeInstagram + screenTimeTikTok + screenTimeTwitter) * 7;

// Percentage of users affected by social media pressure (Number)
let anxietyPercentage = 65;
let depressionPercentage = 50;

// Constructing a message about social media usage (String)
let impactMessage = `On average, people spend ${totalWeeklyScreenTime.toFixed(1)} hours per week on social media. Studies show that ${anxietyPercentage}% of users experience anxiety and ${depressionPercentage}% experience depression due to social media pressure.`;

// Insert data into the webpage
document.getElementById("platforms").innerHTML = `Popular Platforms: ${platform1}, ${platform2}, ${platform3}`;
document.getElementById("weekly-screen-time").innerHTML = `Total Weekly Screen Time: ${totalWeeklyScreenTime.toFixed(1)} hours`;
document.getElementById("anxiety-impact").innerHTML = `Anxiety Impact: ${anxietyPercentage}% of users affected.`;
document.getElementById("depression-impact").innerHTML = `Depression Impact: ${depressionPercentage}% of users affected.`;
document.getElementById("impact-message").innerHTML = impactMessage;

// ================================
// New Feature: Social Media Facts
// ================================

// Array of social media impact facts
const socialMediaFacts = [
    "Over 4.48 billion people use social media worldwide.",
    "The average person spends about 2.5 hours on social media daily.",
    "Social media has been linked to increased anxiety and depression in teens.",
    "About 70% of marketers use social media for customer engagement.",
    "Facebook remains the most-used social platform with over 2.9 billion users.",
    "Social media plays a crucial role in spreading news, both real and fake."
];

// Track the current fact index
let factIndex = 0;

// Function to display the next fact
function showNextFact() {
    let factDisplay = document.getElementById("fact-display");

    // Display the current fact
    factDisplay.innerText = socialMediaFacts[factIndex];

    // Move to the next fact (loop back to the start if at the end)
    factIndex = (factIndex + 1) % socialMediaFacts.length;
}

// Event listener for the button
document.getElementById("next-fact").addEventListener("click", showNextFact);
// --- CONDITIONAL LOGIC: Assess screen time usage level ---
let usageMessage = "";

if (totalWeeklyScreenTime > 49) {
  usageMessage = "Your weekly screen time is high. Consider taking regular breaks.";
} else if (totalWeeklyScreenTime > 30) {
  usageMessage = "Your screen time is moderate. Try balancing it with offline activities.";
} else {
  usageMessage = "Your screen time is low. Great job maintaining balance!";
}

// Display it on the page
const usageOutput = document.createElement("p");
usageOutput.textContent = usageMessage;
document.getElementById("social-media-impact").appendChild(usageOutput);


// --- SWITCH STATEMENT: Display fact based on favorite platform ---
let favoritePlatform = platform2; // Change this to test: platform1, platform2, or platform3
let platformFact = "";

switch (favoritePlatform) {
  case "Instagram":
    platformFact = "Instagram is widely used for photo sharing and influencer marketing.";
    break;
  case "TikTok":
    platformFact = "TikTok is known for short-form videos and viral trends.";
    break;
  case "Twitter":
    platformFact = "Twitter is popular for real-time news and trending discussions.";
    break;
  default:
    platformFact = "Select a valid platform to learn more.";
}

// Display it on the page
const factOutput = document.createElement("p");
factOutput.textContent = `Fun Fact about ${favoritePlatform}: ${platformFact}`;
document.getElementById("social-media-impact").appendChild(factOutput);
