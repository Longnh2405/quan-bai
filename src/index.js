const danhSachQuanBai = [
  {
    id: 1,
    name: "Ba bích", // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
    exp: 3, //Hệ số quân bài (từ 1 đến 13)
    point: 1, // Điểm của quân bài (từ 1 đến 4)
  },
  {
    id: 2,
    name: "Năm rô",
    exp: 5,
    point: 3,
  },
  {
    id: 3,
    name: "Bốn cơ",
    exp: 4,
    point: 4,
  },
];

function nhapQuanBai() {
  let id = prompt("Nhập id : ");
  let name = prompt("Nhập tên: ");
  let exp = prompt("Nhập hệ số: ");
  let point = prompt("Nhập điểm : ");
  id = Number(id);
  exp = Number(exp);
  point = Number(soLanVoDich);
  danhSachDoiBong.push({
    id: id,
    name: name,
    exp: exp,
    point: point,
  });
  console.log("Nhập dữ liệu thành công, mời bạn tiếp tục thao tác!");
}
function nhapMangQuanBai() {
  let count = prompt("Nhập số lượng quân bài: ");
  count = Number(count);
  for (let i = 0; i < count; i++) {
    let id = prompt("Nhập id : ");
    let name = prompt("Nhập tên: ");
    let exp = prompt("Nhập hệ số: ");
    let point = prompt("Nhập điểm : ");
    id = Number(id);
    exp = Number(exp);
    point = Number(soLanVoDich);
    danhSachDoiBong.push({
      id: id,
      name: name,
      exp: exp,
      point: point,
    });
    console.log("Nhập dữ liệu thành công, mời bạn tiếp tục thao tác!");
  }
}
function sapXepTang() {
  let coutn = danhSachQuanBai.length;
  for (let i = 0; i < coutn - 1; i++) {
    let min = i;
    let luu;
    for (let j = i + 1; j < coutn; j++) {
      if (danhSachQuanBai[min].exp > danhSachQuanBai[j].exp) {
        min = j;
      }
    }
    if (min != i) {
      luu = danhSachQuanBai[min];
      danhSachQuanBai[min] = danhSachQuanBai[i];
      danhSachQuanBai[i] = luu;
    }
  }
  console.log(danhSachQuanBai);
  return danhSachQuanBai;
}
function sapXepGiam() {
  let coutn = danhSachQuanBai.length;
  for (let i = 0; i < coutn - 1; i++) {
    let min = i;
    let luu;
    for (let j = i + 1; j < coutn; j++) {
      if (danhSachQuanBai[min].exp < danhSachQuanBai[j].exp) {
        min = j;
      }
    }
    if (min != i) {
      luu = danhSachQuanBai[min];
      danhSachQuanBai[min] = danhSachQuanBai[i];
      danhSachQuanBai[i] = luu;
    }
  }
  console.log(danhSachQuanBai);
  return danhSachQuanBai;
}
function hienThi() {
  hienThi.forEach((value) => {
    console.log("ID:", value.id);
    console.log("Tên :", value.name);
    console.log("Hệ số:", value.exp);
    console.log("Điểm:", value.point);
  });
}
function menu() {
  let todo = true;
  do {
    let luachon = prompt(`
      ===Menu danh bai ====
      1. Nhập 1 quân bài
      2. Nhập mảng các quân bài
      3. Sắp xếp tăng dần
      4. Sắp xếp giảm dần
      5. Xuất dữ liệu
      6. Thoát`);
    luachon = Number(luachon);
    switch (luachon) {
      case 1:
        nhapQuanBai();
        break;
      case 2:
        nhapMangQuanBai();
        break;
      case 3:
        sapXepTang();
        break;
      case 4:
        sapXepGiam();
        break;
      case 5:
        hienThi();
        break;
      case 6:
        console.log("Goodbye!");
        todo = false;
        break;
    }
  } while (todo);
}
menu();
