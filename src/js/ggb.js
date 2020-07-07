export function loadCodebase(codeBase) {
    ggbApplet.setBase64(codeBase);
}

export function newConstruction() {
    ggbApplet.newConstruction();
}

export function updateDomain(domain) {
    ggbApplet.setVisible('Domain', true);
    ggbApplet.setValue('a', domain.leftEndpt);
    ggbApplet.setValue('b', domain.rightEndpt);
}

export function domainVisible() {
    ggbApplet.setVisible('Domain', true);
    ggbApplet.setVisible('A', true);
    ggbApplet.setVisible('B', true);
}

export function pointCapture(view, mode) {
    ggbApplet.setPointCapture(view, mode);
}

export function registerUpdateListener(name, callback) {
    ggbApplet.registerObjectUpdateListener(name, callback);
}

export function updateRange(center, radius) {
    if (center == 4) {
        ggbApplet.setValue('c', 0);
    } else if (center == 1) {
        ggbApplet.setValue('c', 2);
    } else {
        ggbApplet.setValue('c', 1);
    }
    ggbApplet.setValue('L', center);
    ggbApplet.setValue('Radius', radius);
    ggbApplet.setVisible('Range', true);
}

export function getRoundedValue(obj) {
    return Math.round(1000 * parseFloat(ggbApplet.getValue(obj))) / 1000
}