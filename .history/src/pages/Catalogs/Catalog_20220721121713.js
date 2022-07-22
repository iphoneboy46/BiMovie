import React from 'react'

import { useParams } from 'react-router-dom'
import PageHeader from '../../components/pageHeader/PageHeader'

import {category as cate} from '../../api/tmdbApi'

export default function Catalog() {
  const {category} = useParams()
  console.log(category);

  return (
    <div>
        <PageHeader>
            {category === cate.movie ? 'Movies' : 'TV series'}
        </PageHeader>
    </div>
  )
}
