//function Button() {
/*const Button = (props) => {
    return (
        <div className='my-2'>
            <button className='bg-blue-400 text-white px-5 hover:bg-blue-700 py-3 rounded-full'>
                {props.name}
            </button>
        </div>
    );
} 
    export default Button; 
    const Button = (props) => { //ES6 prrops data can not be change weather it is a class or mehtod with respect to the props.
    props.name='Not supported !';
    return (
        <div className='my-2'>
            <button className='bg-blue-400 text-white px-5 hover:bg-blue-700 py-3 rounded-full'>
                {props.name}
            </button>
        </div>
    );
}
export default Button; 

pure function
funcation sum(a,b){
return a+b;
}

inpure function
funcation add(a,c){
a=10;
c=20

return a+c;
}
In React only pure function is available 
*/
const Button = ({ name, text }) => { //ES6
    return (
        <div className='my-2'>
            <button className='bg-blue-400 text-white px-5 hover:bg-blue-700 py-3 rounded-full'>
                {name}
            </button>
            <p> {text}</p>
        </div>

    );
}
export default Button; 
