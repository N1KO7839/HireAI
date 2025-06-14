# HireAI

**HireAI** to aplikacja webowa wspierająca użytkowników w przygotowaniach do rozmowy kwalifikacyjnej. Dzięki wykorzystaniu sztucznej inteligencji generuje pytania rekrutacyjne oraz udziela pomocnych podpowiedzi, które zwiększają szanse na sukces.

## 🚀 Funkcje

- Generowanie pytań dopasowanych do stanowiska i poziomu doświadczenia
- Wskazówki oparte na sztucznej inteligencji
- Symulacja rozmowy kwalifikacyjnej
- Przejrzysty, responsywny interfejs

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, TypeScript  
- **Backend:** Node.js, Express

## ⚙️ Konfiguracja

1. **Sklonuj repozytorium**
    ```bash
    git clone https://github.com/twoj-uzytkownik/hireai.git
    cd HireAI
    ```

2. **Instalacja zależności frontendowych**
    ```bash
    cd frontend/HireAI/
    npm install
    ```

3. **Instalacja zależności backendowych**
    ```bash
    cd backend/
    npm install
    ```

5. **Utwórz plik `.env` w katalogu `backend/` i dodaj następujące zmienne**
    ```env
    OPENAI_API_KEY=your_openai_api_key_here
    SERVER_PORT=3000
    ```

6. **Uruchom frontend i backend w osobnych terminalach**
    ```bash
    # Backend
    cd backend
    npm run dev

    # Frontend
    cd frontend/HireAI/
    npm run dev
    ```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173` (lub innym, zależnie od konfiguracji).

## 🖼️ Zrzuty ekranu

### Strona główna

![Zrzut ekranu strony głównej](https://imgur.com/QDLOICv.png)

### Sesja rozmowy kwalifikacyjnej

![Zrzut ekranu sesji AI](https://imgur.com/8bCIHKr.png)
