import { PlatformPage } from "@/components/PlatformPage";

export const metadata = { title: "Apollo | AlbisWis" };

export default function Apollo() {
  return (
    <PlatformPage
      id="0.5"
      name="Apollo"
      tagline="Autonomously deploy, monitor, and manage software across any environment."
      description="Apollo is the continuous delivery and operations platform that runs AlbisWis — and now runs the platforms of customers operating across cloud, on-prem, classified, and disconnected environments."
      capabilities={[
        "Constraint-based, policy-aware release orchestration",
        "Operates across every cloud and air-gapped network",
        "Self-healing services with autonomous rollbacks",
        "Continuous compliance for regulated workloads",
        "Single pane of glass for every environment you operate",
      ]}
    />
  );
}
