$('#btn2').hide()

$('#btn1').on('click', (event) => {
    $('div').fadeOut()
})
$('#btn2').on('click', (event) => {
    $('div').fadeIn()
})

$('#btn1').on('click', (event) => {
    $('#btn1').hide()
    $('#btn2').show()
})


$('#btn2').on('click', (event) => {
    $('#btn1').show()
    $('#btn2').hide()
})