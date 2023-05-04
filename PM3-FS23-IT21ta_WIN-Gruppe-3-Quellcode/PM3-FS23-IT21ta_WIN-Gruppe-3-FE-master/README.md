# PM3-FS23-IT21ta_WIN-Gruppe-3-FE
Dieses Repository enthält den Frontend Code und die Frontend-Issues für das Projekt "Find-Your-Space"

Der Backend-Code sowie das Datenbank Schema sind hier aufzufinden: https://github.zhaw.ch/PM3-FS23/PM3-FS23-IT21ta_WIN-Gruppe-3-BE

# Team

## Gruppen-Mitglieder
* Adrian Büchi 
* Elias Keller
* Marco Mata
* Michael Klink
* Patrick Schweizer
* David Sommer

## Teamrules
* Wir versuchen den Code in Englisch zu schreiben d.h. zum Beispiel ConsoleInputReader.java oder AddParagraph(String text, int paragraphNumber) anstelle von deutschen Namen.
* Wir arbeiten grundsätzlich mit Branches. Branches werden auf Englisch benammst und sollten beschreiben, was in diesem Branch gemacht wird.
* Wenn eine Änderung komplett ist, sollte diese im Idealfall in Review bei allen gestellt werden bevor auf den Master Branch gepushed wird. (4 Augen Prinzip)
* Git Commits bitte auf Englisch und nur Zustände comitten, die mindestens kompilieren und nach Möglichkeit nur auf die eigenen Feature Branches.
* Wenn wir feststellen, dass etwas nicht funktioniert bitte frühzeitig melden, wenn die oben genannten Teamrules nur hinderlich sind dies ansprechen, dann werden diese neu definiert.


## Git Workflow

Wir verwenden den Standard Git-Workflow, d.h. wir arbeiten grundsätzlich mit eigenen Branches. 

Das Naming Pattern, welches wir auf den Branches verwenden ist folgendes: 
* Für Feature Branches: prefix mit `feature`
* Für Bugfix Branches: prefix mit `bugfix`

Daraus resultiert z.B. folgender Name für einen Branch: `feature/issue-10-connect-multiple-clients` oder `bugfix/issue-23-fix-button-click-not-working`

Alles Weitere wie z.B. `release` oder vglw. wird für den Rahmen des Projektes nicht benötigt.

Der Hauptbranch ist bei uns der `master`. Auf diesen sollte nicht direkt gepushed werden (wird via rules auch verhindert). 

Grundsätzlich ist die Idee mit Pull-Requests zu arbeiten anstelle von direkten Pushes auf den `master`. 
Ein Pull-Request wird immer von einem Feature/Bug Branch aus gemacht. Pull-Requests sollten einen Zustand repräsentieren, der fertig ist, d.h. nicht noch TODOs oder unaufgeräumten Code enthalten. 
Es wird immer mind. ein Teammitglied den Code reviewen müssen um zu mergen. Idealerweise schauen aber alle Teammitglieder auf den Code und geben ihr Review ab. Adrian Büchi sollte grundsätzlich aufgrund seiner Erfahrung **immer** als Reviewer darauf sein. Nach einem Review sollten allfällige Änderungen entweder umgesetzt oder Rückfragen gestellt werden um Unklarheiten oder vglw. aufzulösen. Wenn das Feedback umgesetzt wurde, beginnt der Reviewzyklus von vorne.

Wenn ein Pull-Request gemerged wurde, sollte der dazugehörige Branch immer gelöscht werden. Dies dient dazu, dass keine "toten" branches herumliegen die potentiell verwirren könnten.

Commit Messages sollten nach Möglichkeit wiederspiegeln, was gemacht wurde. D.h. nicht "Did stuff" "Fixed" oder vglw. sondern repräsentativ für den Change stehen. Git Commits sollten sprechend sein (https://cbea.ms/git-commit/)

---

# Auftrag PM

## Architekturdokumentation
* **Frontend: Angular**
  * Template: PrimeNG (https://primeng.org/setup)



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
