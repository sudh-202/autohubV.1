import CarCarousel from '../components/CarCarousel';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4">
        <h1 className="text-3xl font-bold">Newly Launched Cars</h1>
      </header>
      <main className="p-4">
        <CarCarousel />
      </main>
    </div>
  );
};

export default Home;