const fs = require("fs");
const path = "./videos.txt";

let data = fs.readFileSync(path, "utf8");

data = data.split("<ul>").join("");
data = data.split("</ul>").join(" ");
data = data.split("<li").join(" ");
data = data.split("</li>").join(" ");
data = data.split(">").join("|");
data = data.split("</li").join(" ");
data = data.split("</ul").join(" ");
data = data.split("data-time=").join(" ");
data = data.split('"').join(" ");
data = data.trim();
data = data.split(" ").join("");

data = data.split("\r\n").join("|");

data = data.split("|");


let times = [];




for (let i = 0; i < data.length; i++) {
  
   if (data[i + 1] === "ReduxVideo") {
      times.push(data[i]);
   }
   i++;
}



times = times.join(":");
times = times.split(":");





let totalInSeconds = 0;
for (let i = 0; i < times.length; i++) {
   times[i] = parseInt(times[i]);
   if (i === 0) {
      totalInSeconds += times[i] * 60;
   } else if (i % 2 === 0) {
      totalInSeconds += times[i] * 60;
   } else {
      totalInSeconds += times[i];
   }
}




let totalMinutes = totalInSeconds / 60;
let minutesWithSeconds = (totalMinutes - parseInt(totalMinutes)) * 60;




console.log(`El total de segundos de videos tipo "Redux" es: ${totalInSeconds} segundos`);
console.log(
   `El total de minutos y segundos de video tipo "Redux" es: ${parseInt(totalMinutes)} minutos con ${parseInt(
      minutesWithSeconds
   )} segundos`
);