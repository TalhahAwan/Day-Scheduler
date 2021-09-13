var date = $("#currentDay");

setInterval(function () {
    date.text(moment().format("MMM Do YYYY - hh:mm:ss"));
}, 1000);

