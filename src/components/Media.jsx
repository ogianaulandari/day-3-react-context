import tripod from '../assets/images/tripod.jpg';
import camera from '../assets/images/camera.jpg';
import portrait from '../assets/images/portrait.jpg';
import Footer from './footer';

const Media = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-full min-h-screen flex flex-col font-sansMedia">
      <div className="flex flex-col items-center justify-center flex-1 p-8">
        <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Media</h1>
          <p className="text-base text-center">
          Informasi Seputar PaDI UMKM </p>
        </div>

        <div className="flex justify-center space-x-8">
        
          <div className="border border-gray-500 rounded-lg p-8 text-center w-80">
            <img src={ tripod } alt="Tripod" className="w-full h-36 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4" style={{ textAlign: 'justify' }}>Mengenal Jenis Tripod dan Masing-Masing Kelebihannya</h3>
                  <p className="text-base" style={{ textAlign: 'justify' }}>
                    Tripod adalah komponen penting dalam dunia fotografi untuk memudahkan Anda dalam meletakkan kamera agar tidak mudah goyang.
                  </p>
              </div>
          </div>
          <div className="border border-gray-500 rounded-lg p-8 text-center w-80">
            <img src={ camera } alt="Camera" className="w-full h-36 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4" style={{ textAlign: 'justify' }}>Mengenal Jenis Kamera dan Masing-Masing Kelebihannya</h2>
                  <p className="text-base" style={{ textAlign: 'justify' }}>
                    Kamera menjadi kebutuhan penting untuk menjepret gambar maupun merekam video dengan hasil yang mumpuni.
                  </p>
              </div>
          </div>
          <div className="border border-gray-500 rounded-lg p-8 text-center w-80">
            <img src={ portrait } alt="Handphone" className="w-full h-36 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4" style={{ textAlign: 'justify' }}>3 Rekomendasi Handphone yang Bisa Anda Beli</h2>
                  <p className="text-base" style={{ textAlign: 'justify' }}>
                    Handphone menjadi kebutuhan penting untuk komunikasi. Dulunya, handphone hanya bisa digunakan untuk telepon maupun SMS.
                  </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Media;
