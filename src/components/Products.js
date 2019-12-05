import React from "react";
import "./Products.css";
import axios from "axios";
import Brand from "./Brand";
import Card from "./Card";

class Products extends React.Component {
  constructor(props) {
    super(props);
    //set initial state
    this.state = {
      // state used for filtering
      //oriproducts will never change
      oriproducts: [],
      products: []
    };
  }

  componentDidMount() {
    //fetch data + api call here
    console.log("HERE1");
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
        console.log("HERE3");
        console.log(this.state.products);
        // return this.setState({products: newData, oriproducts: newData});
      })
      .catch(err => console.log(err));
  }

  render() {
    const { products } = this.state;
    const { oriproducts } = this.state;
    console.log("HERE4");
    console.log(products);
    return (
      <div className="ProductContainer">
        {/* <header className="Products-header">PRODUCTS PAGE</header> */}
        <h2>Fenty Beauty</h2>
          <div className="Gallery">
            {this.state.products.map((each, idx) => (
              <div className="Card" key={idx}>
                {/* <Card src={each.imgUrl} alt={each.shadeName}/> */}
                <img src={each.imgUrl} height="150" width="150" />
                <h4>Shade is {each.shadeName}</h4>
              </div>
            ))}
          </div>
       
      </div>
    );
  }
}

export default Products;
