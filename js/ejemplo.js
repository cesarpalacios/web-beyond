
function go(){

    if (document.form.user.value  && document.form.password.value ){
        //alert(document.form.user.value, document.form.password.value);
        alert("bienvenido " + document.form.user.value);
        //window.location="rickandmorty.html";
        location.href="startbootstrap-sb-admin-2-gh-pages/index.html";
        //alert(location.href)
        //location.replace('rickandmorty.html')
    }else{
        alert("ingrese datos en usuario y contraseña");
    };

} 