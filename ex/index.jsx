import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'


ReactDOM.render(
  <ClassComponent label='Contador' initialValue={10} value={10} />,
  document.getElementById('app')
)