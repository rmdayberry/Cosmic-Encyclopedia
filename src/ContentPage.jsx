import { useParams } from "react-router-dom";
import celestialData from ".data/celestialData";

export default function ContentPage() {
  const { id } = useParams();
  const content = celestialData[id];

  if (!content) {
    <p>Content not found. Please choose another celestial object.</p>;
  }

  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </div>
  );
}
