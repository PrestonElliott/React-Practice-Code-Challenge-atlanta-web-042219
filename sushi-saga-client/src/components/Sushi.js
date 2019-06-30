import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate"> 
          { props.eaten ? null : 
          <img onClick={(e) => 
            props.eatSushi(props.sushi)} 
            src={props.sushi.img_url} 
            id={props.sushi.id} 
            width="100%"
            alt="Sushi!" />
          }
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi