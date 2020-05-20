// DJ Uittenbogaard - duittenb@cisco.com
// JW Ruys - jruys@cisco.com
//
// v0.1       Info: Count maximum people, show notification when >max nr of people in the room
// v0.2       Changed text display method
// v0.3       (rudferna@cisco.com) Digital signage
const xapi = require('xapi');
xapi.config.set("Standby Signage Mode", "On");
xapi.config.set("WebEngine Mode", "On");


const maxPeople = 5
const alertDuration = 30
console.log('MACRO STARTED - COVID-19 People Count');

// display text on screen - can also be replaced by play-message, show-image, call-security etc
function displayTextOnScreen(text) {
  xapi.command('UserInterface Message Alert Display', {
  Title: 'COVID-19 ALERT',
  Text: text, Duration: alertDuration,
  });
}

// Process updated STATUS data
function postStatusCall(amount) {
   console.log('DEBUG - Detected: ' + amount + ', max: ' + maxPeople);
   if (amount > maxPeople) {
       console.log('DEBUG - Alerting');
       displayTextOnScreen("Too many people detected                       Room capacity = " + maxPeople);
       setTimeout(function(){ 
         xapi.config.set("Standby Signage Url", "https://www.wired.com/story/elegant-mathematics-social-distancing/");
        xapi.command('Standby Halfwake'); 
       }, 3000);
       
   };
}

// Get dynamic PEOPLE COUNT STATUS updates
xapi.status.on('RoomAnalytics PeopleCount Current', (numberofpeople) => postStatusCall(numberofpeople));