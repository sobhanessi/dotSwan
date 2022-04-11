import React from 'react';
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

function Feature3Section() {
  return (
    <div id='feature-3-section'>
      <div id='support'>
        <p id='support-first-p'>We support you in 5 different languages</p>
        <p id='support-second-p'>
          Our support team in here to help you in 5 languages - English, French,
          Spanish,Polish and German.
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
  );
}

export default Feature3Section;
