import React from 'react'

import { useParams } from 'react-router-dom'
import PageHeader from '../../components/pageHeader/PageHeader'

import {category} from '../../api/tmdbApi'

export default function Catalog() {
  const {category} = useParams()
  console.log(category);

  return (
    <div>
        <PageHeader>

        </PageHeader>
    </div>
  )
}
