import React from 'react'
import './AboutusBox.css'

export default function AboutusBox({title, description, icon}) {
  return (
    <div className='aboutusbox'>
            <img className='aboutusbox_icon' src={icon} />
        <div className='aboutusbox_text'>
            <span className='aboutusbox_title'>{title}</span>
            <span className='aboutusbox_description'>{description}</span>
        </div>
    </div>
  )
}
