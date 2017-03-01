/**
 * Created by yiwang on 2017/2/6.
 */
var React = require('react');
import './navbar.scss';
import {Link,hashHistory} from 'react-router';


class Navbar extends React.Component {
    componentDidMount() {
        console.log('导航栏已插入真实dom');
    }

    componentWillUpdate() {
        console.log('导航栏正要重新渲染');
    }
    back(){
        hashHistory.goBack();
    }
    render() {
        let routers = this.props.routers;
        if(routers){
            return (
                <div>
                    <div className="navbar-header">
                        <i className="iconfont icon-fanhui1" onClick={this.back}></i>
                        {routers.map((router, i) => {
                            return (<Link to={router.router} key={i}>{router.name}{(routers && i === routers.length - 1) ? '' : '/'}</Link>);
                        })}
                    </div>
                   <div className="navbar-toobar">
                       {this.props.children}
                   </div>
                </div>
            );
        }
        else{
            return (
                <div>
                    <div className="navbar-header">

                    </div>
                    <div className="navbar-toobar">
                        {this.props.children}
                    </div>
                </div>
            );
        }

    }
}
export default Navbar;