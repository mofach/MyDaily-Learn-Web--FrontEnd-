# Tentang Framework CSS Bootstrap

Bootstrap adalah sebuah framework CSS yang populer dan banyak digunakan untuk membantu pengembangan antarmuka pengguna (*user interface*) pada aplikasi berbasis web. Bootstrap dibuat oleh Mark Otto dan Jacob Thornton, dua pengembang dan desainer di Twitter. Bootstrap menyediakan berbagai komponen dan tata letak yang telah dirancang sebelumnya, sehingga memudahkan pengembang dalam membuat desain yang responsif, modern, dan konsisten tanpa harus menulis kode dari awal. Framework ini menggunakan pendekatan *mobile-first*, di mana desain untuk perangkat seluler menjadi prioritas, lalu diperluas untuk perangkat dengan layar yang lebih besar. Bootstrap sudah merilis banyak versi, yang terbaru adalah Bootstrap 5, lebih tepatnya Bootstrap 5.3.3.

## Cara Penggunaan Bootstrap

Secara umum, untuk menggunakan Bootstrap terdapat dua metode utama, yaitu:

1. **Menggunakan CDN (Content Delivery Network)**

   Dengan menghubungkan langsung ke URL CDN, Bootstrap dapat digunakan tanpa perlu diunduh. Biasanya, URL disimpan di dalam `<head>` seperti layaknya menghubungkan file CSS, atau disimpan di dalam `<body>` dengan tag `<script>` seperti menghubungkan *script.js*. 

   **Kelebihan**: Developer tidak perlu mengunduh *source library* Bootstrap.

   **Kekurangan**: Saat pengembangan harus selalu terkoneksi dengan internet. Setelah dideploy, tampilan juga mungkin sedikit lebih lambat karena *framework* tidak disimpan di server bersama *source code*.

2. **Mengunduh dan Menyimpan secara Lokal**

   File Bootstrap (CSS dan JavaScript) dapat diunduh dari situs resminya ([getbootstrap.com](https://getbootstrap.com)) dan diintegrasikan secara lokal ke proyek. Pengguna perlu menambahkan file CSS dan JavaScript Bootstrap ke direktori proyek mereka dan menghubungkannya di HTML.

   **Kelebihan**: Saat pengembangan tidak perlu selalu terkoneksi dengan internet, dan saat memuat tampilan lebih cepat karena *framework* ikut terdeploy bersama *source code*.

   **Kekurangan**: Developer harus mendownload terlebih dahulu *framework* yang diperlukan, sehingga perlu effort lebih di awal pengembangan.

## Cara Menggunakan Komponen Bootstrap

Setelah *framework* terhubung, developer dapat melakukan *styling* dengan memanggilnya sebagai nama *class* (komponen Bootstrap) di dalam elemen yang akan distyling. Berbeda dengan menggunakan CSS biasa, di mana elemen harus dipanggil satu per satu untuk distyling, dengan Bootstrap, developer cukup membaca dokumentasi tentang nama-nama komponen yang akan menggambarkan seperti apa nantinya tampilan web.
