import { PlatformPage } from "@/components/PlatformPage";

export const metadata = { title: "AIP | AlbisWis" };

export default function AIP() {
  return (
    <PlatformPage
      id="0.1"
      name="AIP"
      tagline="Automate operations, from the factory floor to the front lines."
      description="AIP grounds LLMs in the Ontology — the digital twin of your business — so every prompt, action, and agent operates on real entities, real permissions, and real workflows. AIP turns generative models into reliable operators."
      capabilities={[
        "Agentic workflows grounded in your Ontology",
        "Action-aware copilots with fine-grained permissions",
        "AIP Logic for deterministic, auditable LLM pipelines",
        "Bring-your-own-model — open, closed, fine-tuned",
        "Continuous evaluation and human-in-the-loop review",
      ]}
    />
  );
}
