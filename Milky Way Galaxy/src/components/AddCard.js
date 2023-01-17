import React from 'react'
import BasicExample from './ShopCard'
function AddCard(props) {
  return (
    <div style={{display:"flex"}}>
      {props.data.filter((el)=>el.name.toLowerCase().includes(props.search.toLowerCase().trim())).map((e,index)=>{
        return(
            <div key={index}>
                <BasicExample planet={e} />
            </div>
        )
      })
      }
    </div>
      )
}

export default AddCard
