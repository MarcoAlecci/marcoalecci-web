import type { ContactInfo } from "$lib/utils/utils";

export const contact: ContactInfo = {
  email: "marco.alecci@uni.lu",
  office: {
    label: "Office BLE, E01 009-01",
    address: "6, rue Coudenhove-Kalergi, L-1359 Luxembourg, Luxembourg",
    city: "Luxembourg",
    country: "Luxembourg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=6%2C%20rue%20Coudenhove-Kalergi%2C%20L-1359%20Luxembourg",
    mapEmbedUrl: "https://www.google.com/maps?q=6%2C%20rue%20Coudenhove-Kalergi%2C%20L-1359%20Luxembourg&output=embed"
  },
  phone: "(+352) 46 66 44 9465",
  gpg: "A1DE 9649 5919 FCFB E3D4 B59F CD0D BDB4 E996 D956",
  profiles: [
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=is1wrqcAAAAJ&hl=it",
      icon: "simple-icons:googlescholar"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alecci-marco/?originalSubdomain=lu",
      icon: "mdi:linkedin"
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-5963-4599",
      icon: "simple-icons:orcid"
    },
    {
      label: "GitHub",
      href: "https://github.com/MarcoAlecci",
      icon: "mdi:github"
    }
  ]
};
