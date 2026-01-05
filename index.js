const input = document.getElementById("qr-input");
const button = document.getElementById("generate-btn");
const output = document.getElementById("qr-output");

button.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) {
        alert("⚡ Enter something cosmic first! ⚡");
        return;
    }
    output.innerHTML = ""; // Clear previous QR
    QRCode.toCanvas(value, { width: 250, color: { dark: "#0ff", light: "#0000" } }, function (error, canvas) {
        if (error) console.error(error);
        output.appendChild(canvas);
    });
});
