import React from "react";

function Content(props) {
  return (
    <div className="container mt-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Work position {props.value}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}
export default Content;
