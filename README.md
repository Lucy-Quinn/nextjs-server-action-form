# Next.js Forms Learning Project

## Overview

This repository is a **learning-focused project** designed to experiment with different ways to handle forms in **Next.js (App Router)**. The goal is to progressively build and understand various form handling techniques, from **basic server action forms** to **complex multi-step and file upload forms**.

Each form will be implemented as a separate route under `/forms`, following **best practices for Next.js 14+**. This project will evolve over time, incorporating new concepts and improvements.

---

## 📂 Folder Structure

```
📂 src/
│── 📂 app/
│   │── 📂 forms/         # Main folder for all forms
│   │   ├── 📂 basic/             # Server Actions (No Client JS)
│   │   ├── 📂 react-hook-form/   # React Hook Form + Client Validation
│   │   ├── 📂 multi-step/        # Multi-Step Form (Stateful)
│   │   ├── 📂 file-upload/       # File Upload + External API
│   │   ├── page.tsx             # Simple index page with links to forms
│   │── 📜 layout.tsx       # Global layout
│   │── 📜 page.tsx         # Main landing page
│── 📂 components/      # Shared components like FormInput, FormHeader
│── 📂 lib/             # Utility functions (validation schemas, helpers)
│── 📂 styles/          # Global CSS, Tailwind
│── 📜 tsconfig.json
│── 📜 .eslintrc.json
│── 📜 .prettierrc
│── 📜 tailwind.config.ts
│── 📜 postcss.config.mjs
│── 📜 .gitignore
│── 📜 globals.css
```

Each form has its **own directory** under `/forms`, making it easy to navigate and experiment with different approaches.

---

## 📝 Learning Plan & Form Breakdown

### **1️⃣ Basic Form – Server Actions (No Client-Side JS)**

✅ **Goal:** Learn how to use **Next.js Server Actions** without JavaScript.
✅ **Tech Used:** Next.js (`form action={serverAction}`), Server Actions, Zod (server validation).
✅ **Key Learning Points:**

- How **progressive enhancement** works in Next.js forms.
- Server-side **validation with Zod**.
- Handling **server errors and success states**.

💡 **Example:** A **simple contact form** with `name`, `email`, and `message`.

---

### **2️⃣ React Hook Form – Client-Side Validation**

✅ **Goal:** Add **instant validation** before submitting to the server.
✅ **Tech Used:** React Hook Form, Zod, Next.js Server Actions.
✅ **Key Learning Points:**

- How **client-side validation** improves UX.
- Keeping **server validation as a fallback**.
- Handling **loading states & controlled inputs**.

💡 **Example:** A **newsletter signup form** with `email`, `terms agreement`, and real-time validation.

---

### **3️⃣ Multi-Step Form – Stateful Form Handling**

✅ **Goal:** Learn how to persist **form progress across multiple steps**.
✅ **Tech Used:** React Hook Form, Next.js Server Actions, Zustand (state management).
✅ **Key Learning Points:**

- **Saving form progress** between steps.
- Handling **conditional validation** (e.g., Step 2 requires Step 1 to be valid).
- Using **Zustand/local storage** for persistent state.

💡 **Example:** A **job application form**:

- Step 1: **Personal Details (Name, Email, Phone)**
- Step 2: **Work Experience (Company, Role, Years)**
- Step 3: **Upload CV (File Upload)**
- Step 4: **Review & Submit**

---

### **4️⃣ File Upload Form – Uploading Files & API Integration**

✅ **Goal:** Handle **file uploads** and interact with external APIs.
✅ **Tech Used:** Next.js, React Hook Form, Cloudinary (or S3), API integration (Resend for email).
✅ **Key Learning Points:**

- Handling **multipart form data** in Server Actions.
- Uploading files to **Cloudinary/S3**.
- Sending a **confirmation email** upon submission.

💡 **Example:** A **user profile form** where users can:

- Upload a **profile picture**.
- Enter **name, bio, and website**.
- **Send a verification email** upon submission.

---

## 📏 Code Formatting & Linting

### **ESLint & Prettier Configuration**

If your **VSCode is correctly configured**, ESLint and Prettier will run automatically on save. However, you might still want to run these commands in the following cases:

- **After pulling new code** to ensure formatting consistency.
- **Before pushing changes** if you want to confirm everything is formatted.
- **If CI/CD checks fail** due to linting or formatting issues.

### **Running ESLint & Prettier Manually**

If needed, you can run these commands to check and fix formatting across the project:

- **Run linting:**

```bash
npm run lint
```

- **Run Prettier formatting:**

```bash
npx prettier --write .
```

---

## 📜 Git Ignore Setup

This project includes a `.gitignore` file to prevent committing unnecessary or sensitive files. This ensures that build artifacts, dependencies, and environment variables are not included in version control, keeping the repository clean and secure.

### **Why `.gitignore` is Used**

This project includes a `.gitignore` file to prevent committing unnecessary or sensitive files, ensuring the repository remains clean and efficient. It excludes:

- **Dependencies (`node_modules/`)** – Prevents committing installed packages.
- **Build artifacts (`.next/`, `/out/`, `/build/`)** – Avoids including compiled files.
- **Environment variables (`.env*`)** – Keeps sensitive credentials private.
- **Debug logs (`*.log`, `.DS_Store`)** – Prevents clutter from system-generated files.
- **Testing & TypeScript metadata (`/coverage/`, `*.tsbuildinfo`)** – Excludes non-essential dev files.

✅ **This keeps the project clean and avoids unnecessary files in version control.**
✅ **Ensures unnecessary or sensitive files are not committed.**

---

## 🌱 Project Goals

🔹 **Master Next.js form handling techniques** from simple to advanced.
🔹 **Understand the benefits & limitations** of Server Actions vs. React Hook Form.
🔹 **Improve error handling & user experience** across different form types.
🔹 **Build a modular, reusable system** for form components.

---

## ✅ Next Steps

- **Set up the project repository** & folder structure.
- **Implement Form 1 (Basic Server Action Form).**
- Update this README as we progress!

🚀 **This project is a learning journey—stay tuned for updates!**
