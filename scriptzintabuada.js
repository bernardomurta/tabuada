function tabuada(){
var numero1=document.getElementById('numero')
var tabu=document.getElementById('tabu')
if(numero1.value.length==0){
    window.alert('ERRO')}
    else{
        let n=Number(numero1.value)
        tabu.innerHTML=''
        for(var c=1;c<=10;c++){
            let resp=(n*c)
            let item=document.createElement('option')
            item.text=`${n} X ${c}= ${resp}`
            item.value=`tab${c}`//para JS n faz muito sentido, mas para outras linguagens faz
            tabu.appendChild(item)



        }
    }



}


