import React from "react";

const TodoItem1 = () => {
  const todoName = "Buy Milk";
  const todoDate = "4/10/2024";

  return (
    <div>
      <div class="container">
        <div class="row anotherRow">
          <div class="col-6">{todoName}</div>

          <div class="col-4">{todoDate} </div>
          <div class="col-2">
            <button type="button" class="btn button btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
