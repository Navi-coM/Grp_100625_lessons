const el = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false}
    }

    render() {
        if(this.state.liked) {
            alert(`You clicked button`)
        }

        return el(
            'button',
            { onClick: () => this.setState({liked: true}),
            className: 'btn_1'},
            'Click Me'
        )
    }
}

const domContainer = document.querySelector('#like-button');
const root = ReactDOM.createRoot(domContainer);

root.render(el(LikeButton));