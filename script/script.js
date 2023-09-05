function button (selector) {
    let container = document.querySelector(selector);
    conteinerChildren = container.children;
    let arrHome = ['Дом', 'Дом', 'касса', 'вокзал', 'администрация', 'зал', 'министерство', 'офис', 'мост', 'отель',];

    container.addEventListener('click', event => {
      if(event.target.className === 'btn'){
        let btn = event.target;
        let btnId = btn.id;
        let number = parseInt(btnId.match(/\d+/));
        if(btn.classList.contains('active')){
            btn.classList.toggle('active');
            btn.innerHTML = '+'
        }else{
            [...conteinerChildren].forEach(elem => {
                    elem.classList.remove('active');
                    elem.innerHTML = `+`;
                })
                btn.classList.add('active');
                btn.innerHTML = ` - ${arrHome[number]}`;
        }
      }else{
        let buttons = document.querySelectorAll('.btn');
        buttons.forEach(elem => {
            elem.classList.remove('active');
            elem.innerHTML = `+`;
        })
      }
    })

}

button('.container__buttons');