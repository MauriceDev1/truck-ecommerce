import Image from "next/image";

const Reviews = async ({ productId }: { productId: string }) => {
  try {
    // Fetch the reviews from the Fera API
    const reviewRes = await fetch(
      `https://api.fera.ai/v3/public/reviews?product.id=${productId}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`
    );

    // If the response is not OK, throw an error
    if (!reviewRes.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const reviews = await reviewRes.json();

    // Check if the response contains the data object
    if (!reviews.data || reviews.data.length === 0) {
      return <p>No reviews available for this product.</p>;
    }

    return (
      <div>
        {reviews.data.map((review: any) => (
          <div className="flex flex-col gap-4" key={review.id}>
            {/* USER */}
            <div className="flex items-center gap-4 font-medium">
              <Image
                src={review.customer.avatar_url || "/default-avatar.png"} // Default avatar if undefined
                alt={review.customer.display_name || "Customer Avatar"}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{review.customer.display_name || "Anonymous"}</span>
            </div>
            {/* STARS */}
            <div className="flex gap-2">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Image
                  src="/star.png"
                  alt={`Star rating ${index + 1}`}
                  key={index}
                  width={16}
                  height={16}
                />
              ))}
            </div>
            {/* REVIEW CONTENT */}
            {review.heading && <p>{review.heading}</p>}
            {review.body && <p>{review.body}</p>}
            {/* REVIEW MEDIA */}
            {review.media?.length > 0 && (
              <div className="flex gap-2">
                {review.media.map((media: any) => (
                  <Image
                    src={media.url}
                    key={media.id}
                    alt="Review media"
                    width={100}
                    height={50}
                    className="object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return <p>Unable to load reviews at this time.</p>; // Display an error message to the user
  }
};

export default Reviews;