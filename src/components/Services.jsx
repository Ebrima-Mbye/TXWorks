import React from "react";
import Service from "./Service";

function ServicesList() {
  const services = [
    {
      title: "Sustainable Farming",
      description:
        "We use eco-friendly methods to ensure a sustainable farming process.",
    },
    {
      title: "High-Quality Feed",
      description:
        "Our roosters are provided with high-quality feed for optimal health.",
    },
    {
      title: "Advanced Technology",
      description:
        "Our farms are equipped with advanced technology for better efficiency.",
    },
    {
      title: "Experienced Staff",
      description: "Our team is highly skilled in animal husbandry and care.",
    },
    {
      title: "Customer Support",
      description:
        "We offer excellent support to ensure customer satisfaction.",
    },
  ];

  return (
    <section className="services">
      {services.map((service, index) => (
        <Service
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}

export default ServicesList;
