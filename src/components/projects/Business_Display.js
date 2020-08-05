import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css";
class DataDisplay extends Component {
    componentDidMount() {
        const options = {
            duration: 300,
            fullWidth: true,
            numVisible: 10,
            
            onCycleTo: () => {
                console.log("New Slide");
            }
        };
        M.Carousel.init(this.Carousel, options);
        const options1 = {
            accordion: true
        }
        M.Collapsible.init(this.collapsible, options1)
    }
    back = (e) => {
        e.preventDefault();
        this.props.history.push('/admin');
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h4>{this.props.data.proj.bName}</h4>
                <div
                    ref={Carousel => {
                        this.Carousel = Carousel;
                    }}
                    className="carousel carousel-slider"
                >
                    {this.props.data.proj.downloadURLs.length < 1 ?
                        <a className="carousel-item">
                            <img alt="2" src={'two'} />
                        </a> : null}
                    {this.props.data.proj.downloadURLs.map(
                        (value, index) => {
                            return (<a className="carousel-item">
                                <img alt={index.toString} src={this.props.data.proj.downloadURLs[index]} />
                            </a>)
                        }
                    )}
                </div>
                <ul ref={collapsible => {
                    this.collapsible = collapsible;
                }} class="collapsible">
                    <li>
                        <div class="collapsible-header">{this.props.data.proj.bOwner}</div>
                        <div class="collapsible-body">
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header">Products</div>
                        <div class="collapsible-body"><span>{this.props.data.proj.bProducts}</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header">Address</div>
                        <div class="collapsible-body"><span>{this.props.data.proj.bAddress}</span></div>
                    </li>
                </ul>
                <h5>{this.props.data.proj.bOwner}</h5>
                
                <Link to={'/business/'}> <button>Back</button></Link>
                {/* new business dashoboard for back to reduce datacost*/}
            </div>
        )
    }
}
export default DataDisplay
