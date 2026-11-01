'use strict';
// Perspectiva por recorte progressivo das artes aprovadas. Não cria cenários novos.
window.Perseguicao = (() => {
  let canvas,ctx,image,monster,time=0,lastSource='',lastMonster='',view={zoom:1};
  function start(source,presence) {
    canvas=document.querySelector('#chase-canvas');ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;
    canvas.hidden=false;time=0;setImages(source,presence);
  }
  function setImages(source,presence) {
    if(source!==lastSource){image=new Image();image.src=source;lastSource=source;}
    if(presence!==lastMonster){monster=new Image();monster.src=presence;lastMonster=presence;}
  }
  function draw(dt,state) {
    if(!ctx||canvas.hidden)return;time+=dt;
    const w=canvas.width,h=canvas.height,run=state.running&&!state.waiting;
    const progress=Math.min(1,state.progress/state.distance),zoom=1+progress*1.9;view={zoom,progress,lookingBack:!!state.lookingBack,running:!!state.running};
    const shake=state.reduced?0:Math.sin(time*(run?15:5))*(run?2.2:.5);
    ctx.fillStyle='#080a0d';ctx.fillRect(0,0,w,h);
    if(image?.complete&&image.naturalWidth){
      const iw=image.naturalWidth,ih=image.naturalHeight;
      const scale=Math.max(w/iw,h/ih)*zoom,cw=w/scale,ch=h/scale;
      const vx=iw*.5,vy=ih*.45;
      const sx=Math.max(0,Math.min(iw-cw,vx-cw*.5)),sy=Math.max(0,Math.min(ih-ch,vy-ch*.46));
      ctx.save();ctx.translate(0,shake);ctx.drawImage(image,sx,sy,cw,ch,0,0,w,h);ctx.restore();
    }
    // O perseguidor vem de trás; só ocupa o centro da visão quando você olha para trás.
    if(state.lookingBack&&monster?.complete&&monster.naturalWidth){
      ctx.fillStyle='#0304079c';ctx.fillRect(0,0,w,h);
      const height=h*(.32+Math.min(1,state.danger/8)*.66),width=height*monster.naturalWidth/monster.naturalHeight;
      ctx.drawImage(monster,w*.5-width*.5,h*.88-height,width,height);
    }
    const shade=ctx.createRadialGradient(w*.5,h*.44,h*.12,w*.5,h*.5,h*.8);
    shade.addColorStop(0,'#0000');shade.addColorStop(1,state.danger>5?'#180204ed':'#010206dc');ctx.fillStyle=shade;ctx.fillRect(0,0,w,h);
    if(run&&!state.reduced){ctx.strokeStyle='#dcecff15';ctx.lineWidth=1;for(let i=0;i<14;i++){const a=i*Math.PI/7,phase=(time*1.8+i*.13)%1;ctx.beginPath();ctx.moveTo(w*.5+Math.cos(a)*w*phase*.35,h*.45+Math.sin(a)*h*phase*.35);ctx.lineTo(w*.5+Math.cos(a)*w*(phase+.18)*.65,h*.45+Math.sin(a)*h*(phase+.18)*.65);ctx.stroke();}}
    if(state.waiting){ctx.fillStyle='#05070a55';ctx.fillRect(0,0,w,h);}
  }
  function stop(){if(canvas)canvas.hidden=true;}
  return {start,setImages,draw,stop,state:()=>({...view})};
})();
