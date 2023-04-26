import { sha256 } from 'js-sha256'
import { useState } from 'react'

function InputField() {
  const [inputValue, setInputValue] = useState('')
  const [hashValue, setHashValue] = useState('')


  const handleClearValue = () => {
    setInputValue('')
  }

  const handleHashValue = () =>{
    setHashValue(sha256(inputValue))
  } 

  return (
    <section className="container">
      <div className="wrapperInput">
        <div className="hash-content">
          <div className="hash-in">
            <h2>INPUT STRING</h2>
            <div className="text-area">
              <textarea
                className="textarea"
                placeholder="Type here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}>
              </textarea>
            </div>

            <div className="btn-in">
              <div className="hashbtn">
                <button className="btn btn--hash" onClick={handleHashValue}>Generate</button>
              </div>

              <div className="clearbtn">
                <button className="btn btn--clear" onClick={handleClearValue}>Clear All</button>
              </div>
            </div>
          </div>

          <div className="hash-out">
            <h2>SHA-256 Output</h2>
            <p>{hashValue}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InputField
