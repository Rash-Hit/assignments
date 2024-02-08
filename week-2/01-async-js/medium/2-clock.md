Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function getHour() {
  return new Date().getHours().toLocaleString();
}

function getMinute() {
  return new Date().getMinutes().toLocaleString();
}

function getSecond() {
  return new Date().getSeconds().toLocaleString();
}

function getMerediem() {
  return new Date().getHours() < 12 ? "AM" : "PM";
}

setInterval(() => {
  console.log(
    getHour() + ":" + getMinute() + ":" + getSecond() + " " + getMerediem(),
  );
}, 1000);
