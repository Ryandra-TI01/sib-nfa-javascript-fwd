import users from "./data.js";

// 3 perintah index, store, destroy

const index = () => {
   users.map((user, index) => {
    return console.log(
      `${index + 1}. nama: ${user.nama}, umur: ${user.umur}, alamat: ${user.alamat}`
    );
  });
};

const store = (user) => {
  users.push(user);
  console.log("Data berhasil ditambahkan");
  index();
}
const destroy = (i) => {
    users.splice(i,1);
    console.log("Data berhasil dihapus");
    index();
}

export {index, store, destroy};