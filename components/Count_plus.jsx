const { useState } = React;

function CountPlus() {
    const [count, setCount] = useState(0);

    return <div>
        <h2>Counter: {count}</h2>
        

        <button onClick={() => setCount(count + 1)} className="btn_plus">+ Plus</button>
        <button onClick={() => setCount(count - 1)} className="btn_plus">- Minus</button>
        <button onClick={() => setCount(0)} className="btn_plus">Reset</button>
    </div>
}

const domContainer = document.querySelector('#count');
const root = ReactDOM.createRoot(domContainer);

root.render(<CountPlus />);