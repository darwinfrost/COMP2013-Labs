import type { ResortListing } from "../data/data";
export default function ListingCard({
  id,
  pic,
  country,
  location,
  rating,
  price
}: ResortListing) {
    if (rating > 4)
    {
  return (
    <div className="ListingCard">
      <img src={pic} alt="" width="100px" />
      <h2>{country}</h2>
      <p>{location}</p>
      <p className="green">{rating}★</p>
      <p>${price} / Night</p>
    </div>
        )
    }
    else
    {
      return (
    <div className="ListingCard">
      <img src={pic} alt="" width="100px" />
      <h2>{country}</h2>
      <p>{location}</p>
      <p className="red">{rating}★</p>
      <p>${price} / Night</p>
    </div>
  );
}
}