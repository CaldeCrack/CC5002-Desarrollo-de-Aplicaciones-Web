Highcharts.chart('hincha-container', {
    chart: {
        type: 'column'
    },
    plotOptions: {
        column: {
            colorByPoint: true
        }
    },
    colors: {},
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
        data: [],
    }]
});

Highcharts.chart('artesano-container', {
    chart: {
        type: 'column'
    },
    plotOptions: {
        column: {
            colorByPoint: true
        }
    },
    colors: {},
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
        data: [],
    }]
});

fetch("http://127.0.0.1:5000/get-stats-data")
    .then((response) => response.json())
    .then((data) => {
    let hinchas = data["hinchas"]
    let sports = hinchas.map((item) => {return item[0]})
    let fans_amount = hinchas.map((item) => {return item[1]})

    const fan_chart = Highcharts.charts.find(
        (chart) => chart && chart.renderTo.id === "hincha-container"
    );

    fan_chart.update({
        colors: (function() {
            let colors = [];
            for (let i = 0; i < sports.length; i++) {
                colors.push(randomColor());
            }
            return colors;
        })(),
        xAxis: {
            categories: sports
        },
        series: [
            {
                data: fans_amount,
            },
        ],
    });

    let artesanos = data["artesanos"]
    let types = artesanos.map((item) => {return item[0]})
    let crafters_amount = artesanos.map((item) => {return item[1]})

    const crafter_chart = Highcharts.charts.find(
        (chart) => chart && chart.renderTo.id === "artesano-container"
    );

    crafter_chart.update({
        colors: (function() {
            let colors = [];
            for (let i = 0; i < sports.length; i++) {
                colors.push(randomColor());
            }
            return colors;
        })(),
        xAxis: {
            categories: types
        },
        series: [
            {
                data: crafters_amount,
            },
        ],
    });
})
.catch((error) => console.error("Error:", error));