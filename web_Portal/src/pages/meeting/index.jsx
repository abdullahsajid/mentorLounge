import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZoomMtg } from '@zoom/meetingsdk';
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

const Meeting = () => {
  const param = useParams();
  
  var authEndpoint = 'https://mentorslounge-9da6e4f7046b.herokuapp.com/zoomPublic/createSDKJWT'
  var sdkKey = '7e2XT8n3QSuoJcQFuRVZw'
  var meetingNumber = param?.id
  var passWord = param?.pass
  var role = 1
  var userName = "test"
  
  var leaveUrl = 'http://localhost:3000'

  const getSignature = async (e) => {
    // e.preventDefault();
    console.log('Fetching signature...');
    try {
      const response = await fetch(authEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          meetingNumber: meetingNumber,
          role: role
        })
      });
      const data = await response.json();
      console.log('Signature fetched:', data.signature);
      startMeeting(data.signature);
    } catch (error) {
      console.error('Error fetching signature:', error);
    }
  };

  function startMeeting(signature) {
    console.log('Starting meeting...');
    document.getElementById('zmmtg-root').style.display = 'block'

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      patchJsMedia: true,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }


  return (
    <div>
      <button onClick={() => getSignature()}>start</button>
      wait...
    </div>
  );
};

export default Meeting;
