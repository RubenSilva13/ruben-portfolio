import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    titulo:
      "A Mobile LiDAR-Based 3D Scanning Application for Indoor and Semi-Outdoor Mesh Reconstruction and Object-Level Region-of-Interest Capture",
    conferencia: "TEEM 2026 — 14th International Conference on Technological Ecosystems for Enhancing Multiculturality",
    local: "Porto, Portugal · October 2026",
    estado: "Accepted",
    publisher: "Springer — Lecture Notes in Educational Technology",
    autores: "R. Silva, P. F. Oliveira, P. Matos",
    link: "",
  },
  {
    titulo:
      "Computational Modelling of the LiDAR Sensor in iOS Devices for Spatial Perception and Augmented Reality Applications",
    conferencia: "ARTIIS 2026 — International Conference on Advanced Research in Technologies, Information, Innovation and Sustainability",
    local: "Lisbon, Portugal · November 2026",
    estado: "Under review",
    publisher: "Springer — Communications in Computer and Information Science (CCIS)",
    autores: "R. Silva, P. F. Oliveira, P. Matos",
    link: "",
  },
];

export default function Papers() {
  return (
    <div className="space-y-6">
      {papers.map((paper) => (
        <div
          key={paper.titulo}
          className="rounded-xl border p-6 space-y-3 hover:border-primary transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="rounded-full border p-2 shrink-0 mt-1">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs rounded-full bg-primary/15 text-primary px-3 py-1 font-medium">
                  {paper.estado}
                </span>
                <span className="text-xs text-muted-foreground">
                  {paper.local}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-snug">
                {paper.titulo}
              </h3>
            </div>
          </div>

          <div className="pl-11 space-y-1 text-sm text-muted-foreground">
            <p>{paper.conferencia}</p>
            <p>{paper.autores}</p>
            <p className="text-xs">{paper.publisher}</p>
          </div>

          {paper.link && (
            <div className="pl-11">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                View paper
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
