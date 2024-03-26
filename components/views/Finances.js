import html from "html-literal";

export default state => html`
  <section id="finances">
    <div class="finances">
      <p>
        Welcome to finances! This is to help you keep track of current finances
      </p>
      <form id = "finances" method = "POST" action = "">
        <div id = "name">
          <label for = "financeName">Finance Name</label>
          <input type = "text" name = "financeName" id = "financeName" placeholder = "Enter finance name" required />
        </div>
        <div id = "costs">
          <label for = "cost">Cost</label>
          <input type = "number" name = "cost" id = "cost" placeholder = "Enter cost" step = "0.01" required />
          <select name = "type" id = "type">
            <option value = "">Select debit or income</option>
            <option value = "debit">Debit</option>
            <option value = "income">Income</option>
          </select>
        </div>
        <div id = "runningTotal">
          <label for = "total">Total</label>
          <input type = "number" name = "total" id = "total" placeholder = "Enter running total" step = "0.01" required />
        </div>
        <div class="submit">
          <span id="financeSubmitButton">submit</span>
        </div>
      </form>
      <table id = "financeTable">
        <tr>
          <th>Finance Name</th>
          <th>Cost</th>
          <th>Running Total</th>
        </tr>
      ${state.finances.map(finances => {
        return html`
          <tr>
            <td>
              ${finances.financeName}
            </td>
            <td>
              ${finances.cost}
            </td>
            <td>
              ${finances.total}
            </td>
          </tr>
        `;
      })}
  </section>
`;
