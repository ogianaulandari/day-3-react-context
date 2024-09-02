import Footer from "./footer";

const Help = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-cusBlack dark:text-white w-full min-h-screen flex flex-col font-sans">
      <div className="flex flex-col items-center justify-center flex-1 p-8">
      <h1 className="text-4xl font-bold mb-12">Pilih Topik Sesuai Kendalamu</h1>

       <div className="flex justify-center space-x-8">
        <div className="border border-gray-500 rounded-lg p-8 text-center w-64">
          <h2 className="text-lg font-bold mb-4">Akun</h2>
          <p className="text-left text-base font-medium mb-4">
            Cara Buyer Batalkan Penawaran Tender Kilat <br />
            Cara Buyer Buat Tender Kilat <br />
            Cara Login Akun Buyer B2B PaDI UMKM <br/>
            Cara Daftar Akun Admin Perusahaan <br />
          </p>
          <button className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
            Lihat Semua Artikel
          </button>
        </div>
        <div className="border border-gray-500 rounded-lg p-8 text-center w-64">
          <h2 className="text-lg font-bold mb-4">Pemesanan</h2>
          <p className="text-left text-base font-medium mb-4">
            Cara Terima dan Checkout Tender Kilat <br />
            Cara Belanja dengan Termin <br />
            Bagaimana Cara Belanja B2B di PaDI UMKM <br/>
            Cara Menindaklanjuti Permintaan Pembelian oleh Manager <br />
          </p>
          <button className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
            Lihat Semua Artikel
          </button>
        </div>
        <div className="border border-gray-500 rounded-lg p-8 text-center w-64">
          <h2 className="text-lg font-bold mb-4">Pembayaran & Perpajakan</h2>
          <p className="text-left text-base font-medium mb-4">
            Fitur Saldo Refund bagi Pembeli B2B PaDI UMKM <br />
            Pembayaran Tempo <br />
            Cara Revisi Pajak<br/>
            Pembayaran Langsung <br />
          </p>
          <button className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
            Lihat Semua Artikel
            </button>
          </div>
        </div>
      </div><Footer/>
    </div>
  );
};

export default Help;
