import React from 'react';
import creditCard2 from './pics/Credit Card 2.png';

function Plans() {
  return (
    <React.Fragment>
      <div id='plans'>
        <div id='free-plans-1'>
          <p id='free-or-premium'>FREE</p>
          <p id='price'>$0/m</p>
          <p id='manage'>
            Manage your business with a simple and efficient account.
          </p>
          <button id='get-started'>Get Started</button>
          <div id='free-plans-1-img-div'>
            <img src={creditCard2} />
          </div>
          <div id='free-plans-1-functions'>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                10 free local transfer
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                10 free local transfer
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>Multi-user access</span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                Prepaid debit cards
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>Virtual cards</span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-1'></span>
              <span id='free-plans-1-functions-p-gray'>
                Priority 24/7 support
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-1'></span>
              <span id='free-plans-1-functions-p-gray'>
                Exchange 24 currencies
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-1'></span>
              <span id='free-plans-1-functions-p-gray'>
                Free payment to other Draft accounts
              </span>
            </div>
          </div>
        </div>
        <div id='free-plans-2'>
          <p id='free-or-premium'>PREMIUM</p>
          <p id='price'>$8/m</p>
          <p id='manage'>
            Priority support and multi-user access to maximize your
            productivity.
          </p>
          <button id='get-started'>Get Started</button>
          <div id='free-plans-1-img-div'>
            <img src={creditCard2} />
          </div>
          <div id='free-plans-1-functions'>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                10 free local transfer
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                10 free local transfer
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>Multi-user access</span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                Prepaid debit cards
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>Virtual cards</span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                Priority 24/7 support
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                Exchange 24 currencies
              </span>
            </div>
            <div id='free-plans-1-functions-1'>
              <span id='check-icon-2'></span>
              <span id='free-plans-1-functions-p-thick'>
                Free payment to other Draft accounts
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Plans;
