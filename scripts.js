var data = {
    labels: ['Java', 'Python', 'HTML(5)', 'CSS(3)', 'R',
        'SQL', 'JavaScript', 'Scrum(PSM 1)', 'MS Azure', 'Amazon Web Services',
        'Docker', 'Kubernetes', 'Selenium', 'Bootstrap', 'Spring Boot',
        'Thymeleaf', 'IREB', 'ISTQB', 'MS Office', 'Windows',
        'Linux', 'Git(Hub/Lab)', 'Jira', 'Postman', 'English',
        'Dutch', 'German'],
    datasets: [{
        label: 'Skill Level',
        data: [3, 3, 4, 3, 1, 2, 2, 2, 1, 1, 2, 2, 1, 3, 2, 2, 2, 2, 3, 5, 3, 2, 1, 1, 5, 5, 1],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(55,255,57,0.2)'

        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgb(36,255,48)'
        ],
        borderWidth: 1
    }]
};

Chart.defaults.global.legend.display = false;
Chart.defaults.global.animation.duration = 4000;
Chart.defaults.scale.ticks.beginAtZero = true;


var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}


$(window).scroll(function () {
    if (isScrolledIntoView('#skillsBarChart')) {
        if (inView) {
            return;
        }
        inView = true;
        new Chart(
            document.getElementById("skillsBarChart").getContext("2d"),
            {type: 'horizontalBar', data: data});
    } else {
        inView = false;
    }
});


