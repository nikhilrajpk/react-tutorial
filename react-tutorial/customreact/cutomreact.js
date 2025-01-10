const reactElements = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'Click me to go to google',
}

const root = document.querySelector('#root');

customRender(reactElements, root);

function customRender(reactElements, root){
    const domElement = document.createElement(reactElements.type);
    domElement.innerHTML = reactElements.children;
    for (let prop in reactElements.props){
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElements.props[prop]);
    }

    root.appendChild(domElement);
}