export const View = {
  appElement: document.getElementById('timer'),

  render({ minutes, seconds }) {
    if (!View.appElement) {
      return;
    }

    View.appElement.innerHTML = `
        <p>Próximo alerta em:</p>
        <span>${minutes}:${seconds}</span>
    `;
  },
};
