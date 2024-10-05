//Normal html -virtual dom render everything
function render() {
    const element = `<div>
<div>Hello World</div>
<div><input type="text" /></div>
<div>${new Date().toLocaleTimeString()}</div>
</div>`;

    document.getElementById('app').innerHTML = element;
    // React - virtual dom do not render everything and uses the diff algorithm 
    const element2 = React.createElement(
        'div',
        null,
        React.createElement('div', null, 'Hello World.'),
        React.createElement('div', null, React.createElement('input', { type: 'text' })
        ),
        React.createElement('div', null, new Date().toLocaleTimeString()),
    );

    ReactDOM.render(element2, document.getElementById('app1'));
}
setInterval(render, 1000);