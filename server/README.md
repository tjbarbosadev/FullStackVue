# FullStackVue

## Pacotes do Projeto TypeScript + Node.js

### Principais Dependências

| Pacote        | Descrição                                                          |
| ------------- | ------------------------------------------------------------------ |
| `typescript`  | Compilador TypeScript para adicionar tipagem estática ao código.   |
| `jest`        | Framework de testes unitários e de integração.                     |
| `@types/jest` | Tipos TypeScript para o Jest (autocompletar e checagem em testes). |
| `nodemon`     | Reinicia o servidor automaticamente durante o desenvolvimento.     |
| `ts-node`     | Executa arquivos `.ts` diretamente (sem compilar manualmente).     |

### Para APIs Web

| `express` | Framework para criar servidores HTTP/APIs. |
| `@types/express` | Tipos TypeScript para o Express. |
| `axios` | Cliente HTTP para consumir APIs externas. |

### Banco de Dados

| `pg-promise` | Biblioteca para PostgreSQL com suporte a Promises/async-await. |

### Configuração de Testes

| `ts-jest` | Permite o Jest executar testes escritos em TypeScript. |

```
yarn add typescript jest @types/jest nodemon ts-node ts-jest express @types/express axios pg-promise
```

## Primeiros passos

### Inicialização do TypeScript

| Comando          | Descrição                                                                  |
| ---------------- | -------------------------------------------------------------------------- |
| `npx tsc --init` | Cria um arquivo `tsconfig.json` padrão com as configurações do TypeScript. |

**Detalhes**:

- Gera opções como `target` (versão do JS), `module` (sistema de módulos), `strict` (checagem rigorosa de tipos).
- Permite personalizar a compilação do projeto TypeScript.

---

### Inicialização do Jest (TypeScript)

| Comando                   | Descrição                                                                   |
| ------------------------- | --------------------------------------------------------------------------- |
| `npx ts-jest config:init` | Cria um arquivo `jest.config.js` pré-configurado para testes em TypeScript. |

**Detalhes**:

- Configura o `preset: 'ts-jest'` para interpretar arquivos `.ts` nos testes.
- Adiciona suporte a mapeamento de módulos (se usado).
- Integra automaticamente com projetos TypeScript existentes.
