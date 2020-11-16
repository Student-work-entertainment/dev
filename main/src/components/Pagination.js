import React from "react";
import { Link } from "react-router-dom";

export const Paginations = () => {
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li class="page-item">
        <Link className="page-link" href="#">
          Previous
        </Link>
      </li>
      <li class="page-item">
        <Link className="page-link" href="#">
          1
        </Link>
      </li>
      <li class="page-item">
        <Link className="page-link" href="#">
          2
        </Link>
      </li>
      <li class="page-item">
        <Link className="page-link" href="#">
          3
        </Link>
      </li>
      <li class="page-item">
        <Link className="page-link" href="#">
          Next
        </Link>
      </li>
    </ul>
  </nav>;
};
