const fs = require('fs');
const videos = '../../videos.txt';

const dataTimeRedux = fs.readFileSync(videos).toString().split("\n").
    // filter only Redux Video
    filter( line => line.includes('Redux Video')).
    // Return only DataTime into object like {minutes:"", seconds:""}
    map( line => {
        const dataTime = line.substring(line.indexOf('data-time="') + 11 , line.indexOf('">'));
        return {
            minutes: dataTime.split(':')[0], 
            seconds: dataTime.split(':')[1]
        };
    }).
    // Return total Minutes and Seconds into object like {minutes:"", seconds:""}
    reduce((prev, curr) => {
        return {
            minutes: parseInt(prev.minutes) + parseInt(curr.minutes),
            seconds: parseInt(prev.seconds) + parseInt(curr.seconds)
        }
    });
const totalSeconds = dataTimeRedux.minutes * 60 + dataTimeRedux.seconds;

console.log("Total seconds of Redux Videos are: " + totalSeconds);