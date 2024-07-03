export default function Hero() {
  return (
    <div>
        <div className="min-h-[45rem] flex items-end justify-center bg-[url('/banner.jpg')] bg-cover bg-no-repeat bg-center">
            <h1 className="bg-teal-400 text-white font-bold text-6xl py-8 px-16 rounded-2xl mb-32">Project Biborton</h1>
        </div>
        <div className="bg-gray-800 text-white text-center py-8">
            <h2 className="text-2xl font-bold">1 out of every 11 adults in Bangladesh lack access to a bank account.</h2>
        </div>
    </div>
  );
}
