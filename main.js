'use strict';

{
  const quiz = document.getElementById('quiz');
  const answer = document.getElementById('input_message');
  const input_btn = document.getElementById('input_btn');

  const quizList = [
    {q: 'appendの意味は？', a: '追加'},
    {q: 'parentの意味は？', a: '親'},
    {q: 'childの意味は？', a: '子'}
  ];

  let currentNum = 0;

  function setQuiz() {
    quiz.textContent = quizList[currentNum].q;
  }

  setQuiz();

  //btnを押すと答え合わせをする
  input_btn.addEventListener('click', () => {
  });
}
