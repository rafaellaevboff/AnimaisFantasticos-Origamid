export default function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
        events.forEach(userEvent=>{
            setTimeout(()=> html.addEventListener(userEvent, handleOutsideClick));//espera carregar o bubble e depois ativa aqui
        })
        
        element.setAttribute(outside, '');
    }
    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            element.removeAttribute(outside, '');
            events.forEach(userEvent=>{
                html.removeEventListener(userEvent, handleOutsideClick);
            })
            callback();//vai remover
        }
        
    };
};