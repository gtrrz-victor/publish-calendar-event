const {CALENDAR_ID} = require('../config/CALENDAR_ID.json')
let counterDelay = 0;
module.exports = function appendEvent(calendarAuthenticated, whoWorks, when){
  counterDelay +=1;
    return new Promise((ok, nok)=>{
      submitEvent(counterDelay*100,calendarAuthenticated,createEvent(whoWorks, when),ok,nok)
    })
}

function submitEvent(counterDelay, calendarAuthenticated,event, ok, nok, tries = 0){
  const maxTries = 5
  if (tries<maxTries){
    return setTimeout(function(){
      calendarAuthenticated.events.insert({
        calendarId: CALENDAR_ID,
        resource: event
      }, (err, res) => {
        if (err){
          console.warn(`Error when it is published ${event}. Try: ${tries} .Error: `, err);
          submitEvent(counterDelay, calendarAuthenticated,event, ok, nok, tries+1)
        }else{
          ok(res)
        }
      }
      );
    },counterDelay)
  }

  console.error(`Imposible publishing ${event}. Error: `, err);
  nok(event)
}


function createEvent(whoWorks, when){
    const createSummary = (summary,work)=>summary?`${summary} & ${work.alias}`: work.alias
    const onlyEmail = ({email})=> ({'email': email})
    return {
        'start': {
          'date': when
        },
        'end': {
          'date': when
        },
        'summary':whoWorks.reduce(createSummary,undefined),
        "attendees": whoWorks.map(onlyEmail)
      };
}