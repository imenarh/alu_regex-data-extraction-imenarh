# Formative One - Regex Onboarding Hackathon

This project is a Javascript regex-based program that can:

- Extract specific types of structured data from raw text.

- Validate input to ensure it is well-formed and does not contain unsafe or malicious content.

- Handle realistic variations of data formats as they appear in the real world.

## How it works

The program receieve an input of a `.txt` file that resembles real-world data as it would appear in a production system.

The program will recognize the following data types in the file: 

- Email addresses (e.g., user@example.com, firstname.lastname@company.co.uk)

- URLs (e.g., https://www.example.com, https://subdomain.example.org/page)

- Phone numbers (e.g., (123) 456-7890, 123-456-7890, 123.456.7890)

- Hashtags (e.g., #example, #ThisIsAHashtag)

- Currency amounts (e.g., $19.99, $1,234.56)

## What it does

- **Extracts** emails, URLs, phone numbers, hashtags, and currency amounts using regular expressions.
- **Validates** Emails are masked to hide part of the local name.

## Usage:

```
node extract.js sample_input.txt
```

## Disclaimer

I enlisted ChatGPT to understand the project and generate the the [sample test input](./sample-input.txt). 

You can check the conversation following this [Link](https://chatgpt.com/share/69810e94-e048-8000-b260-f4a5b2170303)