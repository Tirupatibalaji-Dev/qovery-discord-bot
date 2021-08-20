import { Doc } from "../Interfaces/Doc";

export const doc: Doc = {
    name: "Secrets",
    path: "/using-qovery/configuration/secrets",
    keywords: ["secrets"],
    description: "If your projects and applications rely on sensitive data like credentials, API keys, certificates, the best way to store them is Secrets. The difference between Environment Variables and Secrets is that Secrets are safely encrypted, and their values can not be retrieved via Qovery API - they are only accessible for your application during build and runtime."
}