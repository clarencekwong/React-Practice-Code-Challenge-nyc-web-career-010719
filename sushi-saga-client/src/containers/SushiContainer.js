import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, grabFourSushis, handleClick, updateMoney, money, updatePlates}) => {

  const renderSushis = () => {
    return sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} updateMoney={updateMoney} money={money} updatePlates={updatePlates}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton handleClick={handleClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
