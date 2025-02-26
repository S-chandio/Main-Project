function checkAddition() {
    const answer = document.getElementById('addAnswer').value;
    const feedback = document.getElementById('addFeedback');
    if (answer !== '' && parseInt(answer) === 5) {
      feedback.textContent = "Correct! Good job!";
      feedback.classList.remove('wrong');
      feedback.classList.add('correct');
    } else {
      feedback.textContent = "Try again!";
      feedback.classList.remove('correct');
      feedback.classList.add('wrong');
    }
  }
  
  function checkSubtraction() {
    const answer = document.getElementById('subAnswer').value;
    const feedback = document.getElementById('subFeedback');
    if (answer !== '' && parseInt(answer) === 3) {
      feedback.textContent = "Correct! Well done!";
      feedback.classList.remove('wrong');
      feedback.classList.add('correct');
    } else {
      feedback.textContent = "Try again!";
      feedback.classList.remove('correct');
      feedback.classList.add('wrong');
    }
  }
  
