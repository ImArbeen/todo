import React from "react";

const TodoItem2 = () => {
  const todoName = "Buy Apple";
  const todoDate = "1/08/2024";
  return (
    <div>
      <div class="container ">
        <div class="row anotherRow">
          <div class="col-6">{todoName}</div>

          <div class="col-4"> {todoDate}</div>
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

export default TodoItem2;
