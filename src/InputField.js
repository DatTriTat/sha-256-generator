import { sha256 } from 'js-sha256'
import React, { useState } from 'react'
import './index.css'

function InputField() {
  const [inputValue, setInputValue] = useState('');
  const [hashValue, setHashValue] = useState('');


  const handleClearValue = () => {
    setInputValue('');
  }

  const handleHashValue = () =>{
    setHashValue(sha256(inputValue));
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
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
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

      <div className="wrapperInput">
        <div className="sha-text">
            <div className="sha-title">
              <h2>FAQ</h2>
              <hr />
              <h3>What is SHA-256?</h3>
              <div className="sha-defi">
                <p>
                SHA-256 is one of the successor hash functions to SHA-1 (collectively referred to as SHA-2), 
                and is one of the strongest hash functions available.
                </p>
              </div>
              <hr />
              <h3>What is the output of SHA-256?</h3>
              <div className="sha-defi">
                <p>
                  SHA-256 generator allows users to generate an almost-unique 
                  256-bit (32-byte) signature for a text.
                </p>
              </div>
              <hr />
              <h3>What is SHA-256 used for?</h3>
              <div className="sha-defi">
                <p>
                  The hashing is a one-way method making it almost impossible to decrypt.
                  Therefore, it is a suit tool for authentication, password validation, 
                  digital signatures and etc.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default InputField
