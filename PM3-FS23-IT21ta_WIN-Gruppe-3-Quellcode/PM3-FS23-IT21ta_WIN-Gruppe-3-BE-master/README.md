# PM3-FS23-IT21ta_WIN-Gruppe-3

## Beschreibung
Dieses Repository enthält den Backend Code und die Backend-Issues für das Projekt "Find-Your-Space"

Der Code und die Frontend spezifischen Issues sind in folgendem Repository: https://github.zhaw.ch/PM3-FS23/PM3-FS23-IT21ta_WIN-Gruppe-3-FE

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
* **Backend: Spring Web**
  * Tests: JUnit 
  * Best Practices: https://medium.com/the-resonant-web/spring-boot-2-0-project-structure-and-best-practices-part-2-7137bdcba7d3
* **Database: PostgreSQL (In-Memory)**
