import React, { useState } from "react";
import Modal from "./AddForm";

function App() {
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState({});

  function showAddForm() {
    const addForm = document.getElementById("addForm");
    addForm.showModal();
  }

  function closeAddForm() {
    const addForm = document.getElementById("addForm");
    addForm.close();
  }

  return (
    <div className="App">
      <nav>
        <h1>FUNDS</h1>
        <button className="add-form" type="button" onClick={showAddForm}>
          Add
        </button>
      </nav>
      <Modal closeForm={closeAddForm} />
    </div>
  );
}

export default App;
