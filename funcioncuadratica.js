var graficar,myChart;

document.getElementById("btn").onclick = function () {
  let a, b, c;
  a = document.getElementById("n1").value;
  b = document.getElementById("n2").value;
  c = document.getElementById("n3").value;
  //Variables para sacar las raices
  let raiz1, raiz2;
  let discriminante = b * b - 4 * a * c;

  if (discriminante > 0) {
    raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    //tofixed es para redondear a 3 decimales en mi caso
    raiz1 = raiz1.toFixed(3);
    raiz2 = raiz2.toFixed(3);
    document.getElementById(
      "result"
    ).innerHTML = `La raiz cuadrática de la ecuación S = {${raiz1},${raiz2}}`;

    //para agregarle color de fondo blanco
    document.getElementById('myChart').style.background = 'white';
    /*Utilizamos los recursos de chart.js para poder graficar*/
    graficar = document.getElementById("myChart").getContext("2d");
    /*Si ya utilizamos mychart, hay que destruirlo para poder utilizarlo después*/
    if (myChart) {
      myChart.destroy();
  }
    myChart = new Chart(graficar, {
      //también está pie, bar y line
      type: "line",
      data: {
        labels: ["", "S1", "S2", ""],
        datasets: [
          {
            label: "Solución",
            data: [0, raiz1, raiz2, 0],
            backgroundColor: ["rgb(0, 0, 0)", "rgb(0,0,0)"],
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: -10,
            max: 10,
          },
        },
      },
    });
  } else if (discriminante == 0) {
    raiz1 = raiz2 = -b / (2 * a);
    raiz1 = raiz1.toFixed(3);
    document.getElementById(
      "result"
    ).innerHTML = `La raiz cuadrática de la ecuación S = {${raiz1},${raiz2}}`;

    //para agregarle color de fondo blanco
    document.getElementById('myChart').style.background = 'white';
    /*Utilizamos los recursos de chart.js para poder graficar*/
    graficar = document.getElementById("myChart").getContext("2d");
     /*Si ya utilizamos mychart, hay que destruirlo para poder utilizarlo después*/
     if (myChart) {
      myChart.destroy();
  }
    myChart = new Chart(graficar, {
      //también está pie, bar y line
      type: "line",
      data: {
        labels: ["", "S1", "S2", ""],
        datasets: [
          {
            label: "Solución",
            data: [0, raiz1, raiz2, 0],
            backgroundColor: ["rgb(0, 0, 0)", "rgb(0,0,0)"],
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: -10,
            max: 10,
          },
        },
      },
    });
  } else {
    //Si la raiz no es real
    let parteReal = ((-b / 2) * a).toFixed(2);
    let parteImaginaria = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);
    let solucion1 = parteReal + parteImaginaria;
    let solucion2 = parteReal - parteImaginaria;
    document.getElementById(
      "result"
    ).innerHTML = `La raiz cuadrática de la ecuación S = {${parteReal} + ${parteImaginaria}i,${parteReal} - ${parteImaginaria}}`;

    //para agregarle color de fondo blanco
    document.getElementById('myChart').style.background = 'white';
    /*Utilizamos los recursos de chart.js para poder graficar*/
    graficar = document.getElementById("myChart").getContext("2d");
    //para destruir o reiniciar mi mychart
    /*Si ya utilizamos mychart, hay que destruirlo para poder utilizarlo después*/
    if (myChart) {
      myChart.destroy();
  }
    myChart = new Chart(graficar, {
      //también está pie, bar y line
      type: "line",
      data: {
        labels: ["", "S1", "S2", ""],
        datasets: [
          {
            label: "Solución",
            data: [0, solucion1, solucion2, 0],
            backgroundColor: ["rgb(0, 0, 0)", "rgb(0,0,0)"],
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: -10,
            max: 10,
          },
        },
      },
    });
  }
};
