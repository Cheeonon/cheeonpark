let form = document.getElementById("posts__form");
let text = document.getElementById("posts__text");
let output = document.getElementById("posts__output");
let msg = document.getElementById("posts__msg");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("submit");
    formValidation();
    generatePost();
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
    <div>
      <p>${text.value}</p>
    </div>
    `;
});