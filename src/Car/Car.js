// import React from 'react'

// function car() {
//     return(
//         <div>This is Car!!</div>
//     )
// }

// const car = () => {
//     return(
//         <div>This si Car!</div>
//     )
// }

// const car = () => (
//     <div>
//         This is Car!!!
//         <strong> Test </strong>
//     </div>)



// export default car;

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
    </div>
)