function FeatureCard({ icon, title, description }) {
  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
