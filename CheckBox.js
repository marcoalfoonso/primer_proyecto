document.addEventListener('DOMContentLoaded', () => {
  const f = document.getElementById('demo-form');
  const s = document.getElementById('salida');

  f.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const data = new FormData(f);
    const obj = {};

    for (const [k, v] of data.entries()) {
      obj[k] = v;
    }

    // Campos especiales
    obj['boletin'] = f.boletin.checked; // checkbox no aparece en FormData si está desmarcado
    obj['rango'] = f.rango.value;       // llega como cadena

    s.textContent = JSON.stringify(obj, null, 2);
  });
});