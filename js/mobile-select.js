MobileSelect = function() {
}

MobileSelect.Initialize = function()
{
    $('.mobile-select select').on('change', function()
    {
        var value = $(this).val() == "" ? "Selecione" : $(this).children(':selected').text();
        $(this).prev('span').text(value);
    });
}