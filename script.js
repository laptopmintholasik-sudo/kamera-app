// =========================
// Ambil Komponen HTML
// =========================

const statusText = document.getElementById("status");

const btnKamera = document.getElementById("btnKamera");
const btnFoto = document.getElementById("btnFoto");
const btnUlang = document.getElementById("btnUlang");
const btnSimpan = document.getElementById("btnSimpan");

const video = document.getElementById("video");
const hasilFoto = document.getElementById("hasilFoto");
const canvas = document.getElementById("canvas");

// =========================
// Variabel Global
// =========================

let stream = null;
// =========================
// Mengubah Status
// =========================

function updateStatus(teks) {
    statusText.innerHTML = teks;
}

// =========================
// Membuka Kamera
// =========================

async function bukaKamera() {

    updateStatus("🟡 Membuka kamera...");

    try {

        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        video.srcObject = stream;

        await video.play();

        video.style.display = "block";
        hasilFoto.style.display = "none";

        btnFoto.disabled = false;
        btnUlang.disabled = true;
        btnSimpan.disabled = true;
        btnKamera.disabled = true;

        updateStatus("🟢 Kamera Aktif");

    } catch (err) {

        updateStatus("🔴 Kamera gagal dibuka");

        alert(err.name + "\n" + err.message);

    }

}

// =========================
// Event Tombol
// =========================

btnKamera.addEventListener("click", bukaKamera);
