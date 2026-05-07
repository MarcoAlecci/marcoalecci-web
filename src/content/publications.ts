import type { Publication } from "$lib/utils/utils";

export const publications: Publication[] = [
  {
    id: "androzooNew",
    title: "AndroZoo: A Retrospective with a Glimpse into the Future",
    url: "",
    abstract:
      "In 2016, we released AndroZoo, a continuously expanding dataset of Android applications that aggregates apps from various sources, including the official Google Play app market. As of today, AndroZoo contains approximately 24 million APK files, making it, to the best of our knowledge, the most extensive dataset of Android APKs accessible to the research community. Currently, an average of 500000 APKs are downloaded every day, with our initial MSR paper counting more than 880 citations on Google Scholar. Over time, we have consistently expanded AndroZoo, adapting to app markets' evolution and refining our collection process. Additionally, we have started collecting supplementary data that could be valuable for various Android-related research projects and that we are providing to users, such as app descriptions, upload dates, ratings, lists of permissions, and many other kinds of data. This paper begins with a retrospective analysis of Androzoo, offering statistics on APK files, apps, users, and downloads. Then, we introduce the new data we are releasing to users, offering insights and examples of their usage.",
    coAuthors: [
      { name: "Pedro J. R.", surname: "Jimenez" },
      { name: "Kevin", surname: "Allix" },
      { name: "Tegawende F.", surname: "Bissyande" },
      { name: "Jacques", surname: "Klein" }
    ],
    venue: {
      name: "MSR 2024",
      url: "https://arxiv.org/abs/2310.07290",
      date: "2024-04-14",
      type: "Conference",
      location: "Lisbon"
    },
    tags: ["Conference"]
  },
  {
    id: "difuzerPlusPlus",
    title: "Improving Logic Bomb Identification in Android Apps via Context-Aware Anomaly Detection",
    url: "",
    abstract:
      "One prominent tactic used to keep malicious behavior from being detected during dynamic test campaigns is logic bombs, where malicious operations are triggered only when specific conditions are satisfied. Defusing logic bombs remains an unsolved problem in the literature. In this work, we propose to investigate suspicious Hidden Sensitive Operations (SHSOs) as a step toward triaging logic bombs. To that end, we develop a novel hybrid approach that combines static analysis and context-aware anomaly detection techniques to uncover SHSOs, which we predict as likely implementations of logic bombs. Concretely, DIFUZER++ identifies SHSO entry-points using an instrumentation engine and conducting an inter-procedural data-flow analysis. Subsequently, it extracts trigger-specific features to characterize SHSOs. To detect abnormal triggers, we utilize multiple One-Class SVM models, each trained on distinct sets of similar apps to more effectively capture normal behavior patterns. To assess the added value of the context-aware analysis, we compare DIFUZER++ against a baseline approach with no context (that we name DIFUZER). We show that the context-aware analysis leads to a significant improvement in both the precision and F1 score. Furthermore, the probability of successfully triaging logic bombs among SHSOs increases from 29.7% to 58.8%. All our artifacts are released to the community.",
    coAuthors: [
      { name: "Jordan", surname: "Samhi" },
      { name: "Li", surname: "Li" },
      { name: "Tegawende F.", surname: "Bissyande" },
      { name: "Jacques", surname: "Klein" }
    ],
    venue: {
      name: "TDSC",
      url: "",
      date: "2024-01-22",
      type: "Journal"
    },
    tags: ["Journal"]
  },
  {
    id: "dumb",
    title: "Your Attack Is Too DUMB: Formalizing Attacker Scenarios for Adversarial Transferability",
    url: "https://arxiv.org/abs/2306.15363",
    abstract:
      "Evasion attacks are a threat to machine learning models, where adversaries attempt to affect classifiers by injecting malicious samples. An alarming side-effect of evasion attacks is their ability to transfer among different models: this property is called transferability. Therefore, an attacker can produce adversarial samples on a custom model (surrogate) to conduct the attack on a victim's organization later. Although literature widely discusses how adversaries can transfer their attacks, their experimental settings are limited and far from reality. For instance, many experiments consider both attacker and defender sharing the same dataset, balance level (i.e., how the ground truth is distributed), and model architecture. In this work, we propose the DUMB attacker model. This framework allows analyzing if evasion attacks fail to transfer when the training conditions of surrogate and victim models differ. DUMB considers the following conditions: Dataset soUrces, Model architecture, and the Balance of the ground truth. We then propose a novel testbed to evaluate many state-of-the-art evasion attacks with DUMB; the testbed consists of three computer vision tasks with two distinct datasets each, four types of balance levels, and three model architectures. Our analysis, which generated 13K tests over 14 distinct attacks, led to numerous novel findings in the scope of transferable attacks with surrogate models. In particular, mismatches between attackers and victims in terms of dataset source, balance levels, and model architecture lead to non-negligible loss of attack performance.",
    coAuthors: [
      { name: "Mauro", surname: "Conti" },
      { name: "Francesco", surname: "Marchiori" },
      { name: "Luca", surname: "Martinelli" },
      { name: "Luca", surname: "Pajola" }
    ],
    venue: {
      name: "RAID 2023",
      url: "https://dl.acm.org/doi/10.1145/3607199.3607227",
      date: "2023-10-16",
      type: "Conference",
      location: "Hong Kong"
    },
    tags: ["Conference"]
  },
  {
    id: "pickpockets",
    title: "Beware of Pickpockets: A Practical Attack against Blocking Cards",
    url: "https://arxiv.org/abs/2302.08992",
    abstract:
      "Today, we rely on contactless smart cards to perform several critical operations (e.g., payments and accessing buildings). Attacking smart cards can have severe consequences, such as losing money or leaking sensitive information. Although the security protections embedded in smart cards have evolved over the years, those with weak security properties are still commonly used. Among the different solutions, blocking cards are affordable devices to protect smart cards. These devices are placed close to the smart cards, generating a noisy jamming signal or shielding them. Whereas vendors claim the reliability of their blocking cards, no previous study has ever focused on evaluating their effectiveness. In this paper, we shed light on the security threats on smart cards in the presence of blocking cards, showing the possibility of being bypassed by an attacker. We analyze blocking cards by inspecting their emitted signal and assessing a vulnerability in their internal design. We propose a novel attack that bypasses the jamming signal emitted by a blocking card and reads the content of the smart card. We evaluate the effectiveness of 11 blocking cards when protecting a MIFARE Ultralight smart card and a MIFARE Classic card. Of these 11 cards, we managed to bypass 8 of them and successfully dump the content of a smart card despite the presence of the blocking card. Our findings highlight that the noise type implemented by the blocking cards highly affects the protection level achieved by them. Based on this observation, we propose a countermeasure that may lead to the design of effective blocking cards. To further improve security, we released the tool we developed to inspect the spectrum emitted by blocking cards and set up our attack.",
    coAuthors: [
      { name: "Luca", surname: "Attanasio" },
      { name: "Alessandro", surname: "Brighente" },
      { name: "Mauro", surname: "Conti" },
      { name: "Eleonora", surname: "Losiouk" },
      { name: "Hideki", surname: "Ochiai" },
      { name: "Federico", surname: "Turrin" }
    ],
    venue: {
      name: "RAID 2023",
      url: "https://dl.acm.org/doi/10.1145/3607199.3607243",
      date: "2023-10-16",
      type: "Conference",
      location: "Hong Kong"
    },
    tags: ["Conference"]
  },
  {
    id: "revisiting-android-app-categorization",
    title: "Revisiting Android App Categorization",
    url: "https://arxiv.org/abs/2310.07290",
    abstract:
      "Numerous tools rely on automatic categorization of Android apps as part of their methodology. However, incorrect categorization can lead to inaccurate outcomes, such as a malware detector wrongly flagging a benign app as malicious. One such example is the SlideIT Free Keyboard app, which has over 500000 downloads on Google Play. Despite being a \"Keyboard\" app, it is often wrongly categorized alongside \"Language\" apps due to the app's description focusing heavily on language support, resulting in incorrect analysis outcomes, including mislabeling it as a potential malware when it is actually a benign app. Hence, there is a need to improve the categorization of Android apps to benefit all the tools relying on it. In this paper, we present a comprehensive evaluation of existing Android app categorization approaches using our new ground-truth dataset. Our evaluation demonstrates the notable superiority of approaches that utilize app descriptions over those solely relying on data extracted from the APK file, while also leaving space for potential improvement in the former category. Thus, we propose two innovative approaches that effectively outperform the performance of existing methods in both description-based and APK-based methodologies. Finally, by employing our novel description-based approach, we have successfully demonstrated that adopting a higher-performing categorization method can significantly benefit tools reliant on app categorization, leading to an improvement in their overall performance. This highlights the significance of developing advanced and efficient app categorization methodologies for improved results in software engineering tasks.",
    coAuthors: [
      { name: "Jordan", surname: "Samhi" },
      { name: "Tegawende F.", surname: "Bissyande" },
      { name: "Jacques", surname: "Klein" }
    ],
    venue: {
      name: "ICSE 2024",
      url: "https://arxiv.org/abs/2310.07290",
      date: "2024-04-14",
      type: "Conference",
      location: "Lisbon"
    },
    tags: ["Conference"]
  },
  {
    id: "ir-system-search-engine",
    title: "Development of an IR System for Argument Search",
    url: "https://ceur-ws.org/Vol-2936/paper-208.pdf",
    abstract:
      "Search engines are the easiest way to find the information that we need in our daily life, and they have became more and more powerful in the last years. Anyway, they are still far from perfection, and some problems afflict also the more advanced search engines. In this paper we discuss our approach to the problem of argument retrieval documenting our participation to the CLEF 2021 Touche Task 1. In particular, we present our IR system for the args.me corpus, a collection of documents extracted from web debate portals. After a pre-processing phase of the documents, we tried to use different methods like query expansion and re-ranking based on sentiment analysis. In the final part we report the results of our experiments and discuss about them and about other possible strategies that can be applied in the future.",
    coAuthors: [
      { name: "Tommaso", surname: "Baldo" },
      { name: "Luca", surname: "Martinelli", url: "https://w3id.org/people/lucamartinelli" },
      { name: "Elia", surname: "Ziroldo" }
    ],
    venue: {
      name: "CLEF (Working Notes)",
      url: "https://ceur-ws.org/Vol-2936/",
      date: "2021-09-21",
      type: "Workshop"
    },
    tags: ["Workshop"]
  },
  {
    id: "mascara",
    title: "Mascara: A Novel Attack Leveraging Android Virtualization",
    url: "https://arxiv.org/abs/2010.10639",
    abstract:
      "Android virtualization enables an app to create a virtual environment, in which other apps can run. Originally designed to overcome the limitations of mobile apps dimensions, malicious developers soon started exploiting this technique to design novel attacks. As a consequence, researchers proposed new defence mechanisms that enable apps to detect whether they are running in a virtual environment. In this paper, we propose Mascara, the first attack that exploits the virtualization technique in a new way, achieving the full feasibility against any Android app and proving the ineffectiveness of existing countermeasures. Mascara is executed by a malicious app, that looks like the add-on of the victim app. As for any other add-on, our malicious one can be installed as a standard Android app, but, after the installation, it launches Mascara against the victim app. The malicious add-on is generated by Mascarer, the framework we designed and developed to automate the whole process. Concerning Mascara, we evaluated its effectiveness against three popular apps (i.e., Telegram, Amazon Music and Alamo) and its capability to bypass existing mechanisms for virtual environments detection. We analyzed the efficiency of our attack by measuring the overhead introduced at runtime by the virtualization technique and the compilation time required by Mascarer to generate 100 malicious add-ons (i.e., less than 10 sec). Finally, we designed a robust approach that detects virtual environments by inspecting the fields values of ArtMethod data structures in the Android Runtime (ART) environment.",
    coAuthors: [
      { name: "Riccardo", surname: "Cestaro" },
      { name: "Mauro", surname: "Conti" },
      { name: "Ketan", surname: "Kanishka" },
      { name: "Eleonora", surname: "Losiouk" }
    ],
    venue: {
      name: "arXiv",
      url: "https://arxiv.org/abs/2010.10639",
      date: "2020-10-20",
      type: "Preprint"
    },
    tags: ["Preprint"]
  }
];
