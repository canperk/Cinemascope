import * as React from "react";
import { Route } from 'react-router';
import Main from "../Pages/Main";
import Search from "../Pages/Search";
import Random from "../Pages/Random";
import WishList from "../Pages/WishList";

export default class Shell extends React.Component {
    render() {
        return (
            <div>
                <div className="header-bottom-area padding-top-130">
                    <div className="container">
                        <Route exact path='/' component={Main} />
                        <Route path='/search' component={Search} />
                        <Route path='/random' component={Random} />
                        <Route path='/wishlist' component={WishList} />
                    </div>
                </div>
            </div >
        );
    }
}