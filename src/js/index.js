import { parameters, views } from './configGeo';
import './intervals'
import * as ggb from './ggb'
import '../styles.css'
import { elements, getInputValue, updateFeedbackSection, resetDOM } from './UI';
import Interval from './intervals';

let ggbApp = new GGBApplet(parameters, '5.0', views);

function update() {
    const c = getInputValue('c');
    const L = getInputValue('L');
    const radius = getInputValue('radius');
    ggb.updateRange(radius, c, L);
    ggb.domainVisible();
    ggb.pointCapture(1, 0);
    ggb.registerUpdateListener('A', updateDOM);
    ggb.registerUpdateListener('B', updateDOM);
    updateDOM();
}

function updateDOM() {
    let a = ggb.getRoundedValue('a');
    let b = ggb.getRoundedValue('b');
    let c = ggb.getRoundedValue('c');
    let L = ggb.getRoundedValue('L');
    updateFeedbackSection(a, b, c, L)
}

function newRange() {
    ggb.newConstruction();
    ggb.loadCodebase(parameters.ggbBase64);
    resetDOM();
}



function handleKeyPress(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        elements.submit1.click();
    }
}

window.onload = function() {
    ggbApp.inject('ggbApplet', 'preferHTML5');
    elements.c.focus();
    elements.submit.addEventListener('click', update);
    elements.newBtn1.addEventListener('click', newRange);
}
