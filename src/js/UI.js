

export const elements = {
    secInput1: document.getElementById('user_inputPart1'),
    pInput1: document.getElementById('p_input1'),
    h3Input1: document.getElementById('h3_input1'),
    c: document.getElementById('c'),
    L: document.getElementById('L'),
    radius: document.getElementById('radius'),
    submit: document.getElementById('submit'),
    feedback: document.getElementById('feedback'),
    p_feedback: document.getElementById('p_feedback'),
    p_feedbackBtn1: document.getElementById('p_feedbackBtns1'),
    newBtn1: document.getElementById('newDom_button'),
}

export function updateFeedbackSection(a, b, c, L) {
    elements.secInput1.style.display = 'none';
    elements.feedback.style.display = 'block';
    elements.p_feedbackBtn1.style.display = 'block';
    let feedback = `<p>You chose \\(c = ${c}\\) and \\(L=${L}\\).</p><p></p>We are investigating \\(\\displaystyle{\\lim_{x \\to ${c}}f(x) = ${L}}\\)</p>
                    <p>Restricted domain: \\((${a}, ${b})\\)</p>`;
    elements.p_feedback.innerHTML = feedback;
    MathJax.typeset();
}

export function getInputValue(id) {
    return document.getElementById(id).value
}

export function resetDOM() {
    elements.feedback.style.display = 'none';
    elements.secInput1.style.display = 'block';
    elements.c.value = '';
    elements.L.value = '';
    elements.radius.value = '';
    elements.c.focus();
}
