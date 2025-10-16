function Hello(props) {
    return <h1>Hello {props.title}!</h1>

    //  return el(
    //         'h1',
    //         'Hello'
    //     )
}


const domContainer = document.querySelector('#react-inner');
const root = ReactDOM.createRoot(domContainer);
root.render(<Hello title='Beetroot'/>);
