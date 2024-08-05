import { sortEl } from "../common.js";
//Sorting comp
(function () {
  const handleClick = () => {
    console.log("You click the handle for sorting");
  };

  sortEl.addEventListener("click", handleClick);
})();
