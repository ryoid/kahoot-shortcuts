/* @refresh reload */
console.log('Kahoot Shortcuts loaded!');

window.document.addEventListener("keydown", function (event) {
  if (!["1", "2", "3", "4"].includes(event.key)) return;

  handleShortcut(event.key);
});

function handleShortcut(key) {
  const answer = document.querySelector(
    `[data-functional-selector="answer-${Number(key) - 1}"]`
  );
  if (!answer) return;
  answer.click();
}
