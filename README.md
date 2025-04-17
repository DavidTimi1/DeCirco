# DeCirco
Revolutionizing recycling by leveraging decentralisation and blockchain technology

/DeCirco
├── /app
│   ├── /api
│   │   ├── /confirm
│   │   │   └── route.ts               # API endpoint for OTP confirmation
│   │   ├── /reward
│   │   │   └── route.ts               # API endpoint for rewarding the user
│   ├── /confirm
│   │   └── page.tsx                   # OTP confirmation page
│   ├── /layout.tsx                    
│   ├── /page.tsx                      # Landing page
│   └── /styles
│       └── globals.css                # Global styles
├── /aiken
│   └── decirco_reward.aiken           # Aiken smart contract for minting the reward token
├── /lib
│   └── aiken.ts                       # Aiken script executor
├── /public
│   ├── /images
│   └── /favicon.ico                   # App favicon
├── /styles
│   └── globals.css
├── /tailwind.config.ts
├── /tsconfig.json
├── /package.json
└── /README.md

