var React = require('react');
var img = require('../../assets/test.png');
class Home extends React.Component {
    constructor() {
        super();
        // this._handleClick = this._handleClick.bind(this);
        this.state = { title: 'hyw' };
    }
    render() {
        let name = hex_md5('123456');
        let mode = process.env.NODE_ENV;
        let title = this.state.title;
        return (<div>
            <h1 className="title">{title}</h1>
            <img src={img} alt="" />
            <p>wqewqewqewqewqesadwqe</p>

        </div>
        );
    }
}
export default Home;
