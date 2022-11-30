const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
// const formAlertDOM = document.querySelector('.form-alert')

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const userName = taskInputDOM.value
  try {
    console.log(userName, 'axios')
    await axios.post('/landingPage', { userName })

    window.location.replace('./dashboard.html')
  } catch ({ err }) {}
})
