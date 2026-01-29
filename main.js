// Prosjektdata
const projects = [
    {
        title: "Godot undervannspill",
        description: "Et spennende undervannspill laget med Godot.",
        links: [
            { text: "GitHub", url: "https://github.com/WilliamNord/underwater-explorer-godot" },
            { text: "Personvernerklæring", url: "privacy-policy-godot.html", type: "internal" },
        ]
    },
    {
        title: "Prosjekt 2",
        description: "En annen beskrivelse av et prosjekt.",
        links: [
            { text: "GitHub", url: "https://github.com/dittbrukernavn/prosjekt2" },
        ]
    },
    {
        title: "Prosjekt 3",
        description: "En annen beskrivelse av et prosjekt.",
        links: [
            { text: "GitHub", url: "https://github.com/dittbrukernavn/prosjekt3" },
        ]
    }
];

// Funksjon for å lage prosjektkort
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const title = document.createElement('h2');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const linksContainer = document.createElement('div');
    linksContainer.className = 'project-links';
    
    project.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        a.className = `project-link ${link.type || ''}`;
        // Kun åpne i ny fane hvis det IKKE er en intern lenke
        if (link.type !== 'internal') {
            a.target = '_blank';
        }
        linksContainer.appendChild(a);
    });
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(linksContainer);
    
    return card;
}

// Last inn prosjektene
function loadProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

// Kjør når siden lastes
document.addEventListener('DOMContentLoaded', loadProjects);