import React,{useState} from 'react'
import Tour from './Tour'

function Tours({tour,removeTour}) {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
         <div className='underline'></div>
      </div>
      <div>
         {tour.map(data=>(<Tour key={data.id} {...data} removetour={removeTour}></Tour>))}
      </div>
    </section>
  )
}

export default Tours