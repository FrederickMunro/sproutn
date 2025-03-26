import TableSection from "./TableSection";

import './Home.css';

const TableComponent = () => {

  const contents = [
    {
      title: 'Product Validation',
      contents: [
        'Get your idea validated by experienced entrepreneurs committed to your success',
        <>Our validation process can significantly reduce the risk of failure that results in a minimum of <span className='bold'>$8300</span> loss</>,
      ],
      number: 'one'
    },
    {
      title: 'Sampling + Logo Design',
      contents: [
        'Streamlined sample creation management & cost effective',
        '$50 sample credit',
        'Logo creation',
        <>Save <span className='bold'>$250+</span></>,
      ],
      number: 'two'
    },
    {
      title: 'Product Order and Freight',
      contents: [
        'Remove unreasonable MOQ requirements and get the lowest possible price for first orders',
        'Scalable plan in place that ensures quality and certifications',
        'Preferential pricing with professional freight forwarder',
        'Delivered right to you, no extra planning',
        <>Save a minimum of <span className='bold'>$1500+</span></>,
      ],
      number: 'three'
    },
    {
      title: 'Product Shots and Marketing',
      contents: [
        'High quality professional pictures and edits that add credibility to your product',
        'Save significant time and money by being given efficient marketing plans',
        'Access to years of experience',
        'Comprehensive go-to-market strategy',
        <>Save a minimum of <span className='bold'>$2000+</span></>,
      ],
      number: 'four'
    },
    {
      title: 'Entire Journey',
      contents: [
        <>If you are keeping track, you can save anywhere from <span className='bold'>$4500-$5000</span> by choosing to work with Sprout'n</>,
      ],
      number: 'five'
    }
  ]

  return (
    // <div className='table-component-parent-container'>
      <div className='table-component-container-div'>
        {contents.map((item, index) => {
          return <>
            <TableSection
              title={item.title}
              contents={item.contents}
              number={item.number}
              key={index}
            />
            {index !== 4 && <div className='table-component-divider'/>}
          </>
        })}
      </div>
    // </div>
  );
};

export default TableComponent;