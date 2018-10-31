import React from 'react';

const ListDetail = (props) => {
  if (!props.name) {return null;}
  return (
    <div>
    <h3>Position: {props.position+1}</h3>
    <p>Name: {props.name}</p>
    <p>Artist: {props.artist}</p>
  </div>
  )
}

export default ListDetail;
