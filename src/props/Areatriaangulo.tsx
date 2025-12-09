import { useState } from 'react';

export default function AreaTriangulo() {
  
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);
  const [area, setArea] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const resultado = (base * altura) / 2;
   
    setArea(resultado);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h3>Calcular Área de Triángulo</h3>
        
      <input 
            type="number" 
            placeholder="Base"
            value={base}
            onChange={e => setBase(Number(e.target.value))} 
        /><br/>
      
      <input 
            type="number" 
            placeholder="Altura"
            value={altura}
            onChange={e => setAltura(Number(e.target.value))} 
        /><br/>
      
      <button type="submit">Calcular Área</button>
      
        <p>Área: {area}</p>
    </form>
  );
}