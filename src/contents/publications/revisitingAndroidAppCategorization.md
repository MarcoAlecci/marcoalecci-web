---
id: revisitingAndroidAppCategorization
title: 'Revisiting Android App Categorization'
url: https://arxiv.org/abs/2310.07290
abstract: "Numerous tools rely on automatic categorization of Android apps as part of their methodology. However, incorrect categorization can lead to inaccurate outcomes, such as a malware detector wrongly flagging a benign app as malicious. One such example is the SlideIT Free Keyboard app, which has over 500000 downloads on Google Play. Despite being a "Keyboard" app, it is often wrongly categorized alongside "Language" apps due to the app's description focusing heavily on language support, resulting in incorrect analysis outcomes, including mislabeling it as a potential malware when it is actually a benign app. Hence, there is a need to improve the categorization of Android apps to benefit all the tools relying on it. In this paper, we present a comprehensive evaluation of existing Android app categorization approaches using our new ground-truth dataset. Our evaluation demonstrates the notable superiority of approaches that utilize app descriptions over those solely relying on data extracted from the APK file, while also leaving space for potential improvement in the former category. Thus, we propose two innovative approaches that effectively outperform the performance of existing methods in both description-based and APK-based methodologies. Finally, by employing our novel description-based approach, we have successfully demonstrated that adopting a higher-performing categorization method can significantly benefit tools reliant on app categorization, leading to an improvement in their overall performance. This highlights the significance of developing advanced and efficient app categorization methodologies for improved results in software engineering tasks."
coAuthors:
  - name: Jordan
    surname: Samhi
  - name: Tegawendé F. 
    surname: Bissyandé
  - name: Jacques
    surname: Klein

conference:
  name: Accepted at ICSE2024 - Lisbon
  url: https://arxiv.org/abs/2310.07290
  date: 2024-04-14
bibtex: "@misc{alecci2023revisiting,
      title={Revisiting Android App Categorization}, 
      author={Marco Alecci and Jordan Samhi and Tegawendé F. Bissyandé and Jacques Klein},
      year={2023},
      eprint={2310.07290},
      archivePrefix={arXiv},
      primaryClass={cs.SE}
}"
---
