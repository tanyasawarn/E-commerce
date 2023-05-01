import { Table } from "react-bootstrap";

const ProductDetails = (props) => {
  const { id, reviews } = props;

  console.log(`Product id: ${id}`);

  const productImages = [
    "/assets/imageone.jpg",
    "/assets/imagetwo.jpg",
    "/assets/imagethree.jpg",
    "/assets/imageone.jpg",
    "/assets/Tshirt.jpg",
    "/assets/mug.jpg"
  ];

  return (
    <div className="container mt-2">
      <h2 className="text-center">Product Details</h2>
      <section className="container mt-3">
        <div className="productDetails">
          <div className="items-img">
            {productImages.map((imageUrl) => (
              <img key={imageUrl} src={imageUrl} alt="Product" style={{ maxWidth: "100%", height: "auto" }}/>
            ))}
          </div>
          <div className="details">
            <Table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>Name:</strong> Product Name
                    </p>
                    <p>
                      <strong>Price:</strong> Rs. 100
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Reviews:</h3>
                    {reviews &&
                      reviews.map((review) => (
                        <div key={review.id}>
                          <p>{review.comment}</p>
                          <p>By {review.author}</p>
                          <hr />
                        </div>
                      ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
