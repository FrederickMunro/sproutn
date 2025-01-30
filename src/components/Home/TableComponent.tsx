import TableSection from "./TableSection";

const TableComponent = () => {

  const contents = [
    {
      title: 'Product Validation',
      contents: [
        'Get your idea validated by experienced entrepreneurs committed to your success',
        'Our validation process can significantly reduce the risk of failure that results in a minimum of $8300 loss',
      ],
      number: 'one'
    },
    {
      title: 'Sampling+Logo Design',
      contents: [
        'Streamlined sample creation management & cost effective',
        '$50 sample credit',
        'Logo creation',
        'Save $250+',
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
        'Save a minimum of $1500+',
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
        'Save a minimum of $2000+',
      ],
      number: 'four'
    },
    {
      title: 'Entire Journey',
      contents: [
        'If you are keeping track, you can save anywhere from $4500-$5000 by choosing to work with Sprout’n',
        'The new drop downs for the site instead of the chart',
      ],
      number: 'five'
    }
  ]

  return (
    <div className='table-component-container-div'>
      {contents.map((item, index) => {
        return <>
          <TableSection
            title={item.title}
            contents={item.contents}
            number={item.number}
            key={index}
          />
          <div className='table-component-divider'/>
        </>
      })}
    </div>
  );
};

export default TableComponent;