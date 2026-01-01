function checkNews() {
  const text = document.getElementById("newsInput").value.toLowerCase().trim();
  const result = document.getElementById("result");

  if (!text) {
    alert("Paste news text!");
    return;
  }

  result.innerHTML = "🔍 Analyzing news credibility...";

  // CLEAR FALSE FACTS (basic knowledge)
  const clearFalseFacts = [
    "weeks have only 6 days",
    "earth is flat",
    "sun revolves around earth",
    "humans can live without oxygen"
  ];

  // Fake indicators
  const fakeClaims = [
    "cure", "guaranteed", "miracle", "secret",
    "overnight", "instantly", "100%", "magic",
    "aliens are alive", "immortal"
  ];

  // Trusted sources
  const trustedSources = [
    "nasa", "who", "bbc", "reuters",
    "government", "study", "research", "scientists"
  ];

  let fakeScore = 0;
  let realScore = 0;

  // Check clear false facts
  clearFalseFacts.forEach(fact => {
    if (text.includes(fact)) fakeScore += 5;
  });

  fakeClaims.forEach(word => {
    if (text.includes(word)) fakeScore += 2;
  });

  trustedSources.forEach(word => {
    if (text.includes(word)) realScore += 2;
  });

  // Very short + no source = suspicious
  if (text.split(" ").length < 4) {
    fakeScore++;
  }

  setTimeout(() => {const emotion = document.getElementById("emotion");
emotion.className = "";
emotion.innerHTML = "";
const soundReal = document.getElementById("sound-real");
const soundFake = document.getElementById("sound-fake");
const soundUnsure = document.getElementById("sound-unsure");


if (fakeScore > realScore) {
  result.innerHTML = "❌ FAKE NEWS (False or misleading claim)";
  result.style.color = "red";

  emotion.innerHTML = "😡";
  emotion.classList.add("sad");
  document.getElementById("confidence-fill").style.width = "95%";
document.getElementById("confidence-fill").style.background = "red";
document.getElementById("confidence-text").innerHTML = "Confidence: 95%";


} else if (realScore > fakeScore) {
  result.innerHTML = "✅ REAL NEWS (Credible context)";
  result.style.color = "lightgreen";

  emotion.innerHTML = "😊";
  emotion.classList.add("happy");
document.getElementById("confidence-fill").style.width = "85%";
document.getElementById("confidence-fill").style.background = "limegreen";
document.getElementById("confidence-text").innerHTML = "Confidence: 85%";

} else {
  result.innerHTML = "⚠️ UNCERTAIN (Needs verification)";
  result.style.color = "orange";

  emotion.innerHTML = "🤔";
  emotion.classList.add("think");
  document.getElementById("confidence-fill").style.width = "55%";
document.getElementById("confidence-fill").style.background = "orange";
document.getElementById("confidence-text").innerHTML = "Confidence: 55%";

}

   
  }, 1000);
}
function clearAll(){
  document.getElementById("newsInput").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("emotion").innerHTML = "";
  document.getElementById("confidence-fill").style.width = "0%";
  document.getElementById("confidence-text").innerHTML = "";
}

