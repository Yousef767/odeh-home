let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 100){
    nav.classList.add('color');
  }else{
    nav.classList.remove('color');
  }
})
menu.addEventListener('click',()=>{
  nav.classList.toggle('activeMenu');
  resultInner.classList.remove('showSearch')
})



let links = document.querySelectorAll('.link');
links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')});
    e.classList.add('active');
  })
})


let anchors = document.querySelectorAll('#anchor');
let result = document.getElementById('sResult');
let resultInner = document.getElementById('result');
let blurDiv = document.getElementById('blur');
let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search');

searchIcon.addEventListener('click',()=>{
  nav.classList.remove('activeMenu');
  resultInner.classList.toggle('showSearch');
  if(resultInner.classList.contains('showSearch')){
    searchInput.focus();
  }else{
    searchInput.blur();
  }
  
});

searchInput.addEventListener('blur',()=>{
  searchInput.classList.remove('input');
})

searchInput.addEventListener('input',()=>{
  anchors.forEach((e)=>{
    if(searchInput.value != ''){
      if(e.innerHTML.includes(searchInput.value.toUpperCase())){
        let newAnchor = e.cloneNode();
        newAnchor.innerHTML = e.innerHTML;
        result.append(newAnchor);
      }
    }else{
      result.innerHTML='';
    }
  })
})

blurDiv.addEventListener('click',()=>{
  resultInner.classList.remove('showSearch');
})


