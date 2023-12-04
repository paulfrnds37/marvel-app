Quel est l'intérêt de commiter régulièrement et de manière atomique ?

L'utilité de commiter régulièrement est de voir l'évolution des différents codes. En cas de perte de fichiers, la dernière sauvegarde remonte à peu de temps. En cas de collaboration, cela permet à ses collègues de voir l'évolution du travail. En ce qui concerne la manière atomique, celle-ci permet d'effectuer des tests unitaires, d'éviter l'intégration d'une nouvelle mise à jour contenant plusieurs bugs, et dans le cas de code complexe, on peut cibler les derniers fichiers qui ont été modifiés.

À quoi sert une branche de type feature dans un développement logiciel de type Git Flow ?

Une branche de type feature sert à isoler les nouvelles fonctionnalités apportées tout en ne touchant pas aux branches principales, permettant à différents utilisateurs d'avoir une branche chacun sur laquelle travailler et apporter leurs dernières modifications.

Quelle est la différence entre une branche main et une branche develop ?

La branche main est la branche principale de développement qui contient la version stable du code. La branche develop est une branche de travail où les nouvelles fonctionnalités développées arrivent sans perturber la stabilité de la branche main. La branche develop peut être considérée comme une version de développement continue du projet, intégrant des fonctionnalités en cours de développement. Elle est un peu comme la Beta de la branche Main.

Quelle est la différence entre git add, git commit et git push ?

- "git add" permet de spécifier les fichiers qu'on veut mettre à jour pour le prochain commit.
- "git commit" est utilisé pour sauvegarder les modifications indexées dans le répertoire de travail.
- "git push" est utilisé pour pousser les commits locaux vers GitHub.

GitHub

Quel est l'intérêt d'une protection de branche ?

La protection de branche permet d'éviter que des personnes malveillantes perturbent l'ensemble du projet en faisant des pull requests au mauvais endroit. Cela permet de savoir qui fait la demande et donne au responsable la possibilité d'accepter ou non.

Quel est l'intérêt d'une pull request ?

Une pull request se crée lorsqu'un push est fait, et elle propose de fusionner la branche que l'on fait évoluer avec une autre branche. La pull request permet de résumer les changements qui ont été faits au code et de débattre avec ses collaborateurs avant de faire définitivement la mise à jour de la branche supérieure (main, develop).

Versioning

Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?

Dans le cas d'un patch, c'est souvent pour une petite rectification sur notre produit.

Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?

Dans le cas d'une minor, lors d'un problème un peu plus important avec souvent de nombreuses améliorations.

À quoi sert une version release candidate ?

La version release candidate est une version qui donne une première impression de l'application, souvent avec tous les tests qui n'ont pas été effectués. Elle est souvent donnée en avant-première comme une beta pour faire découvrir à l'utilisateur les premiers pas de l'application.

Tests

Quel est l'intérêt des tests unitaires ?

Les tests unitaires permettent de détecter les erreurs de logique, de syntaxe ou de comportement dès le stade de développement. Ils servent également de documentation vivante du comportement attendu du code, ce qui permet d'accroître la productivité en limitant les bugs à la sortie et en se prémunissant contre des erreurs simples.