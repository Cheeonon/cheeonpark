let form = document.getElementById("posts__form");
let text = document.getElementById("posts__text");
let output = document.getElementById("posts__output");
let msg = document.getElementById("posts__msg");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
    generatePost();
    e.target.reset();
});

let formValidation = (() => {
    if (text.value === ""){
        msg.innerText = "Post cannot be blank.";
    } else{
        msg.innerText = "";
    }
});

let generatePost = (()=> {
    output.innerHTML += `
    <div class="posts__post">
        <p class="posts__post-text">${text.value}</p>
    </div>
    `;
})