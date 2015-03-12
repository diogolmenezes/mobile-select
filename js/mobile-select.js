MobileSelect = function() {
}

MobileSelect.Initialize = function()
{
    $('.mobile-select select').on('change', function()
    {
        var value = $(this).val() == "" ? "Selecione" : $(this).val();
        $(this).prev('span').text(value);
    });
}