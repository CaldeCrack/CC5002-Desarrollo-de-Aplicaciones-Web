Highcharts.chart('hincha-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Hinchas por deporte'
    },
    xAxis: {
        categories: ['Deporte']
    },
    yAxis: {
        title: {
        text: 'Cantidad'
        }
    },
    series: [{
        name: 'Hinchas',
        data: []
    }]
});

fetch("http://localhost:5000/get-stats-data")
    .then((response) => response.json())
    .then((data) => {
    let parsedData = data[0]
    console.log(data)

    // Get the chart by ID
    const chart = Highcharts.charts.find(
        (chart) => chart && chart.renderTo.id === "hincha-container"
    );

    // Update the chart with new data
    chart.update({
        series: [
            {
                data: parsedData,
            },
        ],
    });
})
.catch((error) => console.error("Error:", error));

// #########################################################

Highcharts.chart('artesano-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Artesanos por tipo de artesanía'
    },
    xAxis: {
        categories: ['Tipo de artesanías']
    },
    yAxis: {
        title: {
        text: 'Cantidad'
        }
    },
    series: [{
        name: 'Artesanos',
        data: [10]
    }]
});
