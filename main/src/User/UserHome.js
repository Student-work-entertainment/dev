import React from "react";
import { SearchJob } from "../components/SearchJob";

function UserHome() {
  return (
    <div>
      <SearchJob />
      <blockquote class="blockquote text-center">
        <p class="mb-0 mt-4">Работа не волк - в лес не убежит</p>
        <footer class="blockquote-footer">Поговорка лентяев</footer>
      </blockquote>
      <hr />
    </div>
  );
}
export default UserHome;
