import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

const container = document.getElementById('app')
const root = createRoot(container!)  // ! 表示非空断言
root.render(<App />)
