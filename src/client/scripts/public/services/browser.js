/*******************************************************
 * BROWSER DETECTION SERVICE
 * ----------------------------------------------------
 * HOW TO USE
 - import Browser from './browser.js';
 - import Browser, { BrowserInfo } from './browser.js';
 * API
 - BrowserInfo; :object
 - Browser.getBrowserName(); :string
 *******************************************************/
import Bowser from '../../generated/bowser/bowser.js';

const ua             = window.navigator.userAgent;
const BrowserInfo    = Bowser.parse(ua);
const BrowserService = Bowser.getParser(ua);

/* Export it!
 *************/
export { BrowserService as default, BrowserInfo };