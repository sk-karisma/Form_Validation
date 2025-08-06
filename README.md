# Community Event Registration Form

A simple, modular web signup form for community events — built with HTML, CSS, and JavaScript.  
The form provides real-time validation and clear error feedback for every field.

## Features

- **Required fields with validation:**  
  - **Name:** Letters and spaces only  
  - **Email:** Must be a valid email address  
  - **Phone Number:** Exactly 10 digits  
  - **Age:** Must be a number, 18 or older  
  - **Interests:** At least one interest must be selected (Sports, Music, Art, Tech)
- **Real-time error feedback:** Instant validation and messages below each input.
- **Accessible, responsive layout:** Clean and mobile-friendly.
- **User-friendly:** Clear red highlights and error messages appear directly under affected fields.

## Validation Rules

| Field        | Requirement                          | Example Invalid Input       |
|--------------|--------------------------------------|----------------------------|
| Name         | Required, only letters/spaces        | 123, Tom_22, !?@, [blank]  |
| Email        | Required, valid format               | tommail.com, t@, [blank]   |
| Phone Number | Required, exactly 10 digits          | 987654, abc1234567, [blank]|
| Age          | Required, number ≥ 18 (integer only) | 15, sixteen, 17, -2, [blank]|
| Interests    | At least one checkbox selected       | None checked               |

## Files

- `form_valid.html` — Main HTML file with markup and input form
- `form_valid.css` — CSS file containing all styles for layout and design
- `form_valid.js` — JavaScript file handling DOM updates, and error handling

---

## Link
[Form Validation](https://sk-karisma.github.io/Form_Validation/form_valid.html)
