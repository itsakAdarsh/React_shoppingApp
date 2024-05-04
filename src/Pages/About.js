//rahul gade 8864906
import { Cart, Eye } from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";
import StaticBanner from "../UiCompnents/Banners/StaticBanner";

//about us page
function About() {

    return (
        <div>
            <StaticBanner Name="About Us" />
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h1 className="mb-4">Why Sofine?</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                        <img src={process.env.PUBLIC_URL + "img/cards/TheItalianLeatherSquareToeChelseaBoot2_540x.jpg"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
