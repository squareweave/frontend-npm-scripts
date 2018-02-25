import React from 'react';
import { render } from 'react-dom';
import "preact/devtools";

import Inputs from "./components/Inputs";

export default class PreactApp {
    constructor($div) {
        this.state = {
            text: $div.data('text')
        };
        console.log(this.state);
        render((<Inputs {...this.state} />), $div[0]);
    }
}
