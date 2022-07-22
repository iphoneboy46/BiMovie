import React from 'react'

import { useParams } from 'react-router-dom'
import PageHeader from '../../components/pageHeader/PageHeader'

export default function Catalog() {
  const {category} = useParams()
  console.log(category);

  return (
    <div>
        Catalog
    </div>
  )
}
