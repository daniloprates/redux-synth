export default (props) => {

  return (`

    body {
      background-color: ${props.bg};
    }
    .panel-content {
      background: ${props.panelBg};
    }

    /* TEXT COLOR */
    .Panel label {
      color: ${props.textColor};
    }

    /* Active */
    button.active-true,
    button:active,
    .PanelRec button
    {
      background: ${props.inputActive};
    }

    input[type=range]::-webkit-slider-thumb {background: ${props.inputActive}; }

    input[type=range]::-moz-range-thumb {background: ${props.inputActive}; }

    input[type=range]::-ms-thumb {background: ${props.inputActive}; }


    /* COLOR LIGHT */
    .Panel select,
    .Panel button
    {
      background: ${props.inputBg};
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
      background: ${props.inputBg};
    }
    input[type=range]::-moz-range-track {
      background: ${props.inputBg};
    }
    input[type=range]::-ms-fill-lower {
      background: ${props.inputBg};
    }
    input[type=range]::-ms-fill-upper {
      background: ${props.inputBg};
    }
    input[type=range]:focus::-ms-fill-lower {
      background: ${props.inputBg};}
    }
    input[type=range]:focus::-ms-fill-upper {
      background: ${props.inputBg};
    }

    .PanelRec button {
      border-color: ${props.$};
    }

    .panel-container > div:before,
    .PanelKeyboard
    {
      background: ${props.colorMed}
    }


    /* COLOR MED */
    .panel-item {

    }


  `);

};
