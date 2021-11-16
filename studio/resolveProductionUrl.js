
const remoteUrl = `https://api.edel.monster`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
    const isLocal = window.location.hostname === "localhost"

    let previewUrl;
    if (isLocal) {
        previewUrl = new URL(localUrl)
    }
}
