//const total = parts.reduce((s, p) => {
//  console.log('what is happening', s, p)
//  return someMagicHere
//})

const Total = (props) => {
    const propsArray = props.partsArray;
    const totalAmount = propsArray.reduce((item, addNum) => item + addNum);
    return <h3> Total amount of exercises:{totalAmount}</h3>;
  };

  export default Total;