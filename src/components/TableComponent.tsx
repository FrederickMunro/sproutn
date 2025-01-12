import React from "react";

interface TableRow {
  step: string;
  alone: string;
  sproutn: string;
  benefits: string[];
}

const TableComponent = () => {

  const tableData: TableRow[] = [
    {
      step: "Sampling",
      alone: "Minimum $450",
      sproutn: "Maximum $450",
      benefits: [
        "Streamlined sampling process & walkthrough",
        "$50 sample credit",
      ],
    },
    {
      step: "Product Order",
      alone: "Minimum $5000",
      sproutn: "$4500",
      benefits: [
        "Remove strict MOQ requirements",
        "Lowest possible price for first orders",
        "Scalable plan in place",
        "Ensure quality and certifications",
      ],
    },
    {
      step: "Product Freight",
      alone: "Minimum $2600",
      sproutn: "Maximum $1000",
      benefits: [
        "Preferential pricing with professional freight forwarder",
        "Delivered right to you, no extra planning",
      ],
    },
    {
      step: "Product Shots",
      alone: "Minimum $1600 + time",
      sproutn: "$550",
      benefits: [
        "High-quality professional pictures and edits",
        "Save significant time",
        "Be credible",
      ],
    },
    {
      step: "Marketing",
      alone: "Minimum $3000",
      sproutn: "$2000",
      benefits: [
        "Access to years of experience",
        "Comprehensive commercial launch",
        "Saved marketing dollars and cash flow",
      ],
    },
    {
      step: "Total",
      alone: "Minimum $12650",
      sproutn: "$8500",
      benefits: [
        "Minimum $4000 saved",
        "Better cash flow",
        "Staggered spending",
        "Higher rate of success",
      ],
    },
    {
      step: "Potential Loss",
      alone: "-$12650",
      sproutn: "-$8500",
      benefits: ["Lower potential risk"],
    },
  ];

  return (
    <div className="table-container">
      <h2>Why Sprout'n is right for you</h2>
      <p>
        <strong>EXAMPLE:</strong> Product with an average cost per unit of $18
        (2kg/unit) and a MOQ of 300
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Alone</th>
            <th>Sprout'n</th>
            <th>Benefits</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.step}</td>
              <td>{row.alone}</td>
              <td>{row.sproutn}</td>
              <td>
                <ul>
                  {row.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;