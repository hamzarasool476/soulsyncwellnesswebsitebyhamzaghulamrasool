document.addEventListener("DOMContentLoaded", () => {
  // Mood selector
  const moods = document.querySelectorAll(".mood");
  moods.forEach((mood) => {
    mood.addEventListener("click", () => {
      moods.forEach((item) => item.classList.remove("active"));
      mood.classList.add("active");
    });
  });

  // Give the check-in button a small personalized response
  const practiceBtn = document.getElementById("practiceBtn");
  const practiceResult = document.getElementById("practiceResult");

  const practices = {
    Calm: {
      space: "Try a 5-minute slow breathing practice. Inhale gently for 4 seconds, then exhale for 6.",
      reconnect: "Try a quiet 5-minute body scan and notice where you feel most at ease.",
      release: "Write down one thing you can leave unfinished today. Let it be enough.",
      clarity: "Take three slow breaths, then write one sentence about what matters most today."
    },
    Heavy: {
      space: "Give yourself two quiet minutes with no task. Put both feet on the floor and breathe slowly.",
      reconnect: "Place a hand over your heart and name three things you need right now.",
      release: "Write down what feels heavy, then circle the one part you can release for today.",
      clarity: "Ask yourself: what is one small thing that would make today 5% easier?"
    },
    Restless: {
      space: "Try ten slow breaths while relaxing your jaw, shoulders, and hands.",
      reconnect: "Step away from your screen for five minutes and notice five things around you.",
      release: "Take a short walk without your phone and let your attention move with your surroundings.",
      clarity: "Write every thought that is competing for your attention. Then choose only one."
    },
    Hopeful: {
      space: "Protect this feeling with five minutes of quiet reflection before moving to your next task.",
      reconnect: "Write one thing you appreciate about yourself and one thing you want to nurture.",
      release: "Choose one old expectation you no longer need to carry forward.",
      clarity: "Write down the next small step toward the future you are feeling hopeful about."
    }
  };

  practiceBtn.addEventListener("click", () => {
    const mood = document.querySelector(".mood.active")?.dataset.mood || "Calm";
    const feeling = document.querySelector('input[name="feeling"]:checked')?.value || "space";
    practiceResult.textContent = practices[mood][feeling];
  });

  // Newsletter demo
  const form = document.getElementById("newsletterForm");
  const message = document.getElementById("newsletterMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "Thank you. You're on the list.";
    form.reset();
  });
});