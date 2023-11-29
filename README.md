# Marvel App

## Installation

récupérer le projet en local et installer les dépedances

```bash
    git clone url-du-projet
    cd marvel-app
    npm install
```

Lancement

```bash
    npm start
```

l'app est accessible à l'adresse http://localhost:3000

Tests

Exécution dest tests unitaires en mode watch (les tests seront relancés à chaque modification du code) :

```bash
    npm test
```

Exécution des tests une seule fois avec un rapport détaillé de la couverture de code :

 ```bash   
    npm run test:coverage
  ```

``` mermaid
graph LR
    A["home"] -- /about --> B["about"]
    A["home"] -- /contact --> C["contact"]
    A["home"] -- /character/:id --> D(("character"))
```