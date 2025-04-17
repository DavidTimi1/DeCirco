# DeCirco
Revolutionizing recycling by leveraging decentralisation and blockchain technology


## **Project Overview**
**DeCirco** is a recycling innovation platform that rewards users with blockchain tokens when they confirm proper disposal of recyclable materials.

   - Features:
     - User rewards for confirmed recycling
     - Blockchain-based rewards with Aiken
     - OTP-based disposal confirmation system
     - Clean and responsive UI with TailwindCSS


## **Tech Stack**
   - **Frontend**: 
     - Next.js (with TypeScript)
     - TailwindCSS
   - **Backend**:
     - Aiken for Cardano blockchain integration
     - Next.js API routes for OTP confirmation and reward processing
   - **Blockchain**: 
     - Cardano blockchain (via Aiken smart contracts)
   - **Additional Tools**:
     - Node.js, npm/yarn for package management

## **Installation Instructions**
   - Clone the repository:
     ```bash
     git clone https://github.com/davidtimi1/DeCirco.git
     cd DeCirco
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Install **Aiken**:
     - Install Aiken globally using:
       ```bash
       npm install -g @aiken-lang/aikup
       ```
   - Ensure **Node.js** and **npm** are installed. If not, follow [Node.js installation](https://nodejs.org/).


## **Running the Development Environment**
   - Run the Next.js development server:
     ```bash
     npm run dev
     ```
   - The app will be accessible at `http://localhost:3000`.


## **API Routes**
   - **`/api/confirm`**: POST endpoint to handle OTP confirmation.
   - **`/api/reward`**: POST endpoint to call Aiken for rewarding the user.

## **Smart Contract**
   - **`decirco_reward.aiken`**: The smart contract that ensures users receive the `DECIRCO` reward token after confirming disposal. It runs the logic for minting tokens.
   - For full Aiken documentation, visit [Aiken Documentation](https://aiken-lang.io/docs/).

### **Testing**
   - **Testing API Routes**: Use tools like Postman to test API endpoints like `/api/confirm` and `/api/reward`.
   - **Test the Smart Contract**: Run your smart contract locally with Aiken CLI commands 

## **License**
   - Specify the license type (e.g., MIT) and any usage restrictions.


## Project Structure
/DeCirco <br>
├── /app <br>
│   ├── /api <br>
│   │   ├── /confirm <br>
│   │   │   └── route.ts               # API endpoint for OTP confirmation <br>
│   │   ├── /reward <br>
│   │   │   └── route.ts               # API endpoint for rewarding the user <br>
│   ├── /confirm <br>
│   │   └── page.tsx                   # OTP confirmation page <br>
│   ├── /layout.tsx <br>
│   ├── /page.tsx                      # Landing page <br>
│   └── /styles <br>
│       └── globals.css <br>
├── /aiken <br>
│   └── decirco_reward.aiken           # Aiken smart contract for minting the reward token <br>
├── /lib <br>
│   └── aiken.ts                       # Aiken script executor <br>
├── /public <br>
│   ├── /images <br>
│   └── /favicon.ico <br>
├── /styles <br>
│   └── globals.css <br>
├── /tailwind.config.ts <br>
├── /tsconfig.json <br>
├── /package.json <br>
└── /README.md <br>

