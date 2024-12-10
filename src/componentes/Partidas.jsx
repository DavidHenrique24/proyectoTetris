import React, { useState } from 'react';

const Partidas = () => {
  const partidas = useState([
    { id: 1, nick: 'Jugador1', puntos: 1200, fecha: '2024-12-01' },
    { id: 2, nick: 'Jugador2', puntos: 1500, fecha: '2024-12-02' },
    { id: 3, nick: 'Jugador3', puntos: 980, fecha: '2024-12-03' },
    { id: 4, nick: 'Jugador4', puntos: 1100, fecha: '2024-12-04' },
    { id: 5, nick: 'Jugador5', puntos: 1350, fecha: '2024-12-05' },
  ]);

  return (
    <div>
      <h2>Partidas Jugadas</h2>
      <table>
        <thead>
          <tr>
            <th>Nick</th>
            <th>Puntos</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {partidas.map((partida) => (
            <tr key={partida.id}>
              <td>{partida.nick}</td>
              <td>{partida.puntos}</td>
              <td>{partida.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Partidas;

