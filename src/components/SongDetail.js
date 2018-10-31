import React from 'react';

const SongDetail = (props) => {
  if (!props.name) {return null;}
  return (
    <div>
    <h3>Position: {props.position +1}</h3>
    <p>Title: {props.name}</p>
    <p>Artist: {props.artist}</p>
  </div>
  )
}

export default SongDetail;
