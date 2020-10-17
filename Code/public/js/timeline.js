const timeline = document.getElementById('timeline');

for (let i = 0; i < workExp.length; i++) {
    const exp = workExp[i];

    const card = document.createElement('div');
    card.classList.add('container-card');

    if (i % 2 == 0) {
        card.classList.add('left');
    } else {
        card.classList.add('right');
    }

    const content = document.createElement('div');
    content.classList.add('content');

    const position = document.createElement('h4');
    position.classList.add('font-weight-bold', 'mb-0');
    position.innerText = exp["title"];

    const company = document.createElement('h6');
    company.innerText = '@ ' + exp["company"];

    const description = document.createElement('p');
    description.classList.add('mt-4');
    description.innerText = exp["description"];

    const duration = document.createElement('p');
    duration.classList.add('mb-0');
    duration.style.textAlign = 'right';
    duration.style.fontWeight = '500';
    duration.innerText = exp['duration'];

    content.appendChild(position);
    content.appendChild(company);
    content.appendChild(description);
    content.appendChild(duration);
    card.appendChild(content);
    timeline.appendChild(card);
}