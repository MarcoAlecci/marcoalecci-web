---
id: pickpockets
title: 'Beware of Pickpockets: A Practical Attack against Blocking Cards'
url: https://arxiv.org/abs/2302.08992
abstract: "Today, we rely on contactless smart cards to perform several critical operations (e.g., payments and accessing buildings). Attacking smart cards can have severe consequences, such as losing money or leaking sensitive information. Although the security protections embedded in smart cards have evolved over the years, those with weak security properties are still commonly used. Among the different solutions, blocking cards are affordable devices to protect smart cards. These devices are placed close to the smart cards, generating a noisy jamming signal or shielding them. Whereas vendors claim the reliability of their blocking cards, no previous study has ever focused on evaluating their effectiveness. In this paper, we shed light on the security threats on smart cards in the presence of blocking cards, showing the possibility of being bypassed by an attacker. We analyze blocking cards by inspecting their emitted signal and assessing a vulnerability in their internal design. We propose a novel attack that bypasses the jamming signal emitted by a blocking card and reads the content of the smart card. We evaluate the effectiveness of 11 blocking cards when protecting a MIFARE Ultralight smart card and a MIFARE Classic card. Of these 11 cards, we managed to bypass 8 of them and successfully dump the content of a smart card despite the presence of the blocking card. Our findings highlight that the noise type implemented by the blocking cards highly affects the protection level achieved by them. Based on this observation, we propose a countermeasure that may lead to the design of effective blocking cards. To further improve security, we released the tool we developed to inspect the spectrum emitted by blocking cards and set up our attack."
coAuthors:
  - name: Luca
    surname: Attanasio
  - name: Alessandro
    surname: Brighente
  - name: Mauro
    surname: Conti
  - name: Eleonora
    surname: Losiouk
  - name: Hideki
    surname: Ochiai
  - name: Federico
    surname: Turrin
conference:
  name: Accepted at RAID2023
  url: https://arxiv.org/abs/2302.08992
  date: 2023-10-16
bibtex: "@article{alecci2023beware,
  title={Beware of Pickpockets: A Practical Attack against Blocking Cards},
  author={Alecci, Marco and Attanasio, Luca and Brighente, Alessandro and Conti, Mauro and Losiouk, Eleonora and Ochiai, Hideki and Turrin, Federico},
  journal={arXiv preprint arXiv:2302.08992},
  year={2023}
}"
---
