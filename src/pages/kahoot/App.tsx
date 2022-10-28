import type { Component } from "solid-js";
import toast, { Toaster } from "solid-toast";

window.document.addEventListener("keydown", function (event) {
  if (!["1", "2", "3", "4"].includes(event.key)) return;
  handleShortcut(event.key);
});

const mcqMAP: Record<number, { text: string }> = {
  0: {
    text: "Red",
  },
  1: {
    text: "Blue",
  },
  2: {
    text: "Yellow",
  },
  3: {
    text: "Green",
  },
};

const tfMAP: Record<number, { text: string }> = {
  0: {
    text: "True",
  },
  1: {
    text: "False",
  },
};

function handleShortcut(_key: string) {
  const key = Number(_key) - 1;
  const answer = document.querySelector(
    `[data-functional-selector="answer-${key}"]`
  ) as HTMLDivElement | null;
  if (!answer) return;

  const isMcq =
    (document.querySelector(
      `[data-functional-selector="answer-3"]`
    ) as HTMLDivElement | null) !== null;

  console.log({ isMcq, key });

  toast.success(`Selected ${isMcq ? mcqMAP[key].text : tfMAP[key].text}`);
  answer.click();
}

const App: Component = () => {
  return (
    <div>
      <Toaster />
    </div>
  );
};

export default App;
