const LabCTA: React.FC = () => {
  return (
    <section className="bg-transparent py-12 md:py-20 px-4 md:px-6 text-center">
      
      <h2 className="text-3xl md:text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        Have a Project in Mind?
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Share your requirements with our engineering team and get a professional solution tailored to your needs.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
        
       <button
  onClick={() => window.location.href = "/contact"}
  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
>
  Submit Your Project
</button>

        <button
  onClick={() => window.location.href = "/contact"}
  className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
>
  Request Consultation
</button>

      </div>

    </section>
  );
};

export default LabCTA;