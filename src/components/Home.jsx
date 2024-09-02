import home from '../assets/images/home.jpg';
import Footer from './footer';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#d7f1f5] to-[#51c7d6] dark:bg-gray-900 text-black dark:text-white w-full min-h-screen flex flex-col">
      <div className="flex flex-row items-center justify-center flex-1">
        <div className="flex-1 p-10">
          <h1 className='font-bold text-2xl font-Source-Sans-Pro font-sans'>
            PaDI UMKM Hadir Sebagai Satu <br />
            Solusi Bisnis bagi UMKM, BUMN dan Pemerintah.
          </h1>
          <p className='font-normal text-lg mt-4'>
            Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun <br />
            Swasta untuk mendapatkan transaksi dengan harga dan kualitas terbaik.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={ home } alt="Benefit" className="w-3/4 h-auto object-contain" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
