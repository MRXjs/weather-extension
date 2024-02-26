import React from 'react'
import { createRoot } from 'react-dom/client'
// import "./popup.css";

const test = <h1>Hello world</h1>

const root = document.createElement('div')
document.body.appendChild(root)

const reactRoot = createRoot(root)
reactRoot.render(test)
