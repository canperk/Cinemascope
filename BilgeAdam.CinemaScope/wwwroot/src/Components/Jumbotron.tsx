import * as React from "react";

export default class Jumbotron extends React.Component {
    render() {
        return (
            <div>
                <div className="header-area-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="header-inner">
                                    <div className="subwrap"><span className="subtitle">Kişisel Film Arşivi</span></div>
                                    <h1 className="title wow FadeInDown animated">Unuttum Deme! Listeye ekle, sırayla izle...</h1>
                                    <p>Online olarak dilediğin filmi, dilediğin yerde; zaman kaybetmeden ve kaldığın yerden izleme fırsatı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-right-image">
                    <div className="header-right-image-animation">
                        <img src="/images/header-right.png" alt="header right image" />
                    </div>
                </div>
            </div>
        );
    }
}