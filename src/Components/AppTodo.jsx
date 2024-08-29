import React from "react";

const AppTodo = () => {
  return (
    <div class="container">
      <div class="row anotherRow">
        <div class="col-6">
          <input type="text" placeholder="Ente Your  Text  Here  " />
        </div>

        <div class="col-4">
          <input type="date" name="date" id="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn button btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppTodo;
