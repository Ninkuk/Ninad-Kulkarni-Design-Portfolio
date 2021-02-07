const buttons = [{
        "tag": "all",
        "obj": "",
        "color": "#00BFA5",
        "icon": "fas fa-check"
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
        "tag": "html/css",
        "obj": "",
        "color": "#F16529",
        "icon": "fab fa-html5"
    },
    {
        "tag": "js",
        "obj": "",
        "color": "#F8D732",
        "icon": "fab fa-js"
    },
    {
        "tag": "react",
        "obj": "",
        "color": "#61dafb",
        "icon": "fab fa-react"
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
        "tag": "kotlin",
        "obj": "",
        "color": "#A05FFC",
        "icon": ""
    }
];


const projects = [{
        "img": "images/WebApp/ANTM.jpg",
        "body": "Atmanirbhar Taurn Manch (Self-Reliant Youth Platform) is a nonprofit initiative by Maharashtra Samaj Tarun Manch to provide a platform for the newly started and growing local businesses.\n\nThrough this app, we hope to bring the exposure and traction required by these businesses to thrive, with the potential to take a leap of success.\n\nWith 200+ daily active users, ANTM serves the city of Indore (population of 2 million) and its surrounding localities. We are continuously making efforts to quickly expand this service to the entire state of Madhya Pradesh!",
        "tags": ['android', 'java', 'kotlin', 'firebase'],
        "url": "https://github.com/Ninkuk/Atmanirbhar-Tarun-Manch_Self-Reliance"
    },
    {
        "img": "images/WebApp/P2F.jpg",
        "body": "Built for a National Level competition (see below), this is the website of an imaginary home food delivery service called Paoletti's Kitchen.\n\nThis app was made in 2019 for the Future Business Leaders of America's (FBLA) Mobile Application Development Competition. The website won third place at the National Leadership Conference hosted in San Antonio, TX. It also won first place in Arizona State Leadership Conference and Region #3 Leadership Conference.\n\nRead more about it in achievements page.",
        "tags": ['android', 'java', 'kotlin', 'firebase'],
        "url": "https://github.com/Ninkuk/FBLA_Mobile_App_Development"
    },
    {
        "img": "images/WebApp/photoshelter.jpg",
        "body": "I helped ASU's Enterprise Marketing Hub migrate their entire university-wide ASU brand assets library from cloud service Photoshelter to ____.\n\nThe automation process involved using the Photoshelter developer API's to archive and download the entire catalog of assets while maintaining the catalog structure and preserving the metadata of the assets. The downloaded assets were concurrently uploaded to Dropbox as backup and ultimately to ____.\n\nThe entire process took only ____ hours, saving the hub weeks of painstaking labor and avoided the possibility of a loss of data due to potential human errors. This project also allowed for the creative team to migrate their workflow seamlessly with no loss of productivity.",
        "tags": ['python'],
        "url": "https://brandguide.asu.edu/about/about-the-enterprise-marketing-hub"
    },
    {
        "img": "images/WebApp/PK.jpg",
        "body": "Built for a National Level competition (see below), this is the website of an imaginary home food delivery service called Paoletti's Kitchen.\n\nThis website was made in 2018 for the Future Business Leaders of America's (FBLA) E-Business Competition. The website won First place at the National Leadership Conference hosted in Baltimore, MD. It also won First place in Arizona State Leadership Conference and Region #3 Leadership Conference.\n\nRead more about it in achievements page.",
        "tags": ['html/css', 'js'],
        "url": "https://github.com/Ninkuk/Paolettis-Kitchen"
    },
    {
        "img": "images/WebApp/pvlsites.jpg",
        "body": "As the class leader and mentor, I created the class site for Pinnacle High School's award-winning Graphic Design program.\n\nThis website is intended to be used by the course instructor and senior students to promote the Career and Technical Education (CTE) program to freshman and other prospective students during the club fair.\n\nThe site also showcases the projects and accomplishments of students that participate in CTE competitions on State and National stages.",
        "tags": ['html/css'],
        "url": "http://pvlsites.com/GraphicDesign/index.html"
    },
    {
        "img": "images/WebApp/asu.jpg",
        "body": "A suite of programs and automation tools useful for all Arizona State University students!\n\nI developed this repository along with a couple of other ASU students to help automate the mundane tasks such as Class Availability Listener (for when your desired class has no empty seats), Scraping Class Roster (can be used to find classmates that you have mutual classes with).",
        "tags": ['python'],
        "url": "https://github.com/Ninkuk/ASU_Scripts"
    },
    {
        "img": "images/WebApp/discordbot.jpg",
        "body": "Inspired from anime \"superhero\" Saitama, this bot was made to inspire and keep track of your workouts habits. Included are some fun functionalities to make your Discord server motivated, productive, and competitive!",
        "tags": ['js'],
        "url": "https://github.com/Ninkuk/one-punch-discord-bot"
    },
    {
        "img": "images/WebApp/wallpaper.jpg",
        "body": "Get a new wallpapers every hour from royalty-free sources like Pexels and Unsplash!\n\nThe script picks a random keyword from a list of hand picked search terms that will liven up your desktop screen without spending hours hunting down the perfect wallpaper.",
        "tags": ['python'],
        "url": "https://github.com/Ninkuk/Wallpaper-Automation"
    },
    {
        "img": "images/WebApp/instagram.jpg",
        "body": "Want to search a brand's Instagram profile for a specific keyword or string? You can use this script to do just that! Simply enter the string you wish to search and in return get the links to posts that contain that string in their captions!",
        "tags": ['python'],
        "url": "https://github.com/Ninkuk/Instagram-Caption-Scraper"
    },
    {
        "img": "images/WebApp/asudsc.jpg",
        "body": "I helped develop and maintain the website for Developer Student Club at Arizona State University.",
        "tags": ['react', 'html/css', 'js'],
        "url": "https://asudsc.com/"
    },
    {
        "img": "images/WebApp/stephire.jpg",
        "body": "",
        "tags": ['html/css', 'js'],
        "url": "https://stephire.org/"
    },
    {
        "img": "images/WebApp/collated.jpg",
        "body": "I was tasked to design and create the website for CollatEd Lab, a student-led non-profit organization that is the world’s first policy innovation lab dedicated to uniting multi-sectoral, global leaders to spearhead the development of inclusive and sustainable societies.",
        "tags": ['html/css', 'js'],
        "url": ""
    },
    {
        "img": "images/WebApp/chaibaaz.jpg",
        "body": "Being from an Indian family where every member has a different style of making Chai Tea, I always forget the recipes and measurements of particular styles.\n\nSo I decided to engineer a solution by making an app where you can store the measurement of ingredients and take specific notes to refer back to.",
        "tags": ['android', 'kotlin'],
        "url": "https://github.com/Ninkuk/ChaiBaaz"
    },
];

const workExp = [{
        "title": "Web Developer (Core Team)",
        "company": "Developer Student Club at Arizona State University",
        "description": "Part of the core team and web developer at Arizona State University’s Developer Student Clubs. I help create and maintain the website and resources that help students interested in Google developer technologies.",
        "logo": "",
        "duration": "Dec 2020 - present"
    },
    {
        "title": "Graphic Designer",
        "company": "ASU Enterprise Marketing HUB",
        "description": "As a student designer, I help the creative team at ASU’s Hub to create graphics for Athletics and Alumni Association. Having the reach of generations of ASU alumni, it is part of my duties to create graphics in a cohesive manner by working withing the year-long campaign guidelines, and utilize a toolbox of content.",
        "logo": "",
        "duration": "Jan 2020 - present"
    },
    {
        "title": "National Social Media Ambassador - Graphic Designer",
        "company": "Future Business Leaders of America - Phi Beta Lambda (FBLA-PBL)",
        "description": "",
        "logo": "",
        "duration": "Oct 2018 - Jul 2019"
    },
    {
        "title": "President - Pinnacle High School FBLA Chapter",
        "company": "Future Business Leaders of America - Phi Beta Lambda (FBLA-PBL)",
        "description": "bruh",
        "logo": "",
        "duration": "Aug 2018 - Jul 2019"
    },
    {
        "title": "Editor and Webmaster - Pinnacle High School Key Club Chapter",
        "company": "Key Club International",
        "description": "My duties as part of the board included serving on the Executive Board of Pinnacle High School’s Key Club. Create Graphics, maintain the club website and provide technical expertise in general.",
        "logo": "",
        "duration": "Aug 2017 - May 2019"
    }
];