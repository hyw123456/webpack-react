import React from 'react';

import {Route, IndexRedirect, IndexRoute} from 'react-router';


import App from './app';

import Login from './login/login';
import Main from './main/main';
// main下的页面
// 主页
import Home from './main/home/home';
// 商户管理
import Merchant from './main/merchant/merchant';
import MerchantList from './main/merchant/merchant-list';

// 修改密码
import UpdatePsw from './user/update-password';

const routes =
    <Route path="/" component={App}>
        <IndexRedirect to="main"/>
        <Route path="login" component={Login}/>
        <Route path="main" component={Main}>
            <IndexRedirect to="home"/>
            <Route path="home" component={Home}/>
            <Route path="ohter" component={Merchant}>
                <IndexRoute component={MerchantList}/>
            </Route>
            <Route path="updatePsw" component={UpdatePsw}/>
        </Route>
    </Route>;

export default routes;