$(document).ready(function () {
  $('.step').click(function () {
    $(this).addClass('active').prevAll().addClass('active')
    $(this).nextAll().removeClass('active')
  })

  $('.step01').click(function () {
    $('#line-process').css('width', '0%')
    $('.education').addClass('active').siblings().removeClass('active')
  })

  $('.step02').click(function () {
    $('#line-process').css('width', '16.5%')
    $('.working01').addClass('active').siblings().removeClass('active')
  })

  $('.step03').click(function () {
    $('#line-process').css('width', '33%')
    $('.education-02').addClass('active').siblings().removeClass('active')
  })

  $('.step04').click(function () {
    $('#line-process').css('width', '49.5%')
    $('.working-02').addClass('active').siblings().removeClass('active')
  })

  $('.step05').click(function () {
    $('#line-process').css('width', '66%')
    $('.education-03').addClass('active').siblings().removeClass('active')
  })

  $('.step06').click(function () {
    $('#line-process').css('width', '82.5%')
    $('.education-04').addClass('active').siblings().removeClass('active')
  })

  $('.step07').click(function () {
    $('#line-process').css('width', '100%')
    $('.present').addClass('active').siblings().removeClass('active')
  })
})

// header
$(document).ready(function () {
  var header = $('header')
  var headerOffset = header.offset().top

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop()

    if (scrollPos >= headerOffset) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  })
})
