function mainContainer(visitGoogle, container){
    const domElement = document.createElement(visitGoogle.type)
}

const visitGoogle = {
    type: "a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.getElementById("#root");
customeRender(visitGoogle, mainContainer)