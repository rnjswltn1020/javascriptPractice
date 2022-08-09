export default class {
  constructor() {
    this._db = [
      { title: "title1", date: "2022-05-04" },
      { title: "title2", date: "2022-05-05" },
      { title: "title3", date: "2022-05-06" },
    ];
  }

  read() {
    return this._db;
  }

  //인수값으로 전달받은 데이터와 순서값으로 해당 순서값의 정보를 변경
  update(index, data) {
    console.log(index, data);
    if (!data) return;

    let post = {
      title: data.title,
      date: this.formatDate(),
    };
    this._db[index] = post;
  }

  delete(index) {
    console.log(index);
    this._db.splice(index, 1);
  }

  insert(data) {
    if (!data) return;

    let post = {
      title: data.title,
      date: this.formatDate(),
    };

    this._db.unshift(post);
    console.log(this._db);
  }

  formatDate() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    console.log(month);

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    const result = [year, month, day].join("-");
    return result;
  }
}
