class Data {
  datainstance = {};
  saveData(data) {
    console.log("the data to be saved is");
    console.log(data);
    this.datainstance = data;
    localStorage.setItem("tempXX", data);
  }
  getData() {
    return localStorage.getItem("tempXX");
  }
}

export default Data;
