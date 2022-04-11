import React, { useState } from 'react';

function Questions() {
  const [expandDisplay1, setExpandDisplay1] = useState('none');
  const [expandDisplay2, setExpandDisplay2] = useState('none');
  const [expandDisplay3, setExpandDisplay3] = useState('none');
  const [expandDisplay4, setExpandDisplay4] = useState('none');
  const [expandDisplay5, setExpandDisplay5] = useState('none');
  const expandQuestion = (num) => {
    switch (num) {
      case 1:
        expandDisplay1 === 'none'
          ? setExpandDisplay1('block')
          : setExpandDisplay1('none');
        setExpandDisplay2('none');
        setExpandDisplay3('none');
        setExpandDisplay4('none');
        setExpandDisplay5('none');
        break;
      case 2:
        expandDisplay2 === 'none'
          ? setExpandDisplay2('block')
          : setExpandDisplay2('none');
        setExpandDisplay1('none');
        setExpandDisplay3('none');
        setExpandDisplay4('none');
        setExpandDisplay5('none');
        break;
      case 3:
        expandDisplay3 === 'none'
          ? setExpandDisplay3('block')
          : setExpandDisplay3('none');
        setExpandDisplay1('none');
        setExpandDisplay2('none');
        setExpandDisplay4('none');
        setExpandDisplay5('none');
        break;
      case 4:
        expandDisplay4 === 'none'
          ? setExpandDisplay4('block')
          : setExpandDisplay4('none');
        setExpandDisplay1('none');
        setExpandDisplay2('none');
        setExpandDisplay3('none');
        setExpandDisplay5('none');
        break;
      case 5:
        expandDisplay5 === 'none'
          ? setExpandDisplay5('block')
          : setExpandDisplay5('none');
        setExpandDisplay1('none');
        setExpandDisplay2('none');
        setExpandDisplay3('none');
        setExpandDisplay4('none');
        break;
      default:
        break;
    }
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
      <div
        id='questions-block'
        style={{ position: 'absolute', top: '5117px', left: '18%' }}
      >
        <div
          id='faq-question-1-div'
          style={{
            height: expandDisplay1 === 'block' ? '190px' : '96px',
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='faq-question-1-p'>
              What is the difference between Draft and a traditional bank
              account?
            </span>
            <span
              style={{ display: expandDisplay1, width: '730px' }}
              id='faq-question-1-p-2'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              dolores recusandae labore asperiores, nemo non accusamus
              aspernatur, quisquam necessitatibus iusto dolorem praesentium in
              quis consequatur corrupti porro tempore inventore debitis.
            </span>
          </span>
          <span id='plus-icon' onClick={() => expandQuestion(1)}></span>
        </div>

        <div
          id='faq-question-2-div'
          style={{
            height: expandDisplay2 === 'block' ? '190px' : '96px',
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='faq-question-1-p'>Who can open a Draft account?</span>
            <span
              style={{ display: expandDisplay2, width: '730px' }}
              id='faq-question-1-p-2'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              dolores recusandae labore asperiores, nemo non accusamus
              aspernatur, quisquam necessitatibus iusto dolorem praesentium in
              quis consequatur corrupti porro tempore inventore debitis.
            </span>
          </span>

          <span id='plus-icon' onClick={() => expandQuestion(2)}></span>
        </div>

        <div
          id='faq-question-3-div'
          style={{
            height: expandDisplay3 === 'block' ? '190px' : '96px',
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='faq-question-1-p'>What if I withdraw money abroad?</span>

            <span
              style={{ display: expandDisplay3, width: '730px' }}
              id='faq-question-1-p-2'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              dolores recusandae labore asperiores, nemo non accusamus
              aspernatur, quisquam necessitatibus iusto dolorem praesentium in
              quis consequatur corrupti porro tempore inventore debitis.
            </span>
          </span>
          <span id='plus-icon' onClick={() => expandQuestion(3)}></span>
        </div>

        <div
          id='faq-question-4-div'
          style={{
            height: expandDisplay4 === 'block' ? '190px' : '96px',
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='faq-question-1-p'>
              Can I cancel my subscrption or switch to another plan anytime?
            </span>
            <span
              style={{ display: expandDisplay4, width: '730px' }}
              id='faq-question-1-p-2'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              dolores recusandae labore asperiores, nemo non accusamus
              aspernatur, quisquam necessitatibus iusto dolorem praesentium in
              quis consequatur corrupti porro tempore inventore debitis.
            </span>
          </span>

          <span id='plus-icon' onClick={() => expandQuestion(4)}></span>
        </div>

        <div
          id='faq-question-5-div'
          style={{
            height: expandDisplay5 === 'block' ? '190px' : '96px',
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='faq-question-1-p'>
              What happens if I withdraw more than $250?
            </span>
            <span
              style={{ display: expandDisplay5, width: '730px' }}
              id='faq-question-1-p-2'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              dolores recusandae labore asperiores, nemo non accusamus
              aspernatur, quisquam necessitatibus iusto dolorem praesentium in
              quis consequatur corrupti porro tempore inventore debitis.
            </span>
          </span>

          <span id='plus-icon' onClick={() => expandQuestion(5)}></span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Questions;
