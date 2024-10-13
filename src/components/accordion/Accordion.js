import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the most durable tiles for heavy foot traffic?",
      answer: "Porcelain tiles are known for their durability and are ideal for areas with heavy foot traffic due to their strength and resistance to wear."
    },
    {
      question: "Can tiles be used for outdoor spaces?",
      answer: "Yes, tiles such as full-body vitrified tiles and natural stone tiles are suitable for outdoor spaces as they are weather-resistant and sturdy."
    },
    {
      question: "What are eco-friendly tile options?",
      answer: "Eco-friendly tiles are made from recycled materials, like glass tiles and some ceramic tiles, which help in reducing the environmental footprint."
    },
    {
      question: "How do I clean and maintain tiles?",
      answer: "Tiles can be easily cleaned with mild soap and water. Avoid harsh chemicals as they can damage the tile's finish over time."
    },
    {
      question: "Are there anti-slip tile options available?",
      answer: "Yes, anti-slip tiles are designed with a rough surface to provide extra traction, making them ideal for wet areas like bathrooms and kitchens."
    },
    {
      question: "Can I install tiles over an existing floor?",
      answer: "Yes, tiles can be installed over existing floors if the surface is properly prepared, level, and free from cracks or damage."
    },
    {
      question: "What are the latest trends in tile designs?",
      answer: "Latest tile trends include marble-look tiles, hexagonal tiles, and tiles with metallic or matte finishes for a contemporary look."
    }
  ];

  return (
    <div className="accordion-container-unique">
      <h2 className="faq-header-unique">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item-unique">
          <div
            className="accordion-title-unique"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{faq.question}</h3>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          <div
            className={`accordion-content-unique ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
