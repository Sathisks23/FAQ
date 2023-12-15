
let a = null
let p_btn
let time = 0

let answer = document.querySelector('.answer')

function show(btn){


      if(time==0 && a == null){

            btn.parentElement.lastElementChild.style.display = 'block'
            time = 1
            btn.innerText = '-'
            a = btn.parentElement.lastElementChild
            p_btn = btn
      }
      else if(a == btn.parentElement.lastElementChild){
            if(a.style.display == 'none'){
                  a.style.display = 'block'
                  btn.innerText = '-'
            }else{
                  a.style.display = 'none'
                  btn.innerText = '+'
            }
      } 
      else{
            a.style.display = 'none'
            btn.parentElement.lastElementChild.style.display = 'block'   
            a = btn.parentElement.lastElementChild
           btn.innerText = '-'
           p_btn.innerText = '+'
           p_btn = btn
      }
       
     
}
     

let d = [1,2,3,45,6]

d.forEach(element => {
      
});