var form = document.getElementById('survey-form')

    var remove_errors=()=>{
        var errors=form.querySelectorAll('.error');
        for(var i=0;i<errors.length;i++){
            errors[i].remove()
        }
    }

    var err=(a,b)=>{
        var error=document.createElement('div')
            error.className='error'
            error.style.color = 'red'
            error.innerHTML = b
            a.parentElement.insertBefore(error, a)
    }

    var is_sybmol=(a)=>{
            for(j=0;j<a.length;j++){
            for(var i=0;i<10;i++){
            if(a[j]==i){return true}
            } 
        }
    }
    
    var valid_name=(a)=>{
        if(!a.value){ err(a,'Введіть ім`я');return}
        if(is_sybmol(a.value)){err(a,'Можна вводити тільки букви')}
    }

    var valid_email=(a)=>{
        if(!a.value){ err(a,'Введіть email');return}
        if(a.value[0]=='@'){err(a,'@ не може бути першим символом')}
        if(a.value[a.value.length-1]=='@'){err(a,'@ не може бути остфннім символом')}
    }

    var valid_age=(a)=>{
        if(!a.value){ err(a,"Введіть ваш вік");return}
        if(a.value<18){err(a,"Вам має бути більше 18 років")}
        if(a.value>150){err(a,"Люди так довго не живуть")}
    }

    form.addEventListener('submit' ,function(event){
        var name, email,age
        event.preventDefault()
        name = document.getElementById('name');
        email = document.getElementById('email');
        age = document.getElementById('number');
        remove_errors()
        valid_name(name)
        valid_email(email)
        valid_age(age)
    })
    