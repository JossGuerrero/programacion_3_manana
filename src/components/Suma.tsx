import { useState } from 'react';

export default function Suma() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [res, setRes] = useState(0);

  const sumar = (e) => {
    e.preventDefault();
    const resultado = n1 + n2;
    setRes(resultado);
  };

  return (
    <form onSubmit={sumar}>
      <input
        type="number"
        value={n1}
        onChange={(e) => setN1(Number(e.target.value))}
      />
      <input
        type="number"
        value={n2}
        onChange={(e) => setN2(Number(e.target.value))}
      />
      <button type="submit">Sumar</button>
      <p>Resultado: {res}</p>
    </form>
  );
}