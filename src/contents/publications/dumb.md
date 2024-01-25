---
id: dumb
title: 'Your Attack Is Too DUMB: Formalizing Attacker Scenarios for Adversarial Transferability'
url: https://arxiv.org/abs/2306.15363
abstract: "Evasion attacks are a threat to machine learning models, where adversaries attempt to affect classifiers by injecting malicious samples. An alarming side-effect of evasion attacks is their ability to transfer among different models: this property is called transferability. Therefore, an attacker can produce adversarial samples on a custom model (surrogate) to conduct the attack on a victim's organization later. Although literature widely discusses how adversaries can transfer their attacks, their experimental settings are limited and far from reality. For instance, many experiments consider both attacker and defender sharing the same dataset, balance level (i.e., how the ground truth is distributed), and model architecture.
In this work, we propose the DUMB attacker model. This framework allows analyzing if evasion attacks fail to transfer when the training conditions of surrogate and victim models differ. DUMB considers the following conditions: Dataset soUrces, Model architecture, and the Balance of the ground truth. We then propose a novel testbed to evaluate many state-of-the-art evasion attacks with DUMB; the testbed consists of three computer vision tasks with two distinct datasets each, four types of balance levels, and three model architectures. Our analysis, which generated 13K tests over 14 distinct attacks, led to numerous novel findings in the scope of transferable attacks with surrogate models. In particular, mismatches between attackers and victims in terms of dataset source, balance levels, and model architecture lead to non-negligible loss of attack performance."
coAuthors:
  - name: Mauro
    surname: Conti
  - name: Francesco
    surname: Marchiori
  - name: Luca
    surname: Martinelli
  - name: Luca
    surname: Pajola
conference:
  name: RAID2023 - Hong Kong
  url: https://dl.acm.org/doi/10.1145/3607199.3607227
  date: 2023-10-16
bibtex: "@inproceedings{10.1145/3607199.3607227,
author = {Alecci, Marco and Conti, Mauro and Marchiori, Francesco and Martinelli, Luca and Pajola, Luca},
title = {Your Attack Is Too DUMB: Formalizing Attacker Scenarios for Adversarial Transferability},
year = {2023},
isbn = {9798400707650},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3607199.3607227},
doi = {10.1145/3607199.3607227},
abstract = {Evasion attacks are a threat to machine learning models, where adversaries attempt to affect classifiers by injecting malicious samples. An alarming side-effect of evasion attacks is their ability to transfer among different models: this property is called transferability. Therefore, an attacker can produce adversarial samples on a custom model (surrogate) to conduct the attack on a victim’s organization later. Although literature widely discusses how adversaries can transfer their attacks, their experimental settings are limited and far from reality. For instance, many experiments consider both attacker and defender sharing the same dataset, balance level (i.e., how the ground truth is distributed), and model architecture. In this work, we propose the DUMB attacker model. This framework allows analyzing if evasion attacks fail to transfer when the training conditions of surrogate and victim models differ. DUMB considers the following conditions: Dataset soUrces, Model architecture, and the Balance of the ground truth. We then propose a novel testbed to evaluate many state-of-the-art evasion attacks with DUMB; the testbed consists of three computer vision tasks with two distinct datasets each, four types of balance levels, and three model architectures. Our analysis, which generated 13K tests over 14 distinct attacks, led to numerous novel findings in the scope of transferable attacks with surrogate models. In particular, mismatches between attackers and victims in terms of dataset source, balance levels, and model architecture lead to non-negligible loss of attack performance.},
booktitle = {Proceedings of the 26th International Symposium on Research in Attacks, Intrusions and Defenses},
pages = {315–329},
numpages = {15},
keywords = {Adversarial Attacks, Transferability, Evasion Attacks, Surrogate Model, Adversarial Machine Learning},
location = {Hong Kong, China},
series = {RAID '23}
}"
---
