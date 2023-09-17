$(document).ready(() => {
    $(".toggle-link").click(evt => {
        evt.preventDefault();
        
        const link = $(evt.currentTarget);
        const content = link.closest("h2").next(".hide");
        
        content.toggleClass("hide");
        
        
    });
    $(".less").click(evt => {
        evt.preventDefault();
        
        const link = $(evt.currentTarget);
        const content = link.parent();

        content.addClass("hide");
    });

});