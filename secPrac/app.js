const title = document.querySelector(".hello h1");

let count = 0;

function handleTitleClick() {
    console.log("title was clicked!")
    count++;
    title.textContent += "a";
    if (count % 2 == 1)
        title.style.color = "blue";
    else
        title.style.color = "black";
}

title.addEventListener("click", handleTitleClick);