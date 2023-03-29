document.addEventListener('DOMContentLoaded', function(){
    const menus = document.querySelectorAll('.side-menu');
    Map.Sidenav.init(menus,{edge :'right'});

    const forms = document.querySelectorAll('.side-form');
    Map.Sidenav.init(forms, {edge: 'left'});
});