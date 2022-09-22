$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebarleft').toggleClass('active');
        $(this).toggleClass('active');
    });
});