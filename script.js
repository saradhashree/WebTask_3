function checkAnswer(answer) {
  const result = document.getElementById("quizResult");
  if (answer === "Paris") {
    result.textContent = "Correct! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong! Try again.";
    result.style.color = "red";
  }
}
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeDisplay").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("jokeDisplay").textContent = "Could not fetch joke.";
    });
}