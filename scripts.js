
const itens = document.querySelectorAll('.item');
const dropzones = document.querySelectorAll('.tieritems');

let itemArrastando = null;

itens.forEach((item) => {
    item.addEventListener('dragstart', (event) => {
        itemArrastando = item;
        event.dataTransfer.setData('text/plain', event.target.id);
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', (event) => {
        item.classList.remove('dragging');
    });
});

dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropzone.classList.add('over');
    });

    dropzone.addEventListener('dragleave', (event) => {
        dropzone.classList.remove('over');
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropzone.classList.remove('over');
        if (itemArrastando) {
            dropzone.appendChild(itemArrastando);
        }
    });
});