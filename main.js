'use strict';

{
  const quiz = document.getElementById('quiz');
  const answer = document.getElementById('input_message');
  const input_btn = document.getElementById('input_btn');
  const next_btn = document.getElementById('next_btn');
  const result = document.getElementById('result');

  const quizList = [
    {q: 'appendの意味は？', a: '追加'},
    {q: 'parentの意味は？', a: '親'},
    {q: 'childの意味は？', a: '子'}
  ];

  let currentNum = 0;
  let score;
  
  // クイズをセットする
  function setQuiz() {
    if(answer.disabled) {
      answer.disabled = false;
    }

    if(next_btn.classList.contains('active')) {
      next_btn.classList.remove('active');
    }

    if(answer.classList.contains('correct')) {
      answer.classList.remove('correct');
    } else if(answer.classList.contains('wrong')) {
      answer.classList.remove('wrong');
    }

    result.classList.add('hidden');
    input_btn.classList.remove('check_answer'); //btnのcheck_answerクラスを削除
    next_btn.classList.add('disabled'); //next_btnにdisabledクラスを追加
    quiz.textContent = quizList[currentNum].q;
  }

  setQuiz();

  //inputに答えを入力するとbtnの色が変化する
  function btnColor() {
    if(answer.value.length == 0) { //入力されていなければbtnの色は変更しない
      input_btn.classList.remove('check_answer');
    } else if(answer.value.length >= 1) {　//1文字でも入力されていればbtnの色を変更
      input_btn.classList.add('check_answer');
    }
  }

  // 答え合わせ
  function check_answer() {
    answer.disabled = true;
    if(answer.value === quizList[currentNum].a ) {
      answer.classList.add('correct');
      answer.value = `${answer.value} ...正解！`;
      score++;
    } else {
      answer.classList.add('wrong');
      answer.value = `${answer.value} ...不正解！`;
    }
    input_btn.classList.remove('check_answer');
  }

  // input['text']の入力を監視
  answer.addEventListener('input', () => {
    btnColor();
  });

  //input_btnを押すと答え合わせをする
  input_btn.addEventListener('click', () => {
    if(input_btn.classList.contains('check_answer')) {
      check_answer();

      next_btn.classList.remove('disabled');
      next_btn.classList.add('active');
    }
  });
  
  // next_btnを押すと問題を進める
  next_btn.addEventListener('click', () => {
    if(next_btn.classList.contains('disabled')) {
      return;
    } else if(currentNum < quizList.length - 1){ //最後の問題まで進める
      currentNum ++; //問題を1つ進める
      answer.value = ''; //inputの中を初期化する  
    }
    

    if(currentNum === quizList.length - 1) { //最後の問題でnext_btnの表示を変える
      next_btn.textContent = '結果発表！';

      next_btn.addEventListener('click', () => {
        result.classList.remove('hidden');
      });
    }

    setQuiz();
  });
}
