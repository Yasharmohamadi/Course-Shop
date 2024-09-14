import React from 'react'
import './SectinHeader.css'

export default function SectinHeader({title}) {
  return (
    <div className='section-header'>
        <h3 className='section-header_title'>{title}</h3>
    </div>
  )
}
