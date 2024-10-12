
import './App.css';
import Button from './components/Buttons/Button';
import Main from './components/MainPage/Main';
function App() {
    return (
        <div className='container mx-auto'>
            <Button name='First Button' text='New Variable Testing.' />
            <Button name='Second Button' />

            <Main text='Good Morning' />
            <Main text='Good Morning from props.' />
        </div>
    );
}

export default App;
