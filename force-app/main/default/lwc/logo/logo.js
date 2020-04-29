import { LightningElement, api } from 'lwc';
import googleLogo from './templates/googleLogo.html';
import salesforceLogo from './templates/salesforceLogo.html';

export default class Logo extends LightningElement {
    @api name;

    render() {
        if (this.name === 'googleLogo')
            return googleLogo;
        return salesforceLogo;
    }
}