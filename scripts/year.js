document.addEventListener('DOMContentLoaded', function(){
  var el = document.getElementById('site-year');
  if(el) el.textContent = new Date().getFullYear();
});
