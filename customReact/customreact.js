function customeRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const i in reactElement.props) {
        domElement.setAttribute(i,reactElement.props[i])
    }
    container.appendChild(domElement)
}

// const reactElement = {
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

// {text:prabhjot}
const reactElement = {
  type: "input",
  props: {
    type: "text",
    value: "Prabhjot"
  },
  children: ""
}
// const maincontainer = document.querySelector('#root')

customeRender(reactElement,maincontainer)

