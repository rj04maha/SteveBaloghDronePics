import React from "react";

const CartItem = props => {
  return (
    <tr>
      <td data-label="Photo">{props.photo}</td>
      <td data-label="Description">{props.description}</td>
      <td data-label="Digital Copy">
        Quantity:{" "}
        <input type="number" name="digital_quantity" min="0" max="100" />
      </td>
      <td data-label="Printed Copy">
        <table class="ui very basic striped table">
          <tbody>
            <tr>
              <td>
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>4 x 6 </label>
                </div>
              </td>
              <td>
                Quantity:{" "}
                <input
                  type="number"
                  name="printed_quantity"
                  min="0"
                  max="100"
                />
              </td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td>
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>6 x 11 </label>
                </div>
              </td>
              <td>
                Quantity:{" "}
                <input
                  type="number"
                  name="printed_quantity"
                  min="0"
                  max="100"
                />
              </td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>20 x 30 </label>
                </div>
              </td>
              <td>
                Quantity:{" "}
                <input
                  type="number"
                  name="printed_quantity"
                  min="0"
                  max="100"
                />
              </td>
              <td>$20.00</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default CartItem;
