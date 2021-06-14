function getdata() {
    var obj;
    console.log("hello");
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => {
        globalThis.currency_codes=obj;
        globalThis.currency_codes_keys= Object.keys(obj);

        for(i=0;i<currency_codes_keys.length;i++){
            var option = document.createElement('option');
            option.value= currency_codes_keys[i];
            option.innerText= currency_codes[option.value];
            document.getElementById('fcurrency').appendChild(option);
        }
        for(i=0;i<currency_codes_keys.length;i++){
            var option = document.createElement('option');
            option.value= currency_codes_keys[i];
            option.innerText= currency_codes[option.value];
            document.getElementById('scurrency').appendChild(option);
        }
    });
    console.log("hello");
}

function addOptions(id){
    for(i=0;i<currency_codes_keys.length;i++){
        var option = document.createElement('option');
        option.value= currency_codes_keys[i];
        option.innerText= currency_codes[option.value];
        document.getElementById(id).appendChild(option);
    }
}

function calculate(){
    fcr=document.getElementById('fcurrency').value;
    scr=document.getElementById('scurrency').value;
    
    var obj;
    fetch('https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/'+fcr+'/'+scr+'.json')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() =>{
        keys=Object.keys(obj)
        document.getElementById('exrate').innerText=obj[keys[1]]
        document.getElementById('exvalue').innerText=document.getElementById('currency-id').value*obj[keys[1]]
        //console.log(obj)
    });
   
}
function load(){

}
getdata();




