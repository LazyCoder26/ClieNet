import React from "react";
import "../css/Plans.css";

const Plans = () => {
  const plans = [
    {
      title: "Basic",
      price: "$10/month",
      features: ["Feature 1", "Feature 2"],
      tags: ["Tag 1", "Tag 2"],
    },
    {
      title: "Pro",
      price: "$20/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      tags: ["Tag 3", "Tag 4"],
    },
    {
      title: "Plus",
      price: "$30/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      tags: ["Tag 5", "Tag 6"],
    },
    {
      title: "Enterprise",
      price: "$50/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      tags: ["Tag 7", "Tag 8"],
    },
    {
      title: "Custom",
      price: "Contact us",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
      ],
      tags: ["Tag 9", "Tag 10"],
    },
  ];

  return (
    <div className="Plans">
      {plans.map((plan, index) => (
        <div className="Plans-card" key={index}>
          <p className="Plan-title">{plan.title}</p>
          <p className="Plan-price">{plan.price}</p>
          <p className="Plan-details">
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </p>
          <div className="Plan-pills">
            {plan.tags.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
