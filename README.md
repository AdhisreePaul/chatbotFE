# AI Chatbot (React + Node.js + Gemini API)

A modern, full-stack AI chatbot web application inspired by ChatGPT’s interface. The frontend is built with React and Vite, and the backend uses Node.js/Express with Google Gemini (Generative AI) API integration.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)

   * [Clone the Repository](#clone-the-repository)
   * [Backend Setup](#backend-setup)
   * [Frontend Setup](#frontend-setup)
5. [Usage](#usage)
6. [Customization](#customization)
7. [Dependencies](#dependencies)
8. [Troubleshooting](#troubleshooting)

---

## Features

* **Modern Chat UI:** Sidebar with folders/navigation, chat list, and main chat area.
* **Real-time Messaging:** User and bot messages display instantly with loading indicators.
* **Google Gemini AI:** Powered by Google’s Gemini API for intelligent responses.
* **State Management:** Managed with React Context API.
* **Responsive Design:** Mobile-first styling with CSS modules.
* **Environment Variables:** Secure API key handling via `.env`.

---

## Project Structure

```
ai-chatbot/
├── backend/
│   ├── index.js           # Express server and Gemini integration
│   ├── package.json       # Backend dependencies and scripts
│   └── .env               # Environment variables (GEMINI_API_KEY)

└── frontend/
    ├── public/
    │   └── index.html     # HTML template
    ├── src/
    │   ├── components/    # React UI components
    │   │   ├── Sidebar.jsx
    │   │   ├── ChatWindow.jsx
    │   │   ├── InputBox.jsx
    │   │   └── Message.jsx
    │   ├── contexts/      # React Context for chat state
    │   │   └── ChatContext.jsx
    │   ├── App.jsx        # Main application layout
    │   └── App.css        # Global styles
    ├── package.json       # Frontend dependencies and scripts
    └── README.md          # Frontend-specific readme (optional)
```

---

## Prerequisites

* **Node.js** (v14 or above)
* **npm** (v6 or above) or **yarn**
* Google AI Studio account with access to Gemini API key

---

## Getting Started

### Clone the Repository

```bash
git clone <your-repo-url>
cd ai-chatbot
```

### Backend Setup

1. Navigate to the backend folder and install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in `backend/` with your Gemini API key:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. Start the server:

   ```bash
   node index.js
   ```

   The backend runs on [https://chatbotfe-os53.onrender.com].

### Frontend Setup

1. Open a new terminal, navigate to the frontend folder, and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Launch the development server:

   ```bash
   npm run dev
   ```

   The frontend runs on [https://chatbot-fe-phi.vercel.app/].

---

## Usage

1. Open your browser and go to [https://chatbot-fe-phi.vercel.app/].
2. Type a message in the input box and press **Enter** or click the **Send** button.
3. Watch the bot respond powered by Gemini API.
4. Use the sidebar to simulate new conversations (UI only).

---

## Customization

* **Styling**: Modify `App.css` or component-specific CSS modules in `src/components/`.
* **Gemini Model**: Swap models in `backend/index.js` by changing the model name in the API call.
* **Additional Features**: Integrate conversation persistence, user authentication, or theming.

---

## Dependencies

### Backend

* **express**: Web framework for Node.js.
* **cors**: Cross-origin resource sharing.
* **dotenv**: Environment variable loader.
* **@google/generative-ai**: Google Gemini API client.

### Frontend

* **react**: UI library.
* **react-dom**: React DOM renderer.
* **vite**: Development server and build tool.

---

## Troubleshooting

* **Error: CORS issues**

  * Ensure CORS is enabled in `index.js`:

    ```js
    app.use(cors());
    ```

* **500 Internal Server Error**

  * Confirm your `.env` file has the correct `GEMINI_API_KEY`.
  * Restart the backend after any changes.
  * Inspect server logs for stack traces.

* **Frontend not loading**

  * Verify both servers are running on the correct ports.
  * Check browser console for errors.
