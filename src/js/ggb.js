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

export function updateRange(radius, c, L) {
    ggbApplet.setValue('L', L);
    ggbApplet.setValue('c', c)
    ggbApplet.setValue('Radius', radius);
    ggbApplet.setVisible('Range', true);
}

export function getRoundedValue(obj) {
    return Math.round(1000 * parseFloat(ggbApplet.getValue(obj))) / 1000
}