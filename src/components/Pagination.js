import { pagiEl } from "../common.js";
// Simple Pagination
(function () {
  const handleClick = () => {
    console.log("You click the handle for pagination");
  };

  pagiEl.addEventListener("click", handleClick);
})();

// const Item = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("This is for testing purpose only");
//     }, 1000);
//   });
// };
