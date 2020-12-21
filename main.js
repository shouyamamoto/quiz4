'use strict';

{
  const answer = document.getElementById('input_message');
  const input_btn = document.getElementById('input_btn');
  const output_answer = document.getElementById('output_message');

  function outputAnswer() {
    const input_answer = answer.value
    output_answer.textContent = `入力した答えは「${input_answer}」です。`
  }

  input_btn.addEventListener('click', () => {
    outputAnswer();
  });
}
