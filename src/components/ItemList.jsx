import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos}) => {
  return (
    <>
      {
          productos?.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                category={item.category}
                description={item.description}
                rating={item.rating.rate}
                price={item.price}
                stock={item.stock}
              />
          ))
      }
    </>
  )
}
