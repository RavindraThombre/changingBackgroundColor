const zodiac = document.getElementById("zodiac");

const body = document.body;

// body.style.background = "red";
// console.log(zodiac.value);

const changeBackground = () => {
    // console.log(zodiac.value);
    switch (zodiac.value) {
        case "scrpio":
            body.style.backgroundColor = "red";
            break;

        case "libra":
            body.style.backgroundColor = "green";
            break;

        case "bmw":
            body.style.backgroundColor = "blue";
            break;

        case "baleno":
            body.style.backgroundColor = "grey";
            break;

        case "thar":
            body.style.backgroundColor = "black";
            break;

        case "volvo":
            body.style.backgroundColor = "pink";
            break;
        default:
            body.style.backgroundColor = "#fff";
            break;
    }
};