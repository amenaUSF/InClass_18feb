function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Cities',
                data: data,
            }]
backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
        },
    });
}

$("#renderBtn").click(
    function () {
        data = [500, 700, 1300, 1000, 1500, 900, 800];
        labels =  ["Tampa", "St Pete", "Jacksonville", "Gainesville", "Miami", "FortLauderdale", "KeyWest"];
        renderChart(data, labels);
    }
);