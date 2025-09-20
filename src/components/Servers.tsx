const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description:
      "Building robust, scalable web applications from front-end to back-end, ensuring seamless functionality and user experience.",
  },
  {
    id: "02",
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs to enable efficient communication between different software systems and services.",
  },
  {
    id: "03",
    title: "Database Design & Management",
    description:
      "Creating efficient database structures and managing data flow to ensure optimal performance and data integrity.",
  },
  {
    id: "04",
    title: "Cloud Integration",
    description:
      "Leveraging cloud technologies to deploy, scale, and manage applications, ensuring high availability and cost-effectiveness.",
  },
  {
    id: "05",
    title: "DevOps & CI/CD",
    description:
      "Implementing continuous integration and deployment pipelines to streamline development processes and improve code quality.",
  },
  {
    id: "06",
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing application performance to ensure fast load times and smooth user interactions across all devices.",
  },
];

export default function Servers() {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl font-extrabold sticky top-20">SERVICES</h2>
        </div>

        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-400 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
