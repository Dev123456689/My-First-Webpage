const i=new Set;var s=false;function OP(n){s=true;document.body.style.overflow='hidden';for(const t of i){t.classList.remove('visible')}setTimeout(function(){window.location.href=n},700)}window.addEventListener('pageshow',t);function t(){s=false;document.body.style.overflow='auto'}const e=document.querySelectorAll('section');window.addEventListener('DOMContentLoaded',o);function o(){const t=new IntersectionObserver(n,{rootMargin:'-13% 0%'});const e=document.querySelectorAll('section');for(let n=0;n<e.length;n++){const o=e[n];t.observe(o)}function n(n){if(s){return}n.forEach(n=>{const{isIntersecting:t,target:e}=n;if(t){if(!i.has(e)){e.classList.add('visible');i.add(e)}}else{if(i.has(e)){e.classList.remove('visible');i["delete"](e)}}})}}
