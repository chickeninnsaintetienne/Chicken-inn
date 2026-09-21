let zoom=1;
const viewer=document.getElementById('viewer');
const menu=document.getElementById('menu');
const value=document.getElementById('zoomValue');

function render(){
  menu.style.setProperty('--zoom',zoom);
  value.textContent=Math.round(zoom*100)+'%';
}
function setZoom(next){
  next=Math.min(2.5,Math.max(.5,Math.round(next*100)/100));
  if(next===zoom) return;
  // keep whatever is in the middle of the screen in the middle after zooming
  const cx=(viewer.scrollLeft+viewer.clientWidth/2)/viewer.scrollWidth;
  const cy=(viewer.scrollTop+viewer.clientHeight/2)/viewer.scrollHeight;
  zoom=next;
  render();
  viewer.scrollLeft=cx*viewer.scrollWidth-viewer.clientWidth/2;
  viewer.scrollTop=cy*viewer.scrollHeight-viewer.clientHeight/2;
}
function changeZoom(amount){ setZoom(zoom+amount); }
function resetZoom(){ setZoom(1); }
document.addEventListener('keydown',e=>{
  if(e.key==='+'||e.key==='=') changeZoom(.1);
  if(e.key==='-') changeZoom(-.1);
  if(e.key==='0') resetZoom();
});
render();
