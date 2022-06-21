const inputEl = document.getElementById('name')
const spanEl = document.getElementById('name-span')

const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
    name: "Name field",
  });
connection?.init("");

connection.subscribe((evt)=> {
    console.log(evt);
    if(evt.type === "DISPATCH") {
        const name = evt.state;
        spanEl.innerHTML = JSON.stringify(name);
        inputEl.value = name;
    }
})

inputEl.addEventListener('keyup',(evt)=> {
    spanEl.innerHTML = evt.target.value
    connection?.send("Text value", evt.target.value)
});