let ss=document.getElementById("searchtitle");

function changetitle(){
    /* let title=document.getElementById('searchtitle'); */
    if(ss.value !='')
    document.title=ss.value;
    else
    document.title="Youtube";
}
