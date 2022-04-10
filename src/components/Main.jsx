import React from 'react';
import arrowRight from './pics/Arrow-Right 1.png';
import bars from './pics/BArs.png';
import creditCard from './pics/Credit Card.png';
import creditCard2 from './pics/Credit Card 2.png';
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

      {/* <div
        className="feature-2-section"
        style={{
          // display: "flex",
          // flexDirection: "row",
          // position: "absolute",
          width: "946px",
          height: "458px",
          left: "247px",
          top: "1722px",
        }}
      > */}
      {/* <div
        className="cards"
        style={
          {
            // position: "absolute",
            // width: "463px",
            // height: "458px",
            // left: "247px",
            // top: "1722px",
          }
        }
      > */}
      {/* <div
        style={{
          position: 'absolute',
          width: '223px',
          height: '180px',
          left: '247px',
          top: '1722px',
          backgroundColor: 'white',
          border: '0.5px solid #CAD6F1',
          boxSizing: 'border-box',
          boxShadow: '0px 25px 50px rgba(22, 25, 79, 0.05',
          borderRadius: '50px',
        }}
      ></div>
      <p
        style={{
          position: 'absolute',
          width: '72px',
          height: '30px',
          left: '295px',
          top: '1750px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '150%',
          color: 'black',
        }}
      >
        Balance
      </p>
      <h3
        style={{
          position: 'absolute',
          width: '125px',
          height: '60px',
          left: '295px',
          top: '1768px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '150%',
          color: '#554DDE',
        }}
      >
        $5,600
      </h3>
      <div
        style={{
          position: 'absolute',
          width: '223px',
          height: '180px',
          left: '487px',
          top: '1722px',
          backgroundColor: 'white',
          border: '0.5px solid #CAD6F1',
          boxSizing: 'border-box',
          boxShadow: '0px 25px 50px rgba(22, 25, 79, 0.05',
          borderRadius: '50px',
        }}
      ></div>
      <p
        style={{
          position: 'absolute',
          width: '149px',
          height: '30px',
          left: '527px',
          top: '1750px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '150%',
          color: 'black',
        }}
      >
        Last Transaction
      </p>
      <h3
        style={{
          position: 'absolute',
          width: '92px',
          height: '60px',
          left: '527px',
          top: '1768px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '150%',
          color: '#554DDE',
        }}
      >
        $230
      </h3>
      <div
        style={{
          position: 'absolute',
          width: '463px',
          height: '248px',
          left: '247px',
          top: '1932px',
          backgroundColor: 'white',
          border: '0.5px solid #CAD6F1',
          boxSizing: 'border-box',
          boxShadow: '0px 25px 50px rgba(22, 25, 79, 0.05',
          borderRadius: '50px',
        }}
      ></div>
      <img
        src={bars}
        style={{
          position: 'absolute',
          width: '349.3px',
          height: '173px',
          left: '304px',
          top: '1970px',
        }}
      /> */}
      {/* </div> */}
      {/* <div
        className="feature2"
        // style={{ display: "flex", flexDirection: "column" }}
      > */}
      {/* <h1
        style={{
          position: 'absolute',
          width: '366px',
          height: '180px',
          left: '845px',
          top: '1759px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '50px',
          lineHeight: '120%',
          color: '#554DDE',
        }}
      >
        Manage your finances like a pro in no time
      </h1>
      <p
        style={{
          position: 'absolute',
          width: '366px',
          height: '90px',
          left: '842px',
          top: '1969px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '150%',
          color: '#6A6D9E',
        }}
      >
        With Draft, book keeping, banking, and invoices are all in one place.
        You will always know where you stand.{' '}
      </p>
      <button
        style={{
          position: 'absolute',
          width: '200px',
          height: '54px',
          left: '845px',
          top: '2089px',
          backgroundColor: '#16194F',
          borderRadius: '20px',
          color: 'white',
          fontSize: '15px',
          fontFamily: 'Roboto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Learn More{' '}
        <img
          src={arrowRight1}
          style={{
            marginLeft: '9px',
          }}
        />
      </button>
      {/* </div> */}
      {/* </div> */}
      {/*<h3 id='feature-3-section-support-feature-2-h3'>
        We support you in 5 different languages
      </h3>
      <p id='feature-3-section-support-feature-2-p'>
        Our support team in here to help you in 5 languages - English, French,
        Spanish,Polish and German.
      </p>
      <div id='feature-3-section-support-profile-images'> </div>
      <div id='feature-3-section-support-profile-images-ellipse-13'></div>
      <div id='feature-3-section-support-profile-images-ellipse-14'></div>
      <div id='feature-3-section-support-profile-images-ellipse-15'></div>
      <div id='feature-3-section-support-profile-images-ellipse-16'></div>
      <div id='feature-3-section-support-profile-images-ellipse-17'></div>
      <div id='feature-3-section-support-profile-images-ellipse-18'></div>
      <div id='feature-3-section-support-profile-images-ellipse-19'></div>
      <div id='feature-3-section-support-t-20'>+20</div>
      <div id='feature-3-section-chat-Mike-div'></div>
      <p id='feature-3-section-chat-Mike-p'>Hi Mike, How can I help you?</p>
      <div id='feature-3-section-chat-Mike-ellipse-20'></div>
      <div id='feature-3-section-chat-Mike-underline'>Clair, 12:22 pm</div>
      <div id='feature-3-section-chat-Credit-div'></div>
      <p id='feature-3-section-chat-Credit-p'>My credit card is stolen...</p>
      <div id='feature-3-section-chat-Credit-underline'>Mike, 12:24 pm</div>
      <div id='feature-3-section-chat-Credit-ellipse-21'></div>
      <div id='feature-3-section-chat-Problem-div'></div>
      <p id='feature-3-section-chat-Problem-p'>
        Ok. No problem. We will take care of this.
      </p>
      <div id='feature-3-section-chat-Problem-ellipse-22'></div>
      <div id='feature-3-section-chat-Problem-underline'>Clair, 12:25 pm</div>
      <p id='plans-exceptional'>
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
