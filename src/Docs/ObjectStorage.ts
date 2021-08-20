import { Doc } from "../Interfaces/Doc";

export const doc: Doc = {
    name: "Object Storage",
    path: "/using-qovery/configuration/object-storage",
    keywords: ["object storage", "storage"],
    description: "The default filesystem for applications running on Qovery is ephemeral. Application data isn’t persisted across deploys and restarts, which works just fine for most apps because they use managed databases to persist data. If, however, your application needs persistent storage across restarts or needs to store large amounts of data that doesn't really fit well to be stored in databases, Object Storage might fit your needs."
}