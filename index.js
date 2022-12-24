const adviceBtn = document.querySelector('.btn')
const quote = document.querySelector('.quote')
const adviceId = document.querySelector('.advice-id')

adviceBtn.addEventListener('click', () => {
  axios.get('https://api.adviceslip.com/advice').then(response => {
    quote.innerHTML = `"${response.data.slip.advice}"`
    adviceId.innerHTML = response.data.slip.id
  })
})
