import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import style from './index.module.less'

function App() {
  useEffect(() => {
    console.log('Hello, World!')
  }, [])

  return <h1 className={style.hello}>Hello, World!</h1>
}

ReactDOM.render(<App />, document.getElementById('root'))
