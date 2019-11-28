# Automate cellulaire

_Le [glossaire](./glossaire.md) définit la plupart des termes techniques utilisés_

## Définition

Extrait de l'article Wikipédia [Automate cellulaire](https://fr.wikipedia.org/wiki/Automate_cellulaire) :

> Un automate cellulaire est un simulateur basé sur une grille de cellules. À chaque pas de temps, un nouvel état est calculé pour chaque cellule, à partir de son état précédent et de l'état des cellules voisines. Chaque pas de temps correspond à une génération de cellules.

Dans les automates cellulaires standards, la liste complète des états que peut prendre une cellule est prédéfinie et est statique. De même, le voisinage de cellule est clairement identifié par l'ensemble des positions relatives des cellules du voisinage. La règle d'évolution est alors définie comme une fonction qui associe à chaque cellule un nouvel état en fonction de la liste des états des cellules du voisinage. Ainsi, avec les notations suivantes :

- d : **dimension** de l'automate cellulaire
- Z^d : espace des positions des cellules de l'automate : le **réseau**
- S : ensemble des états possibles pour une cellule : **l'alphabet**
- V, partie de Z^d : ensemble définissant la forme des **voisinages**; c'est donc une partie finie du réseau

La fonction d'évolution d'une cellule, dite **règle locale de transition**, est alors un élément de :

S ^ (S ^ V)

## Le jeu de la vie

Extrait de l'article Wikipédia [Jeu de la vie](https://fr.wikipedia.org/wiki/Jeu_de_la_vie) :

> Le jeu de la vie est un automate cellulaire imaginé par John Horton Conway en 1970, probablement le plus connu de tous les automates cellulaires. Malgré des règles très simples, le jeu de la vie est Turing-complet.
>
> Le « jeu » se déroule sur une grille à deux dimensions, théoriquement infinie (mais de longueur et de largeur finies et plus ou moins grandes dans la pratique), dont les cases — qu’on appelle des « cellules », par analogie avec les cellules vivantes — peuvent prendre deux états distincts : « vivante » ou « morte ». On peux associé une couleur à chaque état, par exemple : blanc pour « vivant » et noir pour « mort ».
>
> À chaque étape, l’évolution d’une cellule est entièrement déterminée par l’état de ses huit voisines de la façon suivante :
> Une chute de « bombes » non périodique.

> - Une cellule morte possédant exactement trois voisines vivantes devient vivante (elle naît).
> - Une cellule vivante possédant deux ou trois voisines vivantes le reste, sinon elle meurt.

## Les automates cellulaires élémentaires

Les automates cellulaires élémentaires figurent parmi les automates cellulaires les plus simples qui puissent être conçus. Ils sont au nombre de 256. Ils sont définis par les caractéristiques suivantes :

- **Dimensionnalité d de 1**: Le réseau est simplement E = **Z**
- **2 états** possibles : 0 ou 1 - mort ou vivant -- Q = {0, 1}
- **Voisinages de 3** cellules : V = {-1, 0, 1}

Notons q le nombre d'éléments de Q et v le nombre d'éléments de V. La formule donnant le nombre de règles d'évolution en fonction du nombre d'état et de la taille des voisinages est :

`q ** (q ** v)`

Dans ces conditions, pour un AC élémentaire, les règles d'évolution sont au nombre de `2 ** (2 ** 3),` soit `2 ** 8`, d'ou 256 règles d'évolution possibles.

## Représentation des automates cellulaires

L'étude des automates cellulaires repose principalement sur la représentation de ceux-ci.
Traditionnellement, une couleur est associé à chaque état, et une zone est associé à chaque cellule. Chaque cellule est coloré en fonction de l'état qu'elle prends.

### Automates cellulaires bidimensionnels

La représentation des automates cellulaires bidimensionnels consiste généralement à afficher successivement les différentes vue de l'espace des cellules.
Sur chaque vues, l'ensemble des cellules est représenté par la couleur de l'état de chacune d'elles.

### Automates cellulaires unidimensionnels

Les automates cellulaires unidimensionnel étant dimensionnellement plus compactes que leur homologues bidimensionnels, il est possible de représenter l'historique des états qu'il a occupé, sur des lignes parallèle à la ligne montrant l'état de l'automate. Traditionnellement, chaque ligne d'état instantané est horizontale et l'état le plus récent est la ligne la plus basse. Les lignes verticales constitue les historiques de chaque cellule

## La règle 110

La règle 110 est un des 256 AC élémentaires, et est donc unidimensionnelle. Il a été prouvé en 2004, par Matthew Cook, que la règle 110 est Turing-Complet. À la date du 2019-11-22, c'est le seul automate élémentaire dont la Turing-Completeness a été prouvé.

Ceci fait de la règle 110 un AC d'une extrême simplicité, en particulier lorsque le but est de prouver la Turing-Completeness.

### Interprétation des numéros d'automates élémentaires

Les 256 automates élémentaires sont numérotés de 0 à 255 et porte alors le nom de "règle". Chaque numéro de règle définit entièrement et de manière unique un automate cellulaire. Les automates cellulaires ayant 2 états, et des voisinages de 3 cellules, la règle d'évolution qui leur est associée est décrite par leur numéro lorsque celui-ci est écrit en base 2, sur 2 ^ 3 chiffres.

Par exemple la règle 110 s'écrit en base 2 `0b01101110`. Cette écriture s'interprète ainsi, suivant les valeurs des cellules (a, b, c) du voisinage :

```
abc   a, b, c   a, b, c   a, b, c   a, b, c   a, b, c   a, b, c   a, b, c   a, b, c
      1, 1, 1   1, 1, 0   1, 0, 1   1, 0, 0   0, 1, 1   0, 1, 0   0, 0, 1   0, 0, 0
0b_      0         1         1         0         1         1         1         0
```

### Classification de Stephen Wolfram des automates cellulaires unidimensionnels

La grande majorité des automates cellulaires unidimensionnels produisent des motifs inintéressants, tandis que certains automates produisent des motifs d'une complexité surprenante, égalant celles des motifs complexes trouvés dans la nature. Stephen Wolfram, dans _A New Kind of Science_, divise les automates cellulaires unidimensionnels en quatres classes suivant leur issue:

#### Classe 1 - Uniformité

Les automates de classes 1 convergent vers un état stable et toute forme d'aléatoire initiale disparaît rapidement.

Un exemple d'automate cellulaire de classe 1 est la règle 254 (la règle triple ou).

#### Classe 2 - Répétition

Tout comme les AC de classe 1, les AC de classe 2 convergent. Toutes leur cellules atteignent un état constant ou periodique, les structures étant fixes ou oscillantes. Une partie de l'aléatoire initiale peu persister est se retrouver dans l'ère stable de l'automates cellulaire, cependant les changements apportés à l'état initiale tendent à peu se propager.

Un exemple d'automate cellulaire de classe 2 est la règle 51 (la règle non).

#### Classe 3 - Aléatoire

Les AC de classes 3 semblent aléatoire et n'ont pas de motifs facilement discernables. Toutes les structures stables qui apparaissent sont rapidement détruites par le bruit environnant. Les changement apportés à l'état initiale tendent à se propager indéfiniment.

Un exemple d'automate cellulaire de classe 3 est la règle 30.

#### Classe 4 - Complexité

Les AC de classe 4 peuvent être envisagés comme un mélange entre des automates de classe 2 et de classe 3. On y trouve des motifs répétitifs, mais la position et la génération ou ces motifs ce produisent est apparemment aléatoire. Les structures qui se forment dans ces AC intéragissent de manière complexe. Il se peut que l'issue finale soit un ensemble de structures oscillantes, comme pour les AC de classe 2, mais ceci ne se produit qu'après un très grand nombre de génération, même pour des états initiaux simples.

Un exemple d'automate cellulaire de classe 4 est la règle 110.

## Algorithmes relatifs aux automates cellulaires

### Hashlife

[Hashlife](https://en.wikipedia.org/wiki/Hashlife) est un algorithmes de calcul du [Jeu de la vie](https://fr.wikipedia.org/wiki/Jeu_de_la_vie). Il est le résultat de l'application de l'algorithme décrit par Gosper Bill dans sa publication "Exploiting Regularities in Large Cellular Spaces", en 1984, à l'automate cellulaire du Jeu de la Vie.

Cette algorithme permet de réduire la quantité de calculs CPU, en mémorisant les résultats intermédiaires de simulation, afin d'éviter de les recalculer. Le nom est la concaténation de "Hash" et "Life". "Hash" provient de l'utilisation par l'algorithme d'une [table de hachage](https://fr.wikipedia.org/wiki/Table_de_hachage) pour mémoriser les résultats intermédiaires. "Life" désigne l'application de l'algorithme au jeu de la vie (Game of **Life**).

Cette algorithme permet d'accélérer les calculs, avec le contre-parti qu'il requière plus de RAM qu'un algorithme naïf.

### Généralisation de Hashlife

Bien que la publication de 1984 de Gosper Bill précédemment cité ne présente que le calcul du jeu de la vie, ses principes ne sont nullement limité à cet automate cellulaire et peuvent même s'appliquer à des automates cellulaires de toutes dimensionnalités.

## Explorateurs d'automates cellulaires existants

### Explorateurs bidimensionnels

#### Golly

[Golly](<https://en.wikipedia.org/wiki/Golly_(program)>) est un outils de simulation d'automates cellulaire bidimensionnels arbitraires. Il est open-source, écrit en C++ et il fonctionne comme application de bureau.
Golly utilise Hashlife pour accélérer la simulation des automates. Golly ne calcul pas d'automates 1D ni 3D, uniquement des automates 2D.

#### LifeViewer

[LifeViewer](https://conwaylife.com/wiki/LifeViewer) est tout comme Golly, un simulateur d'automates cellulaires bidimensionnels. Comparé à Golly, il a l'avantage de fonctionner dans le navigateur, mais c'est un logiciel propriétaire, et il n'utilise pas Hashlife.

### Explorateurs unidimensionnels

Les outils permettant de découvrir les automates cellulaires unidimensionnels sont peu nombreux et peu fourni en fonctionnalités. L'outil le plus convaincant est Wolfram Alpha, qui affiche des échantillons d'automate cellulaire

#### Wolfram Alpha

Wolfram Alpha est un moteur de calcul de connaissance. Il est accessible en ligne, et fourni une description des caractéristique de n'importe quel automate cellulaire unidimensionnel. Cette description inclut des échantillons de calcul de l'automate dans différentes configuration de départ.

[Revenir à l'accueil](..)