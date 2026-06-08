import { PlatformPage } from "@/components/PlatformPage";

export const metadata = { title: "Gotham | AlbisWis" };

export default function Gotham() {
  return (
    <PlatformPage
      id="0.2"
      name="Gotham"
      tagline="Achieve AI-driven combat superiority, from space to mud."
      description="Gotham is the AI-defined operations platform for defense and intelligence. It fuses sensor, geospatial, and human intelligence in real time and turns it into action across the kill chain."
      capabilities={[
        "Multi-INT fusion across SIGINT, IMINT, GEOINT, HUMINT",
        "Sensor-to-shooter workflows at machine speed",
        "Edge-deployable, classified-network-ready",
        "AI-assisted target nomination and ROE enforcement",
        "Coalition-ready interoperability and trust boundaries",
      ]}
    />
  );
}
