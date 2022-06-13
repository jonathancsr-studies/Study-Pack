const inputEl = document.getElementById('name')
const spanEl = document.getElementById('name-span')

const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
    name: "Name field",
  });
  connection?.init("");

inputEl.addEventListener('keyup',(evt)=> {
    spanEl.innerHTML = evt.target.value
    connection?.send("Text value", evt.target.value)
});