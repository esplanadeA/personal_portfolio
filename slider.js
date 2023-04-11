const projectContainer = [...document.querySelectorAll('.project-slider ')]
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

projectContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect()
  let containerWidth = containerDimensions.width

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth
  })
})

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault() // prevent the form from submitting

    var name = $('#name').val()
    var email = $('#email').val()
    var feedback = $('#feedback').val()

    // validate the form data
    if (name.length == 0 || email.length == 0 || feedback.length == 0) {
      alert('Please fill out all fields.')
      return
    }

    // send the form data to the server using AJAX
    $.ajax({
      type: 'POST',
      url: '/submit-feedback',
      data: {
        name: name,
        email,
      },
    })
  })
})
