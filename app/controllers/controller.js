export let renderItemList = (itemArr) => {
  let contentHTML = "";
  itemArr.forEach((item) => {
    let {
      id,
      name,
      type,
      price,
      screen,
      frontCamera,
      backCamera,
      img,
      condition,
      desc,
    } = item;
    let trString = `<tr>
                            <td>${id}</td>
                            <td>${name}</td>
                            <td>${type}</td>
                            <td>${price}</td>
                            <td>${screen}</td>
                            <td>${frontCamera}</td>
                            <td>${backCamera}</td>
                            <td>${img}</td>
                            <td>${desc}</td>
                            <td>${condition}</td>
                            <td>
                            <button onClick=deleteItem(${id}) class="btn btn-danger"> Xóa</button>
                        
                            <button onClick=editItem(${id}) class="btn btn-warning">Sửa</button>
                            </td>
                        </tr>`;
    contentHTML = contentHTML + trString;
  });

  document.getElementById("tbodyItem").innerHTML = contentHTML;
};

export let showDataItem = (item) => {
  document.getElementById("itemID").value = item.id;
  document.getElementById("tenSP").value = item.name;
  document.getElementById("loai").value = item.type;
  document.getElementById("giaSP").value = item.price;
  document.getElementById("manHinh").value = item.screen;
  document.getElementById("camTruoc").value = item.frontCamera;
  document.getElementById("camSau").value = item.backCamera;
  document.getElementById("tinhTrang").value = item.condition;
  document.getElementById("hinhAnh").value = item.img;
  document.getElementById("moTa").value = item.desc;
};

let getData = (idValue) => document.getElementById(idValue).value;

export let layThongTinTuForm = () => {
  let id = getData("itemID");
  let name = getData("tenSP");
  let type = getData("loai");
  let price = getData("giaSP");
  let screen = getData("manHinh");
  let frontCamera = getData("camTruoc");
  let backCamera = getData("camSau");
  let condition = getData("tinhTrang");
  let img = getData("hinhAnh");
  let desc = getData("moTa");
  return {
    id,
    name,
    type,
    price,
    screen,
    frontCamera,
    backCamera,
    condition,
    img,
    desc,
  };
};
