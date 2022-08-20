import React from 'react';


const List=({people})=>{
    return (
        <>
          {people.map((data)=>{
             const {id,name,age,image}=data;
             return(
                 <article key={id} className="person">
                    <img src={image} alt='Image Missing'/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                 </article>     
             );
          })}
        </>
    );
};


export default List;
