import React, { useEffect, useState } from "react";

const TableauAdmin = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5174/api/meubles/"
      );
      const newData = await response.json();
      setItem(newData);
    };

    fetchData();
  }, []);
  console.log(item);

  return (
    <div>
      <table className="mx-auto">
        <thead className="bg-black text-white">
          <tr>
            <th id="th1">Meuble</th>
            <th id="th2">Prix</th>
            <th id="th3">Statut</th>
            <th id="th4">Action</th>
          </tr>
        </thead>
        {item.map((meuble) => (
          <tr>
            <td className="text-leftr">{meuble.nom}</td>
            <td className="text-center">{meuble.prix} € </td>
            <td className="text-center">{meuble.statut}</td>
            <td className="flex justify-around items-center">
              <button id="modify">M</button>
              <button id="delete">D</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableauAdmin;
