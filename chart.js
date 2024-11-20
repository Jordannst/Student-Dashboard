const labels = [
  "Web Design",
  "Introduction to Database",
  "Computer Organization",
  "Visual Programming",
  "Statistics & Probability",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Kehadiran ",
      data: [29, 28, 30, 29, 27],
      backgroundColor: "#4d4fdb",
      backgroundColor: ["#1E88E5", "#1976D2", "#1565C0", "#0D47A1", "#82B1FF"],
      borderColor: "#b0f3f1",
      borderWidth: 1.5,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 30,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const ctx = document.getElementById("attendanceChart").getContext("2d");
const attendanceChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});
/////////////////////////////////////////////////////////////////////////////////////
//  Chart IPK Mahasiswa
const semester = [
  "Semester 1 2023/2024",
  "Semester 2 2023/2024",
  "Semester 1 2024/2025",
  "Semester 2 2024/2025",
];
const chart = {
  labels: semester,
  datasets: [
    {
      label: "IPK",
      data: [3.1, 3.56, 3.75, 3.85],
      borderColor: "#82B1FF",
      borderWidth: 2,
      fill: true,
    },
  ],
};

const opsi = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 4.0,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const contextIPK = document.getElementById("ipkChart").getContext("2d");
const ipkChart = new Chart(contextIPK, {
  type: "line",
  data: chart,
  options: opsi,
});
