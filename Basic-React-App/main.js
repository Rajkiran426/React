//const element='<div>Welcome to raj web dev !</div>';
//const element='<div>Welcome to raj web dev !</div>';

const element = React.createElement(
    'div',
    {},
    'Hello World !',
    React.createElement('h3', { className: "newStyle" }, 'Learning React')

)

const topic = 'Learning React !';

function getTopicName() {
    if (topic === 'Learning React !')
        return <div>{topic}</div>
    else
        return <div>Else Part !</div>
}

const element2 = (
    <div>
        <div className='newStyle' tabIndex="1">Hello World!</div>
        <h3>{topic}</h3>
        <h3>{getTopicName()}</h3>
        <h3>{2 + 2}</h3>
    </div>
);

ReactDOM.render(element2, document.getElementById('app'));