let radiusOutput = document.getElementById('radius');/*const radiusOutput = document.getElementById('radius');*/
let areaOutput = document.getElementById('area');/*const areaOutput = document.querySelector('area');*/

let area = 0;
const PI = 3.14159;/*const PI == 3.14159;*/

let radius = 10;/*const radius = 10;*/
area = PI * radius * radius;

radiusOutput.textContent = radius;/*radiusOutput = radius;*/
areaOutput.textContent = area;/*areaOutput = area;*/

radius = 20;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;