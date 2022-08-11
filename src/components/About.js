import React from 'react'

export default function About(props) {
  return (
    <>
      <div className="container">
        <div className={`card bg-${props.mode === 'dark' ? 'dark' : 'none'} text-center mt-3`} style={{ height: '333px', color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '' : '#ffdee9c5', backgroundImage: props.mode === 'dark' ? 'none' : 'linear-gradient(0deg, #ffdee9c5 10%, #b5fffd7e 100%)' }}>
          <div className="card-header" style={{ fontSize: '22px', fontWeight: '550' }}>
            About
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '27px' }}>TextUtilz</h5>
            <p className="card-text mt-3 container text-center" style={{ fontSize: '23px', fontFamily: 'Quicksand' }}>
              TextUtilz is web app by which we can use text utilities like UpperCase, LowerCase, Remove extra spaces, etc from any text. TextUtilz is a React.js project. This project has been made as a part of learning React.js. I will add more functionalties to TextUtilz in near future.</p>
          </div>
        </div>
        <p className='text-center my-3' style={{ fontSize: '20px', color: props.mode === 'dark' ? 'white' : 'black' }}>Made with <span style={{ color: 'red' }}>❤</span></p>
      </div>
    </>
  )
}