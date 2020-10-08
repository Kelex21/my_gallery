function animateValue(id, start, end, duration) {
    let range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range));

    let obj = document.getElementById(id);
    let timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("posts", 0, 100, 3000);
animateValue("follower", 0, 843, 100);
animateValue("following", 0, 432, 4000);