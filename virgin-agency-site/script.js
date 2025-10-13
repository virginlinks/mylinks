
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
// Simple email copy
const copyBtns = document.querySelectorAll('[data-copy]');
copyBtns.forEach(btn=>btn.addEventListener('click',()=>{
  const text = btn.dataset.copy;
  navigator.clipboard.writeText(text).then(()=>{
    btn.textContent = 'Copied!';
    setTimeout(()=>btn.textContent='Copy',1500);
  });
}));
