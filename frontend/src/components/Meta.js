import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Rowanbooks',
  description: 'The best e-books at the best prices.',
  keywords: 'e-books, buy e-books, cheap e-books',
}

export default Meta
