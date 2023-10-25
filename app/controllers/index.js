import { https } from "../services/services.js";
import { layThongTinTuForm } from "./controller.js";
import { showDataItem } from "./controller.js";
import { renderItemList } from "./controller.js";

var selectedId = null;

let fetchItemList = () => {
  https
    .get("/Product")
    .then((res) => {
      renderItemList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
//lần đầu load trang
fetchItemList();

//xóa sản phẩm
function deleteItem(id) {
  https
    .delete(`/Product/${id}`)
    .then((res) => {
      fetchItemList();
      // sau khi xóa thành công => gọi lại api  lấy data mới nhất => update layout
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
window.deleteItem = deleteItem;

//thêm sản phẩm
window.addItem = () => {
  let item = layThongTinTuForm();
  https
    .post("/Product", item)
    .then((res) => {
      $("#exampleModal").modal("hide");
      console.log(res);
      fetchItemList();
    })
    .catch((err) => {
      console.log(err);
    });
};

//lấy chi tiết chỉnh sửa
window.editItem = (id) => {
  selectedId = id;
  https
    .get(`/Product/${id}`)
    .then((res) => {
      $("#exampleModal").modal("show");
      showDataItem(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updateItem = () => {
  let item = layThongTinTuForm();
  https
    .put(`/Product/${selectedId}`, item)
    .then((res) => {
      $("#exampleModal").modal("hide");
      console.log(res);
      fetchItemList();
    })
    .catch((err) => {
      console.log(err);
    });
};

//tìm kiếm
window.searchByName = () => {
  const searchInput = document.getElementById("searchInput").value; // Lấy giá trị từ ô tìm kiếm
  if (searchInput.trim() !== "") {
    // Kiểm tra xem ô tìm kiếm có giá trị không trống
    https
      .get(`/Product?name=${searchInput}`)
      .then((res) => {
        renderItemList(res.data); // Display only the matching products
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    // Nếu ô tìm kiếm trống, hiển thị tất cả sản phẩm
    fetchItemList();
  }
};
