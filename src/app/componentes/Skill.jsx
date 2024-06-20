import React from 'react'

function Skill({nome,logo}) {
  return (
    <div>
        <div>{nome}</div>
        <img src={logo} width="100px"/>
    </div>
  )
}

export default Skill