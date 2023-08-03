const randomNumber = Math.floor(Math.random() * 100) + 1;

let score = 20;

document.querySelector('.random-guess');

document.querySelector('.btn-submit').addEventListener('click', function() {
  const userInput = Math.ceil(Number(document.querySelector('.user-input').value));

  if (userInput < 1 || userInput > 100) {
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.error-message').innerText = 'Enter a valid input';
  } else {
    if (score > 1) {
      if(userInput === randomNumber) {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.error-message').style.color = 'green';
        document.querySelector('.error-message',).innerText = `You Won,score: ${score}`;
      }
      else{
        if(randomNumber > userInput) {
          document.querySelector('.error-message').style.display = 'block';
          document.querySelector('.error-message').innerText = 'Your guess is lower';
          score = score -1;
        }
        else if(randomNumber < userInput){
          document.querySelector('.error-message').style.display = 'block';
          document.querySelector('.error-message').innerText = 'Your guess is greater';
          score = score -1;
        }
      }
    }else{
        if(userInput > randomNumber){
          document.querySelector('.error-message').style.display = 'block';
          document.querySelector('.error-message').innerText = 'Game Over';
        }else{
          document.querySelector('.error-message').style.display = 'block';
          document.querySelector('.error-message').innerText = 'Game Over';
        }
      }
  }


});

