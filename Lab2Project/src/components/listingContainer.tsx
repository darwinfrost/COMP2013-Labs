import ListingCard from "./listingCard";
import type { ResortListing } from "../data/data";

interface ListingContainerProps {
  data: ResortListing[];
}
export default function ListingContainer({ data }: ListingContainerProps) {
  return (
    <div className="ListingContainer">
      {data.map((list) => (
        <ListingCard key={list.id} {...list} />
      ))}
    </div>
  );
}