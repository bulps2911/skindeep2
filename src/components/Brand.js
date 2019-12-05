import React from "react";
import Card from "./Card";

function Brand(props){
    // const {products} = props;
    // const products= { imgUrl: "https://www.narscosmetics.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwee18bf36/hi-res/0607845064411.jpg?sw=1500&sh=1500&sm=fit", 
    //   shadeName: "coconut" }
    console.log("try this helo");
    console.log(props);
    

        return(
            <div className="Brand">
                <h2>
                    FENTY BEAUTY
                </h2>
                <Card props={props}/>
            </div>
        );
    
    
}

export default Brand;