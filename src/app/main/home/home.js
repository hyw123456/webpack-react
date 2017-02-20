/**
 * Created by yiwang on 2017/2/5.
 */
var React = require('react');

import './home.scss';
import Navbar from '../../shared/navbar/navbar';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            routers: [{name: '首页',router:'/main/home'},{name: '首页2'}]
        };
    }


    render() {
        return (
            <div className="body-content">
                <Navbar routers={this.state.routers}>
                   <div> <i className="iconfont icon-jia"></i>什么事吗标题</div>
                </Navbar>
                <img src="img/test/test.png" alt="" />
                <div className="css-img"></div>
            </div>
        );
    }
}
export default Home;