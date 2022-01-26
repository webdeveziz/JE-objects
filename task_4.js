// Задание 4

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
  const newObj = { ...student, job: jobName }
  // const newObj = Object.assign({}, student, { job: jobName }) //старый метод!

  alert(
    `Поздравляем! У студента ${newObj.fullName} появилась новая работа! Теперь он ${newObj.job}.`
  )
  return newObj
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')

console.log(updatedStudent)
