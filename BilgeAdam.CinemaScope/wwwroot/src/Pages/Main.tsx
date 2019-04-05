import * as React from "react";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <Link to="search">
                        <div className="single-feature-item-01  wow zoomIn" style={{ visibility: "visible", animationName: "zoomIn" }}>
                            <div className="icon">
                                <i className="flaticon-search"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Film Ara</h4>
                                <p>Aklında gelen ilk filmi ara veya merak ettiğin bir film hakkında fikir edin</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Link to="random">
                        <div className="single-feature-item-01  wow zoomIn" style={{ visibility: "visible", animationName: "zoomIn" }}>
                            <div className="icon">
                                <i className="flaticon-bullseye"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Öne Çıkanlar</h4>
                                <p>Ne izlesem diye düşünmek istemiyorsan biz sana derlediğimiz bir kaç filmi önerebiliriz. </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Link to="/wishlist">
                        <div className="single-feature-item-01  wow zoomIn" style={{ visibility: "visible", animationName: "zoomIn" }}>
                            <div className="icon">
                                <i className="flaticon-paper"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Daha Sonra İzle</h4>
                                <p>Sonradan izlemek istediklerin olabilir. Hepsini buraya sakladık. Arşivine buradan erişebilirsin</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}