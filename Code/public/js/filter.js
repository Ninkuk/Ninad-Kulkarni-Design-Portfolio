const projectsContainer = document.getElementById('projects-container');
const filterBtnsContainer = document.getElementById('filter-btns');

const buttons = [{
        "tag": "all",
        "obj": "",
        "color": "#00BFA5",
        "icon": "fas fa-check"
    },
    {
        "tag": "java",
        "obj": "",
        "color": "#B55400",
        "icon": "fab fa-java",
    },
    {
        "tag": "firebase",
        "obj": "",
        "color": "#FFA611",
        "icon": "fas fa-server"
    },
    {
        "tag": "android",
        "obj": "",
        "color": "#3DDC84",
        "icon": "fab fa-android"
    },
    {
        "tag": "python",
        "obj": "",
        "color": "#FFD43B",
        "icon": "fab fa-python"
    },
    {
        "tag": "html",
        "obj": "",
        "color": "#F16529",
        "icon": "fab fa-html5"
    },
    {
        "tag": "css",
        "obj": "",
        "color": "#29A9DF",
        "icon": "fab fa-css3-alt"
    },
    {
        "tag": "js",
        "obj": "",
        "color": "#F8D732",
        "icon": "fab fa-js"
    },
    {
        "tag": "kotlin",
        "obj": "",
        "color": "#A05FFC",
        "icon": ""
    }
];

function generateButtons() {
    buttons.map(btn => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline', 'col-2', 'm-1');

        const icon = document.createElement('i');
        icon.setAttribute('class', (btn['icon']));

        if (btn['tag'] == 'kotlin') {
            const kotlinIcon = document.createElement('img');
            kotlinIcon.src = 'https://img.icons8.com/ios/15/FFFFFF/kotlin.png'
            button.appendChild(kotlinIcon);
        }

        // button.innerText = btn['tag'];
        button.appendChild(icon);
        button.innerHTML += " " + btn['tag'];
        btn['obj'] = button;

        filterBtnsContainer.appendChild(button);

        btn["obj"].addEventListener('click', () => {
            resetButtons();
            btn["obj"].setAttribute('class', 'btn btn-raised col-2 m-1');
            btn["obj"].style.backgroundColor = btn['color'];
            btn["obj"].style.color = "#FFFFFF";
    
            if (btn["tag"] == "kotlin") {
                btn['obj'].firstChild.src = 'https://img.icons8.com/ios/15/FFFFFF/kotlin.png';
            }
    
            showCards(btn["tag"]);
        });

    });
    
    resetButtons();
}

function resetButtons() {
    buttons.map(btn => {
        btn["obj"].setAttribute('class', 'btn btn-outline col-2 m-1');
        btn["obj"].style.backgroundColor = 'transparent';
        btn["obj"].style.color = btn["color"];

        if (btn['tag'] == 'kotlin') {
            btn['obj'].firstChild.src = 'https://img.icons8.com/ios/15/A05FFC/kotlin.png';
        }
    });
}


const projects = [{
        "img": "images/WebApp/P2F.jpg",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "tags": ['android', 'java', 'kotlin', 'firebase'],
        "url": "https://github.com/Ninkuk/FBLA_Mobile_App_Development"
    },
    {
        "img": "images/WebApp/PK.jpg",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "tags": ['html', 'css'],
        "url": "https://github.com/Ninkuk/Paolettis-Kitchen"
    },
    {
        "img": "images/WebApp/stephire.jpg",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "tags": ['html', 'css'],
        "url": ""
    },
    {
        "img": "images/WebApp/collated.jpg",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "tags": ['html', 'css'],
        "url": ""
    },
    {
        "img": "images/WebApp/pvlsites.jpg",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "tags": ['html', 'css'],
        "url": ""
    },
    {
        "img": "images/WebApp/stephire.jpg",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "tags": ['html', 'css'],
        "url": ""
    }
];

function showCards(tag) {
    projectsContainer.innerHTML = "";

    projects.map(project => {
        if (project['tags'].includes(tag) || tag == 'all') {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'col-lg-5', 'col-md-5');
            cardDiv.onclick = () => {
                location.href = project['url'];
            }

            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.style.borderBottomLeftRadius = '0px';
            cardImg.style.borderBottomRightRadius = '0px';
            cardImg.src = project['img'];

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.innerText = project['body'];

            const cardTags = document.createElement('div');
            cardTags.classList.add('row', 'm-0');

            project['tags'].map(tag => {
                const pill = document.createElement('span');
                pill.classList.add('badge', 'badge-pill', 'mx-1');

                const icon = document.createElement('i');
                for (let index = 0; index < buttons.length; index++) {
                    const btn = buttons[index];
                    if (btn['tag'] == tag) {
                        pill.style.backgroundColor = btn['color'];
                        icon.setAttribute('class', btn['icon']);
                        icon.style.color = "#FFFFFF";
                        break;
                    }
                }

                if (tag == 'kotlin') {
                    const kotlinIcon = document.createElement('img');
                    kotlinIcon.src = 'https://img.icons8.com/ios/15/FFFFFF/kotlin.png'
                    pill.appendChild(kotlinIcon);
                } else {
                    pill.appendChild(icon);
                }

                cardTags.appendChild(pill);
            });

            cardBody.appendChild(cardText);
            cardBody.appendChild(cardTags);

            cardDiv.appendChild(cardImg);
            cardDiv.appendChild(cardBody);

            projectsContainer.appendChild(cardDiv);
        }
    })
}