function app (){
    return React.createElement ("div",
    {
        classname: "border",
    },
    "Doboz",
    React.createElement(Boxcomponent),
    );
}

function Boxcomponent(props) {
    return React.createElement("div",
        {
            style: {
                width: "200px",
                height: "200px",
                backgroundcolor: props.hatterszin,
                
            },
            classname: "p-2 m-5 rounded",
        },
    
    );
}

ReactDom.render(React.createElement(App), document.getElementById("app-container"));