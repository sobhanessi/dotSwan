import React from 'react';
import arrowRight from './pics/Arrow-Right 1.png';
import bars from './pics/BArs.png';

function Feature2Section() {
  return (
    <div id='feature-2-section'>
      <div id='cards'>
        <div id='cards-first-div'>
          <span id='balance'>
            <p id='balance-p'>Balance</p>
            <p id='balance-price'>$5,600</p>
          </span>
          <span id='last-transaction'>
            <p id='last-transaction-p'>Last Transaction</p>
            <p id='last-transaction-price' a>
              $230
            </p>
          </span>
        </div>
        <div id='cards-second-div'>
          <img src={bars} id='cards-second-div-img' />
        </div>
      </div>
      <div id='feature-2'>
        <div id='feature2'>
          <p id='feature-2-manage'>
            Manage your finances like a pro in no time
          </p>
          <p id='draft'>
            With Draft, book keeping, banking, and invoices are all in one
            place. You will always know where you stand.{' '}
          </p>
        </div>
        <button id='learn-more-button'>
          <span style={{ color: 'white', paddingRight: '20px' }}>
            Learn More{' '}
          </span>
          <img src={arrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Feature2Section;
