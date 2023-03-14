let nameform = document.querySelector('.name');
let textform = document.querySelector('.text');
let dateform = document.querySelector('.date')
let addbtn = document.querySelector('.add__btn');
let commentfield = document.querySelector('.comment__field');


let d = new Date();
let yest = new Date()
Hour = d.getHours();
Minutes = d.getMinutes();

yest.setDate(yest.getDate() - 1);

function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() % 10000;
    if (yy < 10) yy = '0' + yy;
  
    return yy + '-' + mm + '-' + dd;
}


function addcomments(){

    if(nameform.value == ''){
        alert('Введите имя');
        return false;
    } else if(textform.value == ''){
        alert('Введите комментарий')
        return false;
    }
    else{
        let datestring = '';

        if(dateform.value == '' || dateform.value == formatDate(d)){
            dateform.value = formatDate(d)
            datestring = 'сегодня ' + ' ' + Hour + ' : ' + Minutes;
            dateform.value = ''
        } else if(dateform.value == formatDate(yest)){
            dateform.value = formatDate(yest)
            datestring = 'вчера ' + ' ' + Hour + ' : ' + Minutes;
            dateform.value = ''    
        } else {
           datestring = dateform.value; 
        }
            
        let comment = {
            name: nameform.value,
            text: textform.value, 
            date: dateform.value,
        }
    
        nameform.value = '';
        textform.value = '';
     
        commentfield.innerHTML += `
            <div class="newadd">
                <p>${comment.name}</p>
    
                <p>${datestring}</p>
                
                <p>${comment.text}</p>  
            
                <button class="delete">
                    удалить
                </button>
               
                <svg class='icon' width="30" height="30" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 
                    3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 
                    4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361  
                    9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 
                    8.80536 18.6666 4.95912 15.8398 2.39496Z" stroke="black" 
                    stroke-width="2" stroke-linejoin="round"/> 
            </div>
        `

        let btndelete = document.querySelectorAll('.delete')
        for(let i=0; i < btndelete.length; i++){
            btndelete[i].addEventListener('click', function(){
                this.parentNode.remove();       
            })
        }
    
        let icon = document.querySelectorAll('.icon');
        for(let i = 0; i < icon.length; i++){
            icon[i].addEventListener('click', function(){
                this.classList.toggle('active')
            })  
        }
    
    }
}

document.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        addcomments();
    }
})

addbtn.addEventListener('click', function(event){
    event.preventDefault();
    addcomments();
})


