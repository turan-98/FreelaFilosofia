import "./Banner.css";
import banner from '../../assets/philosophy.jpg';
const Banner = () =>{
    return(
        <section className="banner-wrapper">
            <img src={banner} className="banner" alt="Casal"/>
        </section>
    )
}
export default Banner;