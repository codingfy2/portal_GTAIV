import { useState } from 'react';

const storageKey = 'gta-vi-brasil-checklist-v1';
const savedMessage = 'O progresso fica salvo neste navegador.';
const tasks = [
  ['console', 'Atualizar o sistema do console'],
  ['espaco', 'Conferir espaço livre no SSD'],
  ['edicao', 'Conferir a edição e a plataforma'],
  ['download', 'Concluir a instalação'],
  ['ajustes', 'Revisar legendas e acessibilidade']
];

function restoreChecklist() {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    const completed = Array.isArray(saved) ? tasks.filter(([key]) => saved.includes(key)).map(([key]) => key) : [];
    return { completed, message: savedMessage };
  } catch {
    return { completed: [], message: 'Não foi possível carregar o progresso anterior.' };
  }
}

export function Checklist() {
  const [{ completed, message }, setChecklist] = useState(restoreChecklist);

  function update(key: string, checked: boolean) {
    const next = checked ? [...completed, key] : completed.filter(item => item !== key);
    let message = savedMessage;
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      message = 'O progresso está disponível durante esta visita.';
    }
    setChecklist({ completed: next, message });
  }

  return <section className="panel" id="checklist">
    <span className="label">PROGRESSO LOCAL</span>
    <h2>Checklist de lançamento</h2>
    <p aria-live="polite">{completed.length} de {tasks.length} concluídos</p>
    <progress aria-label="Progresso do checklist" max={tasks.length} value={completed.length} />
    {tasks.map(([key, label]) => <label key={key}>
      <input type="checkbox" value={key} checked={completed.includes(key)} onChange={event => update(key, event.target.checked)} />
      {label}
    </label>)}
    <p className="muted">{message}</p>
  </section>;
}
