export function shadow(o){return o._shadowRoot||(o._shadowRoot=o.shadowRoot||o.attachShadow({mode:"open"}))};