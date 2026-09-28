function extract(id) {
    let content = document.getElementById(id);
    let text = content.textContent;

    let pattern = /\((.*?)\)/g;
    let matches = [...text.matchAll(pattern)];

    return matches.map(match => match[1]).join('; ');
}
