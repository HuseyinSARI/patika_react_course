import React from 'react'

function Header({number , data ,increment}) {
  console.log("Memo-Header Component Re-Rendered!");

  return (
    <div>
      <div>
      HeaderComponent - number: {number} name: {data.name}
      </div>
      <div>
        <button onClick={increment}>Click</button>
      </div>
    </div>
  )
}

export default React.memo(Header);