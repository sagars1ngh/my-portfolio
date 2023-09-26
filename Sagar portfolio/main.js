// Create a Vue.js instance for the portfolio section
new Vue({
    el: '#portfolio-app',
    data: {
        projects: [
            {
                title: 'Project 1',
                description: 'Description of Project 1',
                link: 'https://example.com/project1'
            },
            {
                title: 'Project 2',
                description: 'Description of Project 2',
                link: 'https://example.com/project2'
            },
            // Add more project objects as needed
        ]
    },
    template: `
        <div>
            <div v-for="project in projects" class="project">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <a :href="" target="_blank">View Project</a>
            </div>
        </div>
    `
});
