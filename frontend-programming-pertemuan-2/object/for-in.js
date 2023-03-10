/**
 * Membuat object menggunakan {}.
 * Menyimpan nilai dengan format key : value
 */
const user = {
  name: "Taufik kursalam",
  age: 21,
  major: "Teknik Informatika",
};

/**
 * Looping object menggunakan for-in.
 * Mengakses nilai menggunakan cara bracket.
 */
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
