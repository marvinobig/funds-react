import React from "react";

function Modal(props) {
  return (
    <dialog id="addhtmlForm">
      <form>
        <fieldset>
          <legend>
            Add Expense{" "}
            <button type="button" onClick={props.closehtmlForm}>
              X
            </button>
          </legend>
          <section>
            <label htmlFor="item">Item</label>
            <input id="item" type="text" required />
          </section>
          <section>
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="Select" selected hidden disabled>
                Select an option
              </option>
              <option value="Food">Food</option>
              <option value="Utilities">Utilities</option>
              <option value="Transport">Transport</option>
              <option value="Housing">Housing</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Savings">Savings</option>
              <option value="Personal">Personal</option>
            </select>
          </section>
          <section>
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" required />
          </section>
          <section>
            <label htmlFor="date">Date</label>
            <input id="date" type="date" required />
          </section>
          <button type="button" id="spending-submit">
            Send
          </button>
        </fieldset>
      </form>
    </dialog>
  );
}

export default Modal;
