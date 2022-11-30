const objId = document.querySelector('.objId')
const topic = document.querySelector('.topic')
const content = document.querySelector('.content')

const showList = async (e) => {
  const token = cookies.getItem('token')
  const {
    data: { createdBy },
  } = await axios.get('/dashboard')

  const userID = createdBy
    .map((createdBy) => {
      const { topicName, content } = student

      return `
         <tr>
                    <td>${topicName}</td>
                    <td>${content}</td
                </tr>
      `
    })
    .join('')

  tableBody.innerHTML = userID
}
window.addEventListener('DOMContentLoaded', showList)
