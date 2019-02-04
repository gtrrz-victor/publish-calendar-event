const authorize = require('./src/authorize');
const appendEvent = require('./src/appendEvent');
const scrumSchedule = require('./src/scrumSchedule')
const {google} = require('googleapis');
const moment = require('moment')
const fs = require('fs');
const CREDENTIALS_PATH = 'credentials.json';
const FORMAT = 'YYYY-MM-DD';

// Load client secrets from a local file.
const credentials = fs.readFileSync(CREDENTIALS_PATH,{encoding:'utf8'});

const from = moment(process.argv[2])
const to = moment(process.argv[3])

const events = []
while(!from.isSame(to)){
    const whoWorks = scrumSchedule(from.format(FORMAT));
    if (whoWorks){
        events.push({
            date:from.format(FORMAT),
            whoWorks: whoWorks
        })
    }
    from.add(1, 'd')
}

authorize(JSON.parse(credentials),async (auth)=>{
    const calendar = google.calendar({version: 'v3', auth});
    await Promise.all(events.reduce((promises,{date,whoWorks})=>{
        promises.push(appendEvent(calendar, whoWorks, date))
        return promises
    },[]))
    console.log('All events have been created')
})

