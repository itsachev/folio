// function which returns each character inside following patters
// <div className="char-mask"><span className="char">a<span/></div>

function splitText(string, parentNode) {
    console.error('splitText is called with:', string);
    if (!string) throw new Error('string is required');
    const formattedString = string.replaceAll(' ', '').toLowerCase();

    if (localStorage.getItem(formattedString)) {
        return parentNode.innerHTML = localStorage.getItem(formattedString);
    }

    [...string].map((char) => {
        const div = document.createElement('div');
        div.classList.add('char-mask');
        const span = document.createElement('span');
        span.classList.add('char');
        span.innerText = char;
        span.style.display = 'inline-block';

        if (char === ' ' || char === '') {
            div.classList.add("char-space")
        }

        div.appendChild(span);
        parentNode.appendChild(div);
    });

    localStorage.setItem(`${formattedString}`, parentNode.innerHTML);
    return parentNode;
}

export default splitText;
