# template

ברוכים הבאים לפרויקט **template**!

## התקנה

1. לשכפל את הריפוזיטורי:
    ```bash
    git clone https://github.com/Aharon-Bruchim/express-microservice-template.git
    cd template
    ```
2. להתקין את התלויות:
    ```bash
    npm install
    ```

## קונפיגורציה

ערכו את הקובץ `config.ts` לפי הצרכים שלכם:

- לשם הקולקשיין של תשלומים במונגו:

    ```typescript
    paymentCollectionName: 'your collection name',
    ```

- ניתן להגדיר משתני סביבה בקובץ `.env`.

## הפעלה

להריץ את האפליקציה:

```bash
npm run dev
```

## מבנה הפרויקט

- `src/` — קוד המקור של האפליקציה
- `config.ts` — הגדרות וקונפיגורציה
- `package.json` — מידע על הפרויקט ותלויות
