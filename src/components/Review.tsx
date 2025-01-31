import ItemContainer from "./ItemContainer";

interface Props {
    reviewText: string;
  }

const Review = ({ reviewText }: Props) => {
    return (
        <ItemContainer anim={'appear'} anim2={'up'} time={'6'}>
            <div className="review-container">
                <div className="stars">
                    {[...Array(5)].map((_, index) => (
                    <span key={index} className="star full">★</span>
                    ))}
                </div>
                <p className="review-text">"{reviewText}"</p>
            </div>
        </ItemContainer>    
    );
}

export default Review;