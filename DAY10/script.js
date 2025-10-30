const ReactElement = React.createElement("div",{id:"outer"},
    React.createElement("div",{id:"inner1"},
        React.createElement("div",{id:"span-container"},
            [React.createElement("span",{},"HELLO LEARNERS!"),
               React.createElement("span",{},"WELCOME TO REACTJS")
            ]
        )
        ),
        React.createElement("div",{id:"inner2"},
            React.createElement("div",{id:"span-container"},
                [React.createElement("span",{},"HELLO LEARNERS!"),
                   React.createElement("span",{},"WELCOME TO REACTJS")
                ]
            )
        )
    ); 

const root = ReactDOM.createRoot(document.getElementById('root'));
const divElement =  React.createElement("div",{},"HELLO LEARNERS!");
root.render(divElement);
const divStyle={
    color:'blue',
    backgroundColor:'pink',
    fontSize:'20px',
    padding:'10px',
    border:'2px solid red',
    background:'yellow'
};
const ReactElementWithStyle=<div style={divStyle}>Styled Div Element</div>;
root.render(ReactElementWithStyle);