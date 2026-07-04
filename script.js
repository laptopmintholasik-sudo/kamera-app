const statusText = document.getElementById("status");

const btnKamera = document.getElementById("btnKamera");
const btnFoto = document.getElementById("btnFoto");
const btnUlang = document.getElementById("btnUlang");
const btnSimpan = document.getElementById("btnSimpan");

btnKamera.onclick = function(){

    statusText.innerHTML="🟡 Membuka kamera...";

    alert("Versi 2.4 berhasil dipasang.");

}
