function downloadVideo() {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");

  if (!url) {
    result.innerHTML = "Masukkan link dulu!";
    return;
  }

  result.innerHTML = "⏳ Loading...";

  fetch("https://www.tikwm.com/api/?url=" + encodeURIComponent(url))
    .then(res => res.json())
    .then(data => {
      if (data && data.data) {
        const video = data.data.play;

        result.innerHTML = `
          <video src="${video}" controls width="300"></video>
          <br><br>
          <a href="${video}" download>
            <button>Download Video</button>
          </a>
        `;
      } else {
        result.innerHTML = "❌ Gagal ambil video";
      }
    })
    .catch(() => {
      result.innerHTML = "⚠️ Error (kemungkinan API diblok jaringan)";
    });
    }
