import { PlatformPage } from "@/components/PlatformPage";

export const metadata = { title: "Foundry | AlbisWis" };

export default function Foundry() {
  return (
    <PlatformPage
      id="0.3"
      name="Foundry"
      tagline="Build and manage Ontology-powered software, with a complete developer platform."
      description="Foundry is a full-stack platform for connecting, modeling, and operationalizing data — backed by an Ontology that makes objects, actions, and decisions first-class citizens of your enterprise."
      capabilities={[
        "Connect any source — batch, stream, file, API",
        "Model your business as objects, links, and actions",
        "Author code and no-code workflows side by side",
        "Ship internal apps with Workshop and Slate",
        "Govern access, lineage, and policy by default",
      ]}
    />
  );
}
