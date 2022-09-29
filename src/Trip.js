import { useState } from 'react'

const Trip = ({ id, name, info, image, price, removeTrip }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article key={id} className='trip'>
      <img src={image} alt='' />
      <div className='footer'>
        <div className='info'>
          <h4>{name}</h4>
          <h4 id='price'>${price}</h4>
        </div>
        <div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}`}
            <button id='read-more' onClick={() => setReadMore(!readMore)}>
              {readMore || 'Read More...'}
            </button>
          </p>
        </div>

        <button className='btn' onClick={() => removeTrip(id)}>
          Not Interested
        </button>
      </div>
    </article>
  )
}

export default Trip
