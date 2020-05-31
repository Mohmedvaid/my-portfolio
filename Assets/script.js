window.addEventListener('load', (event) => {

    var ctx = document.getElementById('bar-chart').getContext('2d');

    var gradient = ctx.createLinearGradient(450, 0, 0, 0);
    gradient.addColorStop(0, "rgb(0, 99, 132)");
    gradient.addColorStop(1, "rgb(255, 99, 132)");
    Chart.defaults.global.defaultFontSize = 25;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Coffee", "Coding"],
            datasets: [{
                label: "work skills",
                backgroundColor: gradient,
                borderColor: gradient,
                data: [120, 100, 0]
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'My Skills'
            },
            scaleLabel: true,
            responsive: true,
            maintainAspectRatio: false,
            

        },
    });





});