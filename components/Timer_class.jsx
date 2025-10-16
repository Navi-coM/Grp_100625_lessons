const el = React.createElement;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0}
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Пройшло {this.state.seconds} секунд.
            </div>
        )
    }
}

const domContainer = document.querySelector('#timer');
const root = ReactDOM.createRoot(domContainer);

root.render(<Timer/>);