const invisibleClass = "invisible"
const modalBackground = document.getElementById("modalBackground")
const modal = document.getElementById("modal")
const btnShowModal = document.getElementById("btnShowModal")
const btnCancel = document.getElementById("btnCancel")
const btnSale = document.getElementById("btnSale")
const productId = document.getElementById("productId")
const amount = document.getElementById("amount")
const dataChart = [01, 20, 10, 10]

// ***** MODAL init *****
const showModal = show => {
    if (show) {
      modalBackground.classList.remove(invisibleClass)
      modal.classList.remove(invisibleClass)
      return
    }
  
    modalBackground.classList.add(invisibleClass)
    modal.classList.add(invisibleClass)
}

btnShowModal.addEventListener("click", evt => {
    evt.preventDefault()
    showModal(true)
})

btnCancel.addEventListener("click", evt => {
    evt.preventDefault()
    showModal(false)
})

// ***** The Chart init *****
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Zapatos', 'Camisas', 'Pantalones', 'Ropa interior'],
    datasets: [{
      label: '$ Sales',
      data: dataChart,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
// ***** The chart end *****