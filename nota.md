# REACT

REACT Prise en main :

## Création d'un nouveau projet React et options à choisir

```bash
npm create vite@latest nom_du_projet -- --template react
cd nom_du_projet
npm intall
npm run dev
```

Cours de réact, à retenir :

## Snippets React

- **rfc + Entrée** : Crée un composant fonctionnel React
- **rfce + Entrée** : Composant fonctionnel avec export
- **rcc + Entrée** : Composant de classe
- **rafce** : Composant fléché avec export

## Contenu, données

- le state pour gérer les données qui changent dans un composant.
- les props pour transmettre des infos du parent à l’enfant.
- children pour rendre un composant flexible et réutilisable.

---

# Conseils et rappels pour bien débuter avec React

## 1. Structure d'un composant fonctionnel

```jsx
function MonComposant(props) {
  return <div>Hello {props.name}</div>;
}
```

Ou en version fléchée :

```jsx
const MonComposant = ({ name }) => <div>Hello {name}</div>;
```

## 2. JSX :

- Le JSX est un "mix" de Javascript et de HTML.
- Les attributs sont en camelCase (className, onClick...)
- Un composant doit retourner un seul élément parent (div ou <>...</>)

## 3. Props

- Les props sont des données passées du parent à l'enfant.
- Elles sont en lecture seule dans le composant enfant.

## 4. State

- Le state permet de gérer des données qui changent dans le composant
- Utilisation de hook useState dans les composants fonctionnels :

```jsx
const [nomDeVariable, setNomDeVariable] = useState(0);
```

Ici, 0 représentera la valeur initiale de la variable. setNomDeVariable devra être défini en dessous.

## 5. Rendu conditionnel

- Utilisation de la condition &&

```jsx
return condition && expression;
```

Si la condition vaut _true_, l'expression sera traitée, sinon, si la condition vaut _false_ elle sera ignorée.

- Utilisation des ternaires :

```jsx
{
  age >= 18 ? <span>Adulte</span> : <span>Mineur</span>;
}
```

```jsx
{nombre > 0
   ? <span>Nombre positif<span>
   : (nombre == 0)
      ? <span>Le nombre est égal à zéro</span>
      : <span>Nombre négatif</span>
}
```

```jsx
return condition1
  ? valeur1
  : condition2
    ? valeur2
    : condition3
      ? valeur3
      : valeur4;
```

- Utilisation de match :

```jsx
return match(true) {
   (condition 1) => expression 1,
   (condition 2) => expression 2,
   (condition 3) => expression 3,
   (condition 4) => expression 4,
   default => expression 5,
};
```

## 6. Listes et clés :

- Pour afficher une liste, on utilise ici map et on donne une propriété unique à chaque élément :

```jsx
{
  array.map((element) => <li key={item.id}>{itel.label}</li>);
}
```

## 7. Les fragments React :

Pour retourner des élements san div supplémentaire :

```jsx
<>élements</>
```

équivalent à :

```jsx
<Fragment>elements</Fragment>
```

## 8. Principaux Hooks :

- _useState_ : gérer l'état local
- _useEffect_ :gérer les effets (fetch, timer, ...)
- _useContext_ : pour partager des données entre plusieurs composants sans passer par les props.
- _useRef_ : pour accéder à un élément du DOM ou stocker une valeur persistante sans provoquer de re-render.
- _useMemo_ : pour mémoriser une valeur calculée et éviter des calculs inutiles lors des re-renders.
- _usePersonalisé_ : permet d'extraire la logique d'un composant sous forme de fonction réutilisable

```jsx
import React, { useState, useEffect, useRef, useMemo } from "react";

function Compteur() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(count);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  const double = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>Compteur : {count}</p>
      <p>Valeur précédente : {previousCount.current}</p>
      <p>Double : {double}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

## 9. Bonnes pratiques

- Composants : les composants sont nommés en PascalCase

## 10. Routing

- **npm install react-router-dom@6**
- **Utilisation de `react-router-dom`** pour la navigation multi-pages.
- **Utilisation de `<Link to="...">`** au lieu de `<a href="...">` pour éviter le rechargement de la page.
- **.../profil/:id** exemple de patch dynamique

## 11. Qu'est-ce que l'extension `.tsx` ?

- Un fichier `.tsx` est un fichier **TypeScript** qui contient du **JSX** (du code React).
- C'est l'équivalent de `.jsx` mais pour les projets qui utilisent **TypeScript** au lieu de JavaScript pur.
- TypeScript permet d'ajouter du typage statique à ton code React, ce qui aide à éviter beaucoup d'erreurs et à mieux documenter tes composants.

**Exemple d'utilisation :**

```tsx
type Props = {
  name: string;
  age?: number;
};

const Welcome: React.FC<Props> = ({ name, age }) => (
  <div>
    Bonjour {name} {age && `(âge : ${age})`}
  </div>
);

export default Welcome;
```

Pour utiliser .tsx il faut créer un projet avec template TypeScript :

```tsx
npm create vite@latest mon-projet -- --template react-ts
```

### Ressources utiles

- [Documentation officielle React (français)](https://fr.react.dev/)
- [Tutoriel React pour débutants (OpenClassrooms)](https://openclassrooms.com/fr/courses/7150626-debutez-avec-react)
- [Exercices React interactifs](https://react-tutorial.app/)
- [Vite (outil de création de projet React)](https://vitejs.dev/guide/)
- [Awesome React (liste de ressources)](https://github.com/enaqx/awesome-react)
- [Styled Components (CSS-in-JS)](https://styled-components.com/)
- [React-Router Tutorial](https://reactrouter.com/6.30.1/start/tutorial)

---

# Généralités supplémentaires VS Code : #

## Création de Snippets personnels

Dans VSCode, pour créer ou modifier des snippets personnalisés :

1. Ouvre la **palette de commandes** avec  
   `Ctrl+Shift+P` (Windows/Linux) ou `Cmd+Shift+P` (Mac)
2. Tape **"snippets"** puis choisis  
   `Preferences: Configure User Snippets`
3. Choisis un langage (ex: `javascript`, `javascriptreact`, ou `New Global Snippets file...`)
4. Ajoute ou modifie tes snippets dans le fichier qui s'ouvre.
