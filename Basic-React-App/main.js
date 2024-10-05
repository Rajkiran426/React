//const element='<div>Welcome to raj web dev !</div>';
//const element='<div>Welcome to raj web dev !</div>';

const element = React.createElement(
    'div',
    {},
    'Hello World !',
    React.createElement('h3', { className: "newStyle" }, 'Learning React')

)

const element2 = <div><div>Hello World!</div><h3>Learning React !</h3></div>

ReactDOM.render(element2, document.getElementById('app'));