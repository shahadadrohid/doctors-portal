import React from 'react';

const ReviewCards = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl p-2 mt-4">
            <div class="card-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptas rem qui libero expedita cupiditate?</p>
                <div class="card-actions justify-center items-center">
                    <div class="avatar flex items-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCards;