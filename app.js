const paletas = document.querySelectorAll('.paleta');

// JavaScript para mostrar y ocultar el modal
const modal = document.getElementById("modal");

function mostrarModal(color) {
    modal.style.display = "flex";
    document.body.style.backgroundColor = color;
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.backgroundColor = "white";
    }, 700);
}

paletas.forEach(paleta => {
    const colores = paleta.querySelectorAll('.color');

    colores.forEach(color => {
        color.addEventListener('click', () => {
            const codigo = color.dataset.color;
            navigator.clipboard.writeText(codigo).then(() => {
                console.log('Código copiado al portapapeles: ' + codigo);
                color.classList.add('copied');
                setTimeout(() => {
                    color.classList.remove('copied');
                }, 500);
                mostrarModal(codigo);
            }).catch(() => {
                console.error('Error al copiar el código: ' + codigo);
            });
        });
    });
});

