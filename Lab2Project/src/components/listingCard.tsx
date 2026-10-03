import type { ResortListing } from "../data/data";
export default function ListingCard({
  id,
  pic,
  country,
  location,
  rating,
  price
}: ResortListing) {
  return (
    <div className="ListingCard">
      <img src={pic} alt="" width="100px" />
      <h2>{country}</h2>
      <p>{location}</p>
      <p>{rating}★</p>
      <p>{price}</p>
    </div>
  );
}