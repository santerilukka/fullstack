**Sekvenssikaavio** tilanteesta, jossa käyttäjä luo uuden muistiinpanon single page ‑versiossa.

```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate palvelin

    Note right of selain: Pyyntö sisältää JSON-muodossa olevan uuden muistiinpanon

    Note right of selain: Headeri Content-Type kertoo, että pyynnön data on JSON-muotoista

    palvelin-->>selain: 201 created
    deactivate palvelin
    
    Note right of selain: Palvelin vastaa kyselyyn statuskoodilla 201 created eikä pyydä uudelleenohjausta.

    Note right of selain: Selain pysyy samalla sivulla, ja muita HTTP-pyyntöjä ei suoriteta.
 
```