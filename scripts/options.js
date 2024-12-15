//--------- HEADER --------

// create boxes for our items we want to use
const mainNavigation = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

//toggle
hambutton.addEventListener('click', () => {
    mainNavigation.classList.toggle('show');

    hambutton.classList.toggle('show');
});



// -------- MAIN ----------

const members = [
    {
        name: "Joshua Smith",
        jobTitle: "CEO",
        bio: "Josh is a creative, he loves to draw, write and discover the richness of life.",
        img: "images/josh.jpg"
    },
    {
        name: "Madison Woloszyn",
        jobTitle: "CFO",
        bio: "Madison has always loved being part of theater, spending her time listening to and being a part of music",
        img: "images/madison.jpg"
    },
    {
        name: "Jackson Filler",
        jobTitle: "Window Crew Lead",
        bio: "Skater dude in his free time, Jackson loves spending his time outside",
        img: "images/jake.jpg"
    },
    {
        name: "Emily Harris",
        jobTitle: "Cleaning Crew Lead",
        bio: "Emily loves to bake cinnamon buns, and if she could would spend her day away kniting",
        img: "images/emily.jpg"
    }
]


function introCardCreation(members) {
    members.forEach (member => {
        let card = document.createElement("section");
        let name = document.createElement("h1");
        let jobTitle = document.createElement("p");
        let bio = document.createElement("p");
        let img = document.createElement("img");

        img.setAttribute("src", member.img);
        img.setAttribute("alt", `${member.name}`);
        img.setAttribute("loading", "lazy")
        name.textContent = member.name;
        jobTitle.innerHTML = `<span class="label">Job Title: </span> ${member.jobTitle}`;
        bio.innerHTML = `<span class="label">Bio: </span> ${member.bio}`;



        card.appendChild(name);
        card.appendChild(jobTitle);
        card.appendChild(bio);
        card.appendChild(img);

        document.querySelector(".cards").appendChild(card);
  });
}

introCardCreation(members);


// --------- FOOTER ----------
