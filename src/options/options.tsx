import React from 'react'
import { createRoot } from 'react-dom/client'
import './options.css'

const test = <img src="icon.png" alt="Logo" />

const root = document.createElement('div')
document.body.appendChild(root)

const reactRoot = createRoot(root)
reactRoot.render(test)
