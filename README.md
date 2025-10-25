# Amigo Secreto 🎁

Uma aplicação moderna e simples para organizar o sorteio de Amigo Secreto (Secret Santa) online. Crie grupos, convide amigos por e-mail e deixe que a aplicação faça o sorteio e envie os resultados!

## ✨ Funcionalidades

* **Login sem Senha (Magic Link):** Acesso rápido e seguro via e-mail utilizando OTP (One-Time Password).
* **Criação e Gestão de Grupos:** Gerencie seus grupos de Amigo Secreto.
* **Sorteio Automático:** A aplicação realiza o sorteio dos participantes, garantindo que ninguém tire a si mesmo.
* **Notificação por E-mail:** Envio automático de e-mails para todos os participantes com o resultado do sorteio.
* **Revelação Interativa:** Página de grupo que revela o Amigo Secreto de forma divertida (ao passar o mouse sobre um card)/page.tsx].

---

## 💻 Tech Stack

O projeto é construído com as seguintes tecnologias:

* **Framework:** [Next.js](https://nextjs.org/) (App Router).
* **Linguagem:** TypeScript.
* **Estilização:** Tailwind CSS.
* **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/).
* **Backend as a Service (BaaS):** [Supabase](https://supabase.com/) para autenticação e banco de dados.
* **E-mails:** [Resend](https://resend.com/) para envio de e-mails transacionais (os resultados do sorteio).

## 🚀 Como Começar

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

Você precisará ter o [Node.js](https://nodejs.org/en) (versão 18.18.0 ou superior) e o npm/yarn/pnpm/bun instalados.

### 1. Clonar o Repositório

```bash

# Substitua <URL_DO_SEU_REPOSITORIO> pelo link correto
git clone <URL_DO_SEU_REPOSITORIO>
cd app_amigo_secreto
```
### 2. Instalar Dependências
```bash
# npm
npm install
# ou use outro gerenciador de pacotes: yarn, pnpm, bun
```
#### 3. Configurar Variáveis de Ambiente
```bash
Crie um arquivo chamado .env.local na raiz do projeto e adicione as seguintes variáveis:
Variável,Exemplo de Valor,Descrição

NEXT_PUBLIC_SUPABASE_URL,https://xyz.supabase.co,URL do seu projeto Supabase.

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,eyJhb...,Chave pública/anon do seu projeto Supabase.

NEXT_PUBLIC_BASE_URL,http://localhost:3000,URL base da aplicação para redirecionamentos.

RESEND_API_KEY,re_abc123...,Chave de API do Resend para envio de e-mails.
```
