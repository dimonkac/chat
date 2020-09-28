const url = "http://172.30.2.62:7777";
let user;
const button = document.getElementById("button");
const input = document.getElementById("input");
const chat = document.getElementById("chat");
const section = document.getElementById("section");
// const mesege = document.getElementById("mesege");
const entermesage = document.getElementById("entermesage");
const mes = document.getElementById("mes");
const send = document.getElementById("send");

const onSubmit = () => {
  user = input.value;
  console.log(user);
  section.style.display = "none";
  chat.style.display = "block";
};
send.addEventListener("click", async () => {
  const messeg = {
    user,
    text: mes.value,
    time: Date.now(),
  };
  fetch(`${url}/message`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messeg),
  });
});
button.addEventListener("click", onSubmit);
