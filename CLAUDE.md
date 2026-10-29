# Hinweise für Claude

## Git und Pull Requests

- Für jede neue Aufgabe einen frischen Branch vom aktuellen `master` anlegen.
- Vor jedem Push prüfen, ob der vorherige Pull Request schon gemergt ist. Nach einem Merge nie auf dem alten Branch weiterarbeiten.
- Keine Merge-Commits von `master` in Feature-Branches. Muss ein Branch aktualisiert werden, wird er auf `master` gerebased.
- Ein Pull Request enthält nur die Commits der aktuellen Aufgabe, keine bereits gemergte Historie.

## Inhalte der Website

- Texte nicht ohne Rückfrage umschreiben, kürzen oder abschwächen. Änderungen erst als Vorschlag zeigen (vorher/nachher) und nach Freigabe umsetzen.
- Bestehende Leistungen und Schlagworte nicht ersatzlos streichen.
- Keine neuen Angaben ergänzen, die nicht freigegeben sind (z. B. Kundennamen).
- Das Wort „KI“ nicht verwenden, stattdessen „Agenten“ bzw. „agentenbasiert“.
- Deutsch und Englisch immer gemeinsam ändern (`src/i18n/translations.ts`).

## Prüfen

- Nach jeder Änderung `npm run build` ausführen und die Seite bei 390, 1024 und 1440 px Breite ansehen.
