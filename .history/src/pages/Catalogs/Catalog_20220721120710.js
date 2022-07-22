import React from 'react'

import { useParams } from 'react-router-dom'

export default function Catalog() {
  const {category} = useParams()
  console.log(category);

  return (
    <div>
        Catalog
    </div>
  )
}
