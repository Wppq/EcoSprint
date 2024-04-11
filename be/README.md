# Prosedur Menjalankan Aplikasi

### Mysql
- Pastikan database mysql tersedia
- Atur env sesuai dengan konfigurasi database anda
- Buat database dengan nama `eco_sprint`

### Inisialisasi
- Jalankan inisilisasi pada terminal `composer install`
- Jalankan perintah pada terminal `php artisan migrate --seed`
- Kemudian jalankan perintah `php artisan serve`
- Atau jika kalian memiliki makefile jalankan dengan perintak `make up` 