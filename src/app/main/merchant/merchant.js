/**
 * Created by yiwang on 2017/2/5.
 */
var React = require('react');
import './merchant.scss';


class Merchant extends React.Component {
    render() {
        return this.props.children;
    }
}
export default Merchant;