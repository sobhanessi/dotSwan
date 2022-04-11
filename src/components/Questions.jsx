import React from 'react';

function Questions() {
  const expandQuestion = () => {
    console.log('nothing');
  };
  return (
    <React.Fragment>
      <div id='faq'>
        <p id='plans-faq'>
          Frequently<span style={{ color: '#F44E77' }}> asked questions</span>
        </p>
        <p id='plans-faq-bottom'>
          If you are not sure whether Draft is suitable is for you or not, do
          not worry. We are here to explain everything you might want to know
        </p>
      </div>

      <div id='faq-question-1-div'>
        <span id='faq-question-1-p'>
          What is the difference between Draft and a traditional bank account?
        </span>
        <span id='plus-icon' onClick={expandQuestion}></span>
      </div>

      <div id='faq-question-2-div'>
        <span id='faq-question-1-p'>Who can open a Draft account?</span>
        <span id='plus-icon' onClick={expandQuestion}></span>
      </div>

      <div id='faq-question-3-div'>
        <span id='faq-question-1-p'>What if I withdraw money abroad?</span>
        <span id='plus-icon' onClick={expandQuestion}></span>
      </div>

      <div id='faq-question-4-div'>
        <span id='faq-question-1-p'>
          Can I cancel my subscrption or switch to another plan anytime?
        </span>
        <span id='plus-icon' onClick={expandQuestion}></span>
      </div>

      <div id='faq-question-5-div'>
        <span id='faq-question-1-p'>
          What happens if I withdraw more than $250?
        </span>
        <span id='plus-icon' onClick={expandQuestion}></span>
      </div>
    </React.Fragment>
  );
}

export default Questions;
