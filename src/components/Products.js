import React from "react";
import "./Products.css";
import axios from "axios";
// import Brand from "./Brand";
// import Card from "./Card";

class Products extends React.Component {
  constructor(props) {
    super(props);
    //set initial state
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    //fetch data + api call here
    // console.log("HERE1");
    axios
      .get("https://skin-deep.herokuapp.com/productsapi")
      .then(result => {
        return result.data.finalResult.map(each => ({
          shadeName: `${each.shadeName}`,
          imgUrl: `${each.imgUrl}`
        }));
      })
      .then(newData => {
        //update state here, re-calls render
        this.setState({ products: newData });
        // console.log("HERE3");
        // console.log(this.state.products);
      })
      .catch(err => console.log(err));
  }

  render() {
    // const { products } = this.state;
    // console.log("HERE4");
    // console.log(products);
    return (
      <div className="ProductContainer">
        <h2>Fenty Beauty</h2>
          <div className="Gallery">
            {this.state.products.map((each, idx) => (
              <div className="Card" key={idx}>
                <img src={each.imgUrl} alt={each.shadeName}  height="150" width="150" />
                <h4>Shade {each.shadeName}</h4>
              </div>
            ))}
          </div>
       
      </div>
    );
  }
}

export default Products;
