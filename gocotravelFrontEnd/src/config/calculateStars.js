import React from "react";
const CalculateStars = (props) => {
    

  try {
      let stars=1;
      console.log("here in calculate");
    if(props>=100)
    return stars=5;
    else if(props>=80)
    return stars=4;
    else if(props>=60)
    return stars=3;
    else if(props>=40)
    return stars=2;
    else
    return stars;
  } catch (e) {
    console.log(e);
  }
};
export default CalculateStars;
