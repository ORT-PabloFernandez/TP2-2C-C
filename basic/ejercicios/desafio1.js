const fs = require('fs')
const path = '../../videos.txt'
let file = fs.readFileSync(path,'utf8')

const type = 'Redux'

function videoDurationTime(file, type=""){
    let line = file.split(/\r?\n/)
    const time = line.filter(l => l.includes(type))
                            .map(l => {
                                let beg = l.indexOf('"')
                                let end = l.indexOf(':')
                                let mins = l.slice(beg + 1, end)
                                let segs = l.slice(end + 1, end + 3)
                                return {mins: mins, segs: segs}
                            })
                            .reduce( (a,b) => {
                                return {
                                    mins: parseInt(a.mins) + parseInt(b.mins),
                                    segs: parseInt(a.segs) + parseInt(b.segs)
                                }
                            })
    
    return ( time.mins * 60 + time.segs )
}

console.log("La duración de todos los videos " + type + " es de: " + videoDurationTime(file, type) + " segundos.")