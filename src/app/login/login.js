/**
 * Created by yiwang on 2017/2/5.
 */
import './login.scss';
var React = require('react');


import { browserHistory } from 'react-router';


class Login extends React.Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.state = {};
    }

    login(e) {
        console.log(this.refs.username.value);
        browserHistory.push('/main');
    }

    render() {
        return (
            <div className="login-div">
                <h1>标题</h1>
                <div className="login-box">
                    <div className="login-title">
                        请输入帐号密码
                    </div>
                    <div className="login-content">
                        <div className="div-input">
                            <i className="icon-login-user"></i>
                            <input type="text" ref="username" className="input"/>
                        </div>
                        <div className="div-input">
                            <i className="icon-login-psw"></i>
                            <input type="text" ref="password" className="input"/>
                        </div>
                        <button type="submit" onClick={this.login}>登录</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
