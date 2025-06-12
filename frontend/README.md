# sBTC Lending Protocol Frontend

This README file provides documentation specific to the frontend part of the sBTC Lending Protocol project. It includes setup instructions, usage guidelines, and information about the components used in the application.

## Project Overview

The sBTC Lending Protocol is a decentralized application (dApp) built on the Stacks blockchain that allows users to borrow STX using Bitcoin as collateral. The frontend is developed using Next.js and React, providing a seamless user experience.

## Getting Started

To get started with the frontend of the sBTC Lending Protocol, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd stacks-dapp-project/frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the Next.js development server, and you can access the application at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized version of the application in the `.next` directory.

### Usage

- Connect your Hiro Wallet or Xverse wallet using the WalletConnect component.
- Navigate to the dashboard to view your loan status and health ratio.
- Interact with the application to borrow STX using Bitcoin as collateral.

## Components

- **WalletConnect.tsx**: Handles wallet connection and user authentication.
- **_app.tsx**: Custom App component that wraps the application.
- **index.tsx**: Main entry point of the application, rendering the user interface.

## Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Stacks blockchain for enabling decentralized applications.
- Next.js for providing a powerful framework for React applications.