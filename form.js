const form = document.getElementById("the-form");

form.addEventListener ("submit", (event) => {

    event.preventDefault();

    console.log(event.currentTarget);
});