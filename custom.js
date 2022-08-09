import Data from "./js/data.js";
import InputEvent from "./js/inputEvent.js";
import ShowList from "./js/showList.js";

let updateIndex = null;
let mode = "save";
let targetData = [];

const data = new Data();
console.log(mode, updateIndex);
let showList = new ShowList({
  del: (index) => {
    data.delete(index);
    showList.render(data.read());
  },
  update: (index) => {
    mode = "update"; //현재 모드를 수정모드로 변경
    updateIndex = index; //수정할 포스트의 순서값을 전역변수에 할당
    const target = data.read().filter((item, idx, arr) => {
      return idx === index;
    });
    const input = document.querySelector("#title");
    input.value = target[0].title;
    console.log(mode, updateIndex, target[0].title);
  },
});

showList.render(data.read());
targetData = data.read();

new InputEvent({
  save: (value) => {
    if (mode === "save") {
      data.insert(value);
      showList.render(data.read());
    }
    if (mode === "update") {
      data.update(updateIndex, value);
      showList.render(data.read());
      mode = "save";
    }
  },
});
