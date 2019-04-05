import * as React from "react";
import { Link } from "react-router-dom";

export default class WishList extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" className="btn btn-default" style={{ marginBottom: '20px' }}>
                    <span className="fa fa-home"></span> Ana Sayfa
                </Link>
                <div>
                    Wish List
                </div>
            </div>
        )
    }
}