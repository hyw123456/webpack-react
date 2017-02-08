var React = require('react');
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import './main.scss';
var logo = require('../../assets/test.png');
import {config} from '../shared/config';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="login-toobar">
                 <Header/>
                </div>
                <div className="router-toobar">
                    <div className="router-toobar-content">
                        <img src={logo} alt="" />
                        <Link to="/main/home" activeClassName="active">首页</Link>
                        <Link to="/main/ohter" activeClassName="active">其他</Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

class Header extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
        this.state = {username: 'hyw'};
    }
    logout(){
        browserHistory.push('/login');
    }
    render() {
        return (
            <div className="login-toobar-content">
                您好,{this.state.username}
                <Link to="/main/updatePsw"><i className="iconfont icon-xiugaimima"></i>修改密码</Link>
                <a href="javascript:void(0)" onClick={this.logout}><i className="iconfont icon-tuichudenglu"></i>退出登录</a>
            </div>
        );
    }
}
export default Main;
