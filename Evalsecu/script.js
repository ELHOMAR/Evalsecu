const barCanvas = document.getElementById("barCanvas");
const  barChart = new Chart(barCanvas,{
    type: "bar",
    data:{
        labels: ["Identify" , "Detect" , "Protect" , "Respond" , "Recover"],
        datasets: [{
            data: [300,200,166,400,100],
            label: "Votre niveau de sécurité",
            backgroundColor: [
                "#327dc4"
            ]
        }]
    },
    options:{
        scales:{
            y:{
                suggestedMax: 500,
                ticks: {
                    font:{
                        size: 19
                    }
                }
            
            },
            x:{
                ticks:{
                    font:{
                        size: 19
                    }
                }
            },
        }
    }
})