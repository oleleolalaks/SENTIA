'use strict';

// A luz cobre a troca de página; ela aparece uma vez, sem piscar repetidamente.
window.PortalSentia = (() => {
  let entering=false;
  const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('reduced')||document.body.classList.contains('reduced');
  function light(topLayer=false) {
    const overlay=document.createElement(topLayer?'dialog':'div');overlay.id='portal-light';overlay.setAttribute('aria-hidden','true');
    overlay.addEventListener('cancel',event=>event.preventDefault());
    overlay.classList.toggle('gentle',reduced());document.body.append(overlay);return overlay;
  }
  function enter() {
    if(entering)return;entering=true;
    document.querySelectorAll('dialog[open]').forEach(dialog=>dialog.close());
    const overlay=light();
    document.querySelectorAll('[data-device]').forEach(b=>b.disabled=true);
    requestAnimationFrame(()=>requestAnimationFrame(()=>overlay.classList.add('bright')));
    setTimeout(()=>{
      try{sessionStorage.setItem('sentia-portal-arrival',String(Date.now()));}catch{}
      location.href='jardim.html';
    },reduced()?220:520);
  }
  if(/\/jardim\.html$/i.test(location.pathname)){
    let arrival=0;try{arrival=Number(sessionStorage.getItem('sentia-portal-arrival'));sessionStorage.removeItem('sentia-portal-arrival');}catch{}
    if(arrival>0&&Date.now()-arrival<15000){
      document.documentElement.classList.add('portal-arriving');
      const overlay=light(true);overlay.classList.add('bright');overlay.showModal();
      let ended=false;
      const reveal=()=>{if(ended)return;ended=true;
        // O menu do jogo também é uma janela modal; a luz precisa estar acima dele.
        if(overlay.open)overlay.close();overlay.showModal();
        document.documentElement.classList.remove('portal-arriving');
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
        overlay.classList.remove('bright');setTimeout(()=>{overlay.close();overlay.remove();},reduced()?400:900);
      }));};
      if(document.readyState==='complete')reveal();else window.addEventListener('load',reveal,{once:true});
      setTimeout(reveal,4000);
    }
  }
  return Object.freeze({enter});
})();
