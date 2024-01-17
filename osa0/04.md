**Sekvenssikaavio** tilanteesta, jossa käyttäjä luo uuden muistiinpanon sivulla https://studies.cs.helsinki.fi/exampleapp/notes

```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate palvelin

    Note right of selain: Selain tekee HTTP POST pyynnön, joka on tehty palvelimen osoitteeseen new_note. 

    palvelin-->>selain: 302 uudelleenohjauspyyntö
    deactivate palvelin
 
    Note right of selain: Palvelin vastaa 302 uudelleenohjauspyynnöllä, joka saa selaimen tekemään uuden HTTP GET pyynnön.

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate palvelin
    palvelin-->>selain: HTML dokumentti
    deactivate palvelin
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate palvelin
    palvelin-->>selain: css tiedosto
    deactivate palvelin
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate palvelin
    palvelin-->>selain: JavaScript tiedosto
    deactivate palvelin
    
    Note right of selain: Selain alkaa suorittaa JavaScript-koodia, joka hakee JSON-tiedoston palvelimelta
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate palvelin
    palvelin-->>selain: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate palvelin    

    Note right of selain: Selain suorittaa takaisinkutsufunktion, joka renderöi muistiinpanot 
```