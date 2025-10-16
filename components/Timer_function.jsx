const { useState, useEffect} = React;

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return <div>Пройшло {seconds} секунд.</div>
}

const domContainer = document.querySelector('#timer');
const root = ReactDOM.createRoot(domContainer);

root.render(<Timer />);