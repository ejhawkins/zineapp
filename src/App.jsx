import React from 'react';
import MyLogo from './myLogo';
import './style.css';
import Canny from 'canny-sdk';

function App() {
  useEffect(() => {
    Canny.init({
      appID: '61656c7e4d39c94e1e9a1758'
    });

    // Identify the current user
    Canny('identify', {
      email: 'user@example.com',
      name: 'John Doe',
      id: 'user_123'
    });
  }, [])
  return (
    <div>
      <a data-canny-link href="https://erica-j-hawkins.canny.io">
        Give feedback
      </a>
      !-- Download Canny SDK -->
        <script>!function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}}(window,document,"canny-jssdk","script");</script>

        <!-- Use the Canny SDK to identify the current user of your website -->
        <script>
        Canny('identify', {
          appID: '61656c7e4d39c94e1e9a1758',
          user: {
            // Replace these values with the current user's data
            email: user.email,
            name: user.name,
            id: user.id,

            // These fields are optional, but recommended:
            avatarURL: user.avatarURL,
            created: new Date(user.created).toISOString(),
          },
        });
        </script>
     
      <div className="my-logo"> <MyLogo /></div>
      <div className="introduction-load">

   

      <div className="overlap-wrapper">
     

        <div className="overlap">
       
     
          <div className="iphone-plus">
         
          <div className="horizontal-scroll-container">
              <div class="item">
                
                <p className="WE-SEEK-EXPERIENCES">
                  <p className="ENTRIES-ABOUT-MUSIC">
                    ENTRIES ABOUT <br />
                    MUSIC AND FASHION
                  </p>
                  WE SEEK
                  <br />
                  EXPERIENCES
                  <br />
                  OF HARMONY AND AN <br />
                  AVANT-GARDE
                  <br />
                  FANTASY
                  <br />
                  IN ALL FORMS <br />
                  OF VISUAL <br />
                  COMMUNICATION.
                  <p className="text-wrapper">IT’S NIRVANA</p>
                  <div className="ellipse-2">
                  <p className="HOLD-HERE-TO-EXPLORE">Coming Soon</p>
                  </div>
                </p>
              </div>
              <div class="item-desktop">
                
                <p className="WE-SEEK-EXPERIENCES">
                  <p className="ENTRIES-ABOUT-MUSIC">
                    ENTRIES ABOUT MUSIC AND FASHION  </p> WE SEEK EXPERIENCES OF HARMONY AND AN AVANT-GARDE FANTASY IN ALL FORMS OF VISUAL COMMUNICATION.
                 
                  <p className="text-wrapper">IT’S NIRVANA</p>
              
                  <p className="HOLD-HERE-TO-EXPLORE-desktop " style={{ fontSize: '1rem' }}> Mobile Experience - COMING SOON</p>
                 
                </p>
              </div>
          </div>
          
           
          </div>
          
        
   

        </div>
      </div>
    </div>
    </div>
  );
};
 
export default App;
