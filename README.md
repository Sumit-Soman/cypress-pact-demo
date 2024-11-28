# Cypress Pact Demo

This project demonstrates how to implement **Pact Contract Testing** between a consumer and a producer using **Axios** for HTTP requests and **Jest** for testing. Pact ensures the consumer and producer adhere to a shared contract, enabling reliable and scalable microservice communication.

---

## 📋 **Table of Contents**

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [How to Run](#how-to-run)
  - [Running Consumer Tests](#running-consumer-tests)
  - [Running Producer Verification](#running-producer-verification)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [References](#references)

---

## 🌟 **Overview**

This project includes:
- A **Consumer** that fetches data from a Producer API using Axios.
- A **Producer** whose API responses are verified against the consumer's contract.
- Tests written with **Jest** and Pact to validate interactions and ensure compatibility between the Consumer and Producer.

---

## 🛠️ **Prerequisites**

Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **npm** or **yarn**
- **Pact CLI** (optional for manual interaction testing)

---

## ⚙️ **Setup**

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/cypress-pact-demo.git
cd cypress-pact-demo
npm install
node producer/producer.js  
npx jest consumer/consumer.test.js
npx jest producer/producer.js
```