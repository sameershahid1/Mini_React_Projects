import React from 'react'

//Importing Styled Component
import { StyledCard } from '../Styles/Card.style';
import { Flex } from '../Styles/Flex.style';



const Card = ({item:{id,title,body,image}}) => {
const dd=image;
return (
    <StyledCard layout={ id%2===0 && 'row-reverse'}>
    <div>
         <h2>{title}</h2>
         <p>{body}</p>
    </div>
    <div>
        <img src={image} alt={title} />
    </div>
    </StyledCard>
  )
}

export default Card