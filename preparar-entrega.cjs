const fs=require('fs'),path=require('path');
fs.mkdirSync('entrega-escolar/HTML-puro',{recursive:true});
fs.mkdirSync('entrega-escolar/CSS-puro',{recursive:true});
fs.mkdirSync('entrega-escolar/JavaScript-puro',{recursive:true});
for(const f of ['index.html','jardim.html']) {
 const html=fs.readFileSync(f,'utf8').replace(/\s*<link\b[^>]*rel="stylesheet"[^>]*>/g,'').replace(/\s*<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 fs.writeFileSync('entrega-escolar/HTML-puro/'+f,html);
}
for(const [dir,out] of [['css','CSS-puro'],['js','JavaScript-puro']]) for(const f of fs.readdirSync(dir)) fs.copyFileSync(path.join(dir,f),path.join('entrega-escolar',out,f));
for(const [dir,out] of [['api','PHP-servidor'],['banco','SQL']]) {
 fs.mkdirSync(path.join('entrega-escolar',out),{recursive:true});
 for(const f of fs.readdirSync(dir)) if(fs.statSync(path.join(dir,f)).isFile()&&f!=='config.local.php') fs.copyFileSync(path.join(dir,f),path.join('entrega-escolar',out,f));
}
const els=[],files={};let n=0;
function base(type,x,y,width,height){return {id:'sentia-'+(++n),type,x,y,width,height,angle:0,strokeColor:'#193e35',backgroundColor:'transparent',fillStyle:'solid',strokeWidth:1,strokeStyle:'solid',roughness:0,opacity:100,groupIds:[],frameId:null,roundness:null,seed:n,version:1,versionNonce:n,isDeleted:false,boundElements:null,updated:1,link:null,locked:false};}
function label(t,x,y){els.push({...base('text',x,y,1000,45),text:t,originalText:t,fontSize:28,fontFamily:2,textAlign:'left',verticalAlign:'top',containerId:null,autoResize:true,lineHeight:1.25});}
label('SENTIA — portfólio das telas implementadas',0,0);
label('Home → Atlas → Convergência → Conversas | Registro | Jardim dos Ecos | Sobre',0,65);
const pages=['home','atlas','convergencia','praticas','conversas','jardim','sobre','creditos','dialogo'];
let rowY=180;
for(let row=0;row<pages.length;row+=2){let maxHeight=0;for(let col=0;col<2&&row+col<pages.length;col++){
const p=pages[row+col],b=fs.readFileSync('portfolio/'+p+'-pc.png'),w=b.readUInt32BE(16),h=b.readUInt32BE(20),x=col*1550,id='captura-'+p,height=1440*h/w;
files[id]={id,mimeType:'image/png',dataURL:'data:image/png;base64,'+b.toString('base64'),created:1,lastRetrieved:1};label(p.toUpperCase(),x,rowY);els.push({...base('image',x,rowY+55,1440,height),fileId:id,status:'saved',scale:[1,1]});maxHeight=Math.max(maxHeight,height);}
rowY+=maxHeight+160;}
fs.writeFileSync('portfolio/SENTIA-portfolio.excalidraw',JSON.stringify({type:'excalidraw',version:2,source:'SENTIA',elements:els,appState:{viewBackgroundColor:'#f5f3e9',gridSize:null},files}));
console.log('Cópias isoladas e portfólio criados; '+Object.keys(files).length+' capturas incorporadas.');
