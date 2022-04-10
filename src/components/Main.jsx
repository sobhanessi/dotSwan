import React from 'react';
import arrowRight from './pics/Arrow-Right 1.png';
import bars from './pics/BArs.png';
import creditCard from './pics/Credit Card.png';
import creditCard2 from './pics/Credit Card 2.png';
import ellipse13 from './pics/Ellipse 13.png';
import ellipse14 from './pics/Ellipse 14.png';
import ellipse15 from './pics/Ellipse 15.png';
import ellipse16 from './pics/Ellipse 16.png';
import ellipse17 from './pics/Ellipse 17.png';
import ellipse18 from './pics/Ellipse 18.png';
import ellipse19 from './pics/Ellipse 19.png';
import ellipse20 from './pics/Ellipse 20.png';
import ellipse21 from './pics/Ellipse 21.png';
import ellipse22 from './pics/Ellipse 22.png';
import './css/mainPage.css';

function Main() {
  return (
    <main>
      <div id='feature-1-section'>
        <div id='feature-1'>
          <p id='feature-1-first-p'>One card for all your payments</p>
          <p id='feature-1-second-p'>
            Get 3% back on everything you buy with the Draft card. Register
            today and enjoy every aspect of your business.
          </p>
        </div>
        <div id='feature-1-img'>
          <img src={creditCard} alt='credit card in feature 1' id='' />
        </div>
      </div>

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
            <p id='manage'>Manage your finances like a pro in no time</p>
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
      <div id='feature-3-section'>
        <div id='support'>
          <p id='support-first-p'>We support you in 5 different languages</p>
          <p id='support-second-p'>
            Our support team in here to help you in 5 languages - English,
            French, Spanish,Polish and German.
          </p>
          <div id='support-profile-images'>
            <img src={ellipse13} id='ellipse13' />
            <img src={ellipse14} id='ellipse14' />
            <img src={ellipse15} id='ellipse15' />
            <img src={ellipse16} id='ellipse16' />
            <img src={ellipse17} id='ellipse17' />
            <img src={ellipse18} id='ellipse18' />
            <img src={ellipse19} id='ellipse19' />
            <span id='twenty'>+20</span>
          </div>
        </div>
        <div id='chat'>
          <div id='first-chat'>
            <div id='first-chat-img'>
              <img src={ellipse20} />
            </div>
            <div>
              <p id='first-chat-p'>Hi Mike, How can I help you?</p>
              <p id='first-chat-caption'>Clair, 12:22 pm</p>
            </div>
          </div>
          <div id='second-chat'>
            <div>
              <p id='second-chat-p'>
                <span dir='rtl' id='second-chat-p-transform'>
                  Hi Mike, How can I help you?
                </span>
              </p>
              <p id='second-chat-caption' style={{ float: 'right' }}>
                Mike, 12:24 pm
              </p>
            </div>
            <div id='second-chat-img'>
              <img src={ellipse21} />
            </div>
          </div>
          <div id='third-chat'>
            <div id='third-chat-img'>
              <img src={ellipse22} />
            </div>
            <div>
              <p id='third-chat-p'>
                <span style={{ width: '295px' }}>
                  Ok. No problem. We will take care of this.
                </span>
              </p>
              <p id='third-chat-caption'>Clair, 12:24 pm</p>
            </div>
          </div>
        </div>
      </div>
      {/*<p id='plans-exceptional'>
        An exceptional service,
        <span style={{ color: '#F44E77' }}> at the right price.</span>
      </p>
      <p id='plans-start'>
        Start with our free plan and switch to premium as you grow
      </p>
      <div id='plans-free-plan-1'></div>
      <p id='plans-free-plan-1-free'>FREE</p>
      <p id='plans-free-plan-1-price'>$0/m</p>
      <p id='plans-free-plan-1-manage'>
        Manage your business with a simple and efficient account
      </p>
      <div id='plans-free-plan-1-button-div'></div>
      <button id='plans-free-plan-1-button'>
        <span style={{ color: '#16194F', backgroundColor: 'white' }}>
          Get Started
        </span>
      </button>
      <img src={creditCard2} id='plans-free-plan-1-credit-card-img' />
      <span id='plans-free-plan-1-functions-group-10-check-icon-2'></span>
      <span id='plans-free-plan-1-functions-group-10-p'>
        10 free local transfer
      </span>
      <span id='plans-free-plan-1-functions-group-11-check-icon-2'></span>
      <span id='plans-free-plan-1-functions-group-11-p'>
        10 free local transfer
      </span>
      <span id='plans-free-plan-1-functions-group-12-check-icon-2'></span>
      <span id='plans-free-plan-1-functions-group-12-p'>Multi-user-access</span>
      <span id='plans-free-plan-1-functions-group-13-check-icon-2'></span>
      <span id='plans-free-plan-1-functions-group-13-p'>
        Prepaid debit cards
      </span>
      <span id='plans-free-plan-1-functions-group-14-check-icon-2'></span>
      <span id='plans-free-plan-1-functions-group-14-p'>Virtual cards</span>
      <span id='plans-free-plan-1-functions-group-15-check-icon-1'></span>
      <span id='plans-free-plan-1-functions-group-15-p'>
        Priority 24/7 support
      </span>
      <span id='plans-free-plan-1-functions-group-16-check-icon-1'></span>
      <span id='plans-free-plan-1-functions-group-16-p'>
        Exchange 24 currencies
      </span>
      <span id='plans-free-plan-1-functions-group-17-check-icon-1'></span>
      <span id='plans-free-plan-1-functions-group-17-p'>
        Free payment to other Draft accounts
      </span>
      <div id='plans-free-plan-2'></div>
      <p id='plans-free-plan-2-premium'>PREMIUM</p>
      <p id='plans-free-plan-2-price'>$8/m</p>
      <p id='plans-free-plan-2-manage'>
        Priority support and multi-user access to maximize your productivity.
      </p>
      <div id='plans-free-plan-2-button-div'></div>
      <button id='plans-free-plan-2-button'>
        <span style={{ color: '#16194F', backgroundColor: 'white' }}>
          Get Started
        </span>
      </button>
      <img src={creditCard2} id='plans-free-plan-2-credit-card-img' />
      <span id='plans-free-plan-2-functions-group-10-check-icon-2'></span>
      <span id='plans-free-plan-2-functions-group-10-p'>
        10 free local transfer
      </span>
      <span id='plans-free-plan-2-functions-group-11-check-icon-2'></span>
      <span id='plans-free-plan-2-functions-group-11-p'>
        10 free local transfer
      </span>
      <span id='plans-free-plan-2-functions-group-12-check-icon-2'></span>
      <span id='plans-free-plan-2-functions-group-12-p'>Multi-user-access</span>
      <span id='plans-free-plan-2-functions-group-13-check-icon-2'></span>
      <span id='plans-free-plan-2-functions-group-13-p'>
        Prepaid debit cards
      </span>
      <span id='plans-free-plan-2-functions-group-14-check-icon-2'></span>
      <span id='plans-free-plan-2-functions-group-14-p'>Virtual cards</span>
      <span id='plans-free-plan-2-functions-group-15-check-icon-1'></span>
      <span id='plans-free-plan-2-functions-group-15-p'>
        Priority 24/7 support
      </span>
      <span id='plans-free-plan-2-functions-group-16-check-icon-1'></span>
      <span id='plans-free-plan-2-functions-group-16-p'>
        Exchange 24 currencies
      </span>
      <span id='plans-free-plan-2-functions-group-17-check-icon-1'></span>
      <span id='plans-free-plan-2-functions-group-17-p'>
        Free payment to other Draft accounts
      </span>
      <p id='plans-faq'>
        Frequently<span style={{ color: '#F44E77' }}> asked questions</span>
      </p>
      <p id='plans-faq-bottom'>
        If you are not sure whether Draft is suitable is for you or not, do not
        worry. We are here to explain everything you might want to know
      </p>
      <span id='faq-question-1-div'></span>
      <span id='faq-question-1-p'>
        What is the difference between Draft and a traditional bank account?
      </span>
      <span id='faq-question-1-img'></span>
      <span id='faq-question-2-div'></span>
      <span id='faq-question-2-p'>Who can open a Draft account?</span>
      <span id='faq-question-2-img'></span>
      <span id='faq-question-3-div'></span>
      <span id='faq-question-3-p'>What if I withdraw money abroad?</span>
      <span id='faq-question-3-img'></span>
      <span id='faq-question-4-div'></span>
      <span id='faq-question-4-p'>
        Can I cancel my subscrption or switch to another plan anytime?
      </span>
      <span id='faq-question-4-img'></span>
      <span id='faq-question-5-div'></span>
      <span id='faq-question-5-p'>
        What happens if I withdraw more than $250?
      </span>
      <span id='faq-question-5-img'></span> */}
    </main>
  );
}

export default Main;
