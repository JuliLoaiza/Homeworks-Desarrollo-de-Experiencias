import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp'
import GiftExpertApp from './GiftExpertApp'
import { MultipleCustomHooks } from './components/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
