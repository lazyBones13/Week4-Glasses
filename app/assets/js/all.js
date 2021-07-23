$(document).ready(function () {
  $('.ham-icon').click(function (e) {
    e.preventDefault()
    $('.menu').toggleClass('active')
  })
})
