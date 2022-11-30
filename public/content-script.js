const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const content = document.querySelector('.content')
const alert = document.querySelector('.alert')
// const formAlertDOM = document.querySelector('.form-alert')

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const topic = taskInputDOM.value
  const content = content.value
  try {
    console.log(userName, 'axios')
    await axios.post('/topiContent', { topic, content })
    alert.textContent = 'content submitted'
    alert.classList.add('sucess')
    setTimeout(function () {
      alert.textContent = ''
      alert.classList.remove('sucess')
    }, 3000)
  } catch ({ err }) {}
})
