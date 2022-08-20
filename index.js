let sub_menus = document.querySelectorAll(".root-nav span");
console.log(sub_menus);
Array.from(sub_menus).forEach(item => { item.addEventListener('click', toggleMenu) });
function toggleMenu(event) {
    let currentMenu = event.target.parentElement.parentElement;
    let nextMenu = event.target.nextElementSibling;
    closeSubs(currentMenu, nextMenu);
    nextMenu.classList.toggle('sub-menu-active');
}
function closeSubs(currentMenu, nextMenu) {
    let notClose = [currentMenu, nextMenu];
    while (currentMenu.parentNode.nodeName != 'BODY') {
        if (currentMenu.parentNode.nodeName == 'UL') {
            notClose.push(currentMenu.parentElement);
        }
        currentMenu = currentMenu.parentElement;
    }
    console.log(notClose);
    let active_subs = Array.from(document.querySelectorAll('.sub-menu-active'));
    active_subs.forEach(item => {
        console.log(item);
        if (!notClose.includes(item)) {
            item.classList.remove('sub-menu-active');
        }
    });
}
