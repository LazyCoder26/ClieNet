import React from "react";
import "../css/Plans.css";
import Go from "../assets/Go.png";

const Plans = () => {
  const plans = [
    {
      title: "Basic",
      price: "$10/month",
      features: ["HTML", "CSS", "JS"],
      tags: ["Tag 1", "Tag 2"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Pro",
      price: "$20/month",
      features: ["HTML", "CSS", "JS", "Node"],
      tags: ["Tag 3", "Tag 4"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Plus",
      price: "$30/month",
      features: ["React", "Tailwind/Bootstrap", "Node", "MongoDB"],
      tags: ["Tag 5", "Tag 6"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Enterprise",
      price: "$50/month",
      features: ["React", "Node", "MongoDB", "Express", "Tailwind/Bootstrap"],
      tags: ["Tag 7", "Tag 8"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Custom",
      price: "Contact us",
      features: [],
      tags: ["Tag 9", "Tag 10"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://media.giphy.com/media/hSQODRJ5gJhHTu4CWq/giphy.gif",
    },
  ];

  return (
    <div className="Plans">
      {plans.map((plan, index) => (
        <div className="Plans-card" key={index}>
          <div className="Plans-data">
            <p className="Plans-title">{plan.title}</p>
            <p className="Plans-price">{plan.price}</p>
            <div className="Plans-img">
              {plan.title === "Custom" && plan.img && (
                <img style={{width: "150px", height: "150px", borderRadius: "20px"}} src={plan.img}/>
              )}
            </div>
            <p className="Plans-details">
              <div>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </div>
            </p>
            <div className="pill-data">
              <div className="Plan-pills">
                {plan.tags.map((tag, index) => (
                  <div className="PlanPill" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Plans-desc">
            <p>{plan.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
