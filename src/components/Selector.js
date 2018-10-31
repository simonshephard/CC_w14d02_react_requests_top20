import React from 'react';

const Selector = (props) => {

  const options = props.list.map((item, index) => {
    return <option value={index} key={index}>{item.name}</option>
  });

  function handleChange(event) {
    console.log(event.target.value);
    props.onSelected(event.target.value);
  }

  return (
    <select id="selector" defaultValue="default" onChange={handleChange} >
      <option disabled value="default">Choose a list...</option>
      {options}
    </select>
  )
}

export default Selector;
