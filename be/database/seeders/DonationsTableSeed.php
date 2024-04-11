<?php

namespace Database\Seeders;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DonationsTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Donation::factory()->create([
            'title' => 'Penanaman Pohon Massal',
            'description' => 'Bantu kami menanam ribuan pohon untuk mengembalikan kehijauan alam dan melawan perubahan iklim.',
            'blog' => 'Penanaman Pohon Massal merupakan inisiatif yang tidak hanya penting, tetapi juga sangat berdampak dalam menjaga keberlanjutan lingkungan dan memperkuat keseimbangan ekosistem. Dalam konteks perubahan iklim global dan degradasi lingkungan yang semakin meningkat, kegiatan ini menjadi salah satu langkah strategis dalam mengatasi masalah deforestasi dan menjaga keberlanjutan alam. Dengan setiap pohon yang ditanam, kita tidak hanya mengurangi jumlah karbon di atmosfer, tetapi juga menghadirkan lingkungan yang lebih hijau, sehat, dan berkelanjutan bagi makhluk hidup di planet ini.\n Partisipasi Anda dalam program ini memiliki dampak jangka panjang yang signifikan, tidak hanya bagi lingkungan secara keseluruhan, tetapi juga bagi masyarakat lokal di sekitar area penanaman. Selain memberikan kontribusi dalam mengurangi perubahan iklim, penanaman pohon juga memiliki manfaat langsung seperti menjaga kesuburan tanah, mengurangi risiko bencana banjir, serta menyediakan sumber daya alam yang berkelanjutan. Dengan bergabung dalam misi melindungi bumi kita dan memberikan warisan hijau untuk generasi mendatang, Anda turut menjadi bagian dari solusi untuk masa depan yang lebih baik bagi alam dan manusia. Ayo bergabung, dan mari kita jaga bumi kita bersama-sama!',
            'image' => '2771837_penanaman_pohon_massal.jpg',
        ]);

        Donation::factory()->create([
            'title' => 'Program Konservasi Hutan Tropis',
            'description' => 'Bantu kami menanam ribuan pohon untuk mengembalikan kehijauan alam dan melawan perubahan iklim.',
            'blog' => 'Program Konservasi Hutan Tropis kami memiliki misi yang jauh lebih dalam daripada sekadar melestarikan kawasan hutan. Ini adalah tentang melindungi kehidupan yang bergantung padanya, tentang menjaga keanekaragaman hayati yang unik, dan tentang memastikan kelangsungan hidup ribuan spesies tumbuhan dan hewan yang terancam punah. Hutan tropis Kalimantan Timur adalah salah satu dari sedikit habitat alami yang tersisa bagi makhluk-makhluk ini, dan mendukung program ini berarti turut serta dalam usaha besar untuk menjaga keberlangsungan hidup mereka. Setiap langkah kecil yang diambil dalam program ini memiliki dampak besar dalam menjaga habitat satwa liar, mempertahankan keseimbangan ekosistem, dan melindungi sumber daya alam yang berharga bagi kita semua. \n Dengan menjadi bagian dari Program Konservasi Hutan Tropis, Anda tidak hanya memberikan kontribusi finansial, tetapi juga menyumbangkan energi dan semangat Anda dalam menjaga keberlanjutan lingkungan. Anda akan terlibat dalam berbagai kegiatan lapangan, mulai dari penanaman pohon hingga pemantauan keberlanjutan hutan, yang semuanya bertujuan untuk memastikan bahwa hutan tropis Kalimantan Timur tetap menjadi aset yang berharga bagi kehidupan kita dan generasi mendatang. Mari bersama-sama kita berkomitmen untuk melindungi hutan tropis ini sebagai warisan alam yang tak ternilai bagi kita semua.',
            'image' => '321434132_program_konservasi_hutan_tropis.jpg',
        ]);

        Donation::factory()->create([
            'title' => 'Penghijauan Kota',
            'description' => 'Bantu kami menanam pohon dan menciptakan ruang hijau di perkotaan untuk meningkatkan kualitas udara dan keindahan lingkungan.',
            'blog' => 'Program Penghijauan Kota tidak hanya berfokus pada peningkatan estetika lingkungan perkotaan, tetapi juga memiliki dampak yang luas dalam meningkatkan kualitas hidup penduduk kota. Melalui penanaman pohon dan pembuatan ruang hijau di tengah-tengah perkotaan, program ini bertujuan untuk mengatasi berbagai masalah lingkungan yang dihadapi oleh kota-kota besar, seperti polusi udara, pemanasan global, dan kepadatan penduduk yang tinggi. Selain itu, dengan meningkatkan jumlah ruang terbuka hijau, kami juga berharap dapat memberikan tempat rekreasi yang sehat dan nyaman bagi warga kota, yang penting untuk kesehatan fisik dan mental mereka. \n Keterlibatan masyarakat dalam Program Penghijauan Kota tidak hanya membantu dalam penanaman pohon dan perawatan ruang hijau, tetapi juga membangun rasa memiliki terhadap lingkungan mereka. Melalui partisipasi aktif dalam program ini, warga kota Surabaya memiliki kesempatan untuk merasakan langsung dampak positif yang dihasilkan oleh lingkungan yang hijau dan sehat. Ini juga menciptakan kesadaran akan pentingnya menjaga lingkungan di tingkat lokal, yang pada gilirannya dapat menginspirasi tindakan positif lainnya dalam mendukung keberlanjutan lingkungan. Dengan demikian, Program Penghijauan Kota bukan hanya tentang menciptakan lingkungan yang hijau, tetapi juga tentang membangun komunitas yang peduli dan berkelanjutan di tengah-tengah kota metropolitan.',
            'image' => '232837218_penghijauan_kota.jpg',
        ]);

        Donation::factory()->create([
            'title' => 'Rehabilitasi Lahan Gambut',
            'description' => 'Bantu kami memulihkan lahan gambut yang rusak untuk melindungi habitat satwa liar dan mengurangi emisi karbon.',
            'blog' => 'Program Rehabilitasi Lahan Gambut menjadi sangat penting dalam konteks pelestarian lingkungan Indonesia karena lahan gambut memiliki peran vital dalam siklus karbon global. Melalui upaya memulihkan lahan gambut yang rusak, program ini tidak hanya bertujuan untuk menjaga keberagaman hayati dan keberlangsungan hidup spesies satwa liar yang bermukim di sana, tetapi juga untuk mengurangi tingkat emisi karbon yang tinggi dari lahan gambut terdegradasi. Dengan memulihkan fungsi ekosistem gambut yang rusak, kami berharap dapat memperbaiki kondisi lingkungan sekitar dan mengurangi kontribusi Indonesia terhadap perubahan iklim global. \n Partisipasi Anda dalam Program Rehabilitasi Lahan Gambut sangat berarti dalam mencapai tujuan-tujuan penting ini. Dengan dukungan Anda, kami dapat mempercepat proses pemulihan lahan gambut yang terdegradasi, yang pada gilirannya akan memberikan manfaat jangka panjang bagi lingkungan dan masyarakat sekitar. Selain itu, Anda juga akan menjadi bagian dari gerakan yang lebih besar untuk menjaga keberlanjutan lingkungan dan melindungi sumber daya alam yang berharga bagi generasi mendatang. Dengan demikian, bergabunglah dengan kami dalam upaya memulihkan lahan gambut Indonesia dan memberikan kontribusi positif bagi masa depan bumi kita.',
            'image' => '2328379128_rehabilitasi_lahan_gambut.jpg',
        ]);

        Donation::factory()->create([
            'title' => 'Penanaman Mangrove',
            'description' => 'Bergabunglah dalam program penanaman mangrove untuk melindungi garis pantai dari abrasi dan menyediakan habitat bagi berbagai spesies laut.',
            'blog' => 'Program Penanaman Mangrove di Aceh merupakan salah satu langkah penting dalam menjaga ekosistem pesisir yang rentan terhadap kerusakan dan perubahan akibat aktivitas manusia dan fenomena alam. Dengan menanam mangrove, kami berupaya memperkuat garis pantai Aceh untuk mengurangi abrasi dan melindungi komunitas pesisir dari dampak buruk gelombang pasang dan badai tropis. Selain itu, keberadaan hutan mangrove juga berperan sebagai benteng alamiah dalam menyerap energi dari gelombang laut yang dapat mengurangi dampak langsung dari bencana alam. \n Partisipasi Anda dalam program ini memiliki dampak jangka panjang yang sangat penting bagi kesejahteraan ekosistem pesisir Aceh. Selain membantu menciptakan perlindungan alam bagi masyarakat setempat, Anda juga turut berkontribusi dalam melestarikan keanekaragaman hayati laut yang kaya di wilayah Aceh. Dengan bergabung dalam program ini, Anda dapat merasakan langsung dampak positif yang dihasilkan oleh upaya kolektif dalam menjaga lingkungan laut kita yang rentan dan berharga. Oleh karena itu, mari bersama-sama menjaga garis pantai Aceh dan memelihara kehidupan bawah laut yang indah dan beragam bagi generasi mendatang.',
            'image' => '2233778834_penanaman_magrove.jpg',
        ]);
    }
}
