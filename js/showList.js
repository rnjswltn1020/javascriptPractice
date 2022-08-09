export default class {
  constructor({ del, update }) {
    this.$showBox = document.querySelector("#showBox");
    this.$title = document.querySelector("#title");
    this.del = del;
    this.update = update;
  }

  render(db) {
    console.log(db);
    this.$showBox.innerHTML = "";

    db.map((data) => {
      let item = document.createElement("article");
      item.classList.add("post");

      let tags = `
        <h2>${data.title}</h2>
        <span>${data.date}</span>
        <input class='btnDel' type='button' value='delete' />
		<input class='btnUpdate' type='button' value='edit' />
      `;

      item.innerHTML = tags;
      this.$showBox.appendChild(item);
    });

    const $btnDel = document.querySelectorAll(".btnDel");
    const $btnEdit = document.querySelectorAll(".btnUpdate");

    $btnDel.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        console.log(idx);
        this.del(idx);
      });
    });

    $btnEdit.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        console.log(idx);
        this.update(idx);
      });
    });
  }
}
