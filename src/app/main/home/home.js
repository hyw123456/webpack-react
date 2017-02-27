/**
 * Created by yiwang on 2017/2/5.
 */
var React = require('react');

import './home.scss';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
                data: 'da'
        };
      this.changeInput = this.changeInput.bind(this);

    }
    componentDidMount() {
        console.log('主页已插入真实dom');
    }

    componentWillUpdate() {
        console.log('主页正要重新渲染');
    }

    changeInput(event){
            console.log(event.target.value);
            this.setState({
                data: event.target.value
            });
    }
    render() {
        let data = this.state.data;
        return (
            <div className="body-content">
                <input type="text" onChange={this.changeInput}/>
                {data}
            </div>
        );
    }
}
export default Home;