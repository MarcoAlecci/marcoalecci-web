---
id: difuzerPlusPlus
title: 'Improving Logic Bomb Identification in Android Apps via Context-Aware Anomaly Detection'
url: 
abstract: "One prominent tactic used to keep malicious behavior from being detected during dynamic test campaigns is logic bombs, where malicious operations are triggered only when specific conditions are satisfied. Defusing logic bombs remains an unsolved problem in the literature. In this work, we propose to investigate suspicious Hidden Sensitive Operations (SHSOs) as a step toward triaging logic bombs. To that end, we develop a novel hybrid approach that combines static analysis and context-aware anomaly detection techniques to uncover SHSOs, which we predict as likely implementations of logic bombs. Concretely, DIFUZER++ identifies SHSO entry-points using an instrumentation engine and conducting an inter-procedural data-flow analysis. Subsequently, it extracts trigger-specific features to characterize SHSOs. To detect abnormal triggers, we utilize multiple One-Class SVM models, each trained on distinct sets of similar apps to more effectively capture normal behavior patterns. To assess the added value of the context-aware analysis, we compare DIFUZER++ against a baseline approach with no context (that we name DIFUZER).We show that the context-aware analysis leads to a significant improvement in both the precision and F1 score. Furthermore, the probability of successfully triaging logic bombs among SHSOs increases from 29.7% to 58.8%. All our artifacts are released to the community"
coAuthors:
  - name: Jordan
    surname: Samhi
  - name: Li
    surname: Li
  - name: Tegawendé F. 
    surname: Bissyandé
  - name: Jacques
    surname: Klein

conference:
  name: TDSC - Transactions on Dependable and Secure Computing.
  url: 
  date: 2024-01-22
bibtex: "@misc{alecci2024difuzerPlusPlus,
      title={Improving Logic Bomb Identification in Android Apps via Context-Aware Anomaly Detection}, 
      author={Marco Alecci and Jordan Samhi and Li Li and Tegawendé F. Bissyandé and Jacques Klein},
      year={2024}
}"
---
