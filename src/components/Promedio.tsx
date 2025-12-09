import { useState } from 'react';

export default function Promedio() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
 const [n3, setN3] = useState(0);
  const [res, setRes] = useState(0);

  const calcularPromedio = (e) => {
    e.preventDefault();
   
    const resultado = (n1 + n2 + n3) / 3;
    setRes(resultado);
  };

  return (
    <form onSubmit={calcularPromedio}>
      <input
        type="number"
        value={n1}
        onChange={(e) => setN1(Number(e.target.value))}
        placeholder="Nota 1"
      />
      <input
        type="number"
        value={n2}
        onChange={(e) => setN2(Number(e.target.value))}
        placeholder="Nota 2"
      />
 <input
        type="number"
        value={n1}
        onChange={(e) => setN3(Number(e.target.value))}
        placeholder="Nota 3"
      />
      {/* El botón dice "Calcular Promedio" */}
      <button type="submit">Calcular Promedio</button>
      {/* La etiqueta del resultado dice "Promedio" */}
      <p>Promedio: {res}</p>
    </form>
  );
}