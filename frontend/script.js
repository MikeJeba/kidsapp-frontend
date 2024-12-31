let num1, num2, score = 0, questionCount = 0;
const totalQuestions = 10;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.getElementById('question').textContent = `${num1} + ${num2} = ?`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = num1 + num2;
    const result = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');

    if (userAnswer === correctAnswer) {
        result.textContent = 'Correct!';
        result.style.color = '#77dd77';
        score++;
    } else {
        result.textContent = 'Answer is wrong';
        result.style.color = '#ff6961';
    }

    scoreDisplay.textContent = `Score: ${score}`;
    document.getElementById('answer').value = '';
    questionCount++;

    if (questionCount >= totalQuestions) {
        showFinalResult();
    } else {
        generateQuestion();
    }
}

function showFinalResult() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('final-score').textContent = `Your Score: ${score}`;
}

function restartGame() {
    score = 0;
    questionCount = 0;
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('score').textContent = `Score: ${score}`;
    generateQuestion();
}

// async function saveScore(username, score) {
//     try {
//         console.log(`Saving score for ${username}: ${score}`);
//         // Simulating a save operation
//         return new Promise((resolve) => setTimeout(resolve, 1000));
//     } catch (error) {
//         console.error('Error saving score:', error);
//         alert('Failed to save score. Please try again later.');
//     }
// }

//

async function saveScore(username, score) {
    try {
        const response = await fetch('http://localhost:8080/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, score }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseBody = await response.text();

        // Try parsing as JSON, but handle plain text fallback
        try {
            const data = JSON.parse(responseBody);
            console.log('Score saved successfully:', data);
            return data;
        } catch (error) {
            console.log('Score saved successfully (plain text):', responseBody);
            return { message: responseBody };
        }
    } catch (error) {
        console.error('Error saving score:', error);
        alert('Failed to save score. Please try again later.');
    }
}


document.getElementById('username-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;

    if (!username.trim()) {
        alert('Please enter a valid username.');
        return;
    }

    await saveScore(username, score);
    alert('Score saved successfully!');
    restartGame();
});

window.onload = function() {
    generateQuestion();
    document.getElementById('score').textContent = `Score: ${score}`;
};





