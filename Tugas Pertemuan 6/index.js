import {index, store, destroy} from "./controller.js";

const main = () => {
    // tampilkan data user
    index();
    // menambahkan 2 user
    const user1 = {nama: 'nina', umur: 85, alamat: 'medan'}
    const user2 = {nama: 'olga', umur: 90, alamat: 'kupang'}
    store(user1)
    store(user2)
    // menghapus 1 user terakhir
    destroy(12)
}
main();