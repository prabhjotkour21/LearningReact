import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Hi Jot Kour</h1>
    </div>
  )
}

//  MyApp m jo bhi likhte h jo end of the parse ki help se es code m convert hota 
//  h or agr hum directly ye hi code ko  render m pass kr de to parser ka ek step bch jayega na 

// const ReactElement = {
//     type: 'a',
//     props: {
//         // href: 'https://google.com',
//         // target: '_blank',
//         // id: 'btn1',
//         // class: 'btn',
//         // title:'google'
//     },
//     children: 'click me ||||'
// }


const element = React.createElement(
  "a",
  { href: "https://google.com" },
  "Click Me"
)

console.log(element)

const anotherReactElement = (
  <a href="https://google.com" target="_blank"> click here </a>
)
const anotherUser = "vijay Singh"

const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', traget: '_blank' },
  'Hey I am google',
  anotherUser
)
// ye to ek object h  ye esi liye nhi chal rha kyu  react ek pareticuller object 
// exptect krta h or ye object uske format m nhi h isiliye ye nhi chl rha

createRoot(document.getElementById('root')).render(
  
    // {/* <MyApp /> */}
  // MyApp()  ase bhi likh skte h kyu ki ye ek function hi to h
  // anotherReactElement
  ReactElement

  // <App/>
  
)




React.createElement(
  "a",
  null,

  {
    href:"https://google.com",
    target:"_blank"
  },
  null,
  "Google"
 )