
import { cacheTag , cacheLife } from "next/cache";

import CertificateLightbox from "./CertificateLightbox";
import { getCertificates } from "@/lib/db/data";

export default async function CertificateSection() {
  "use cache";
   cacheTag("certificates");
   cacheLife('hours');
   const certificates = await getCertificates();
  return (
    <div>
       <CertificateLightbox certificates={certificates} />
    </div>
  )
};
