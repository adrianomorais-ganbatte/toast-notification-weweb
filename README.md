# Toast Notification Component for WeWeb

[![WeWeb](https://img.shields.io/badge/WeWeb-Component-blue)](https://www.weweb.io/)
[![Vue 3](https://img.shields.io/badge/Vue-3-green)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Um componente WeWeb reutilizável para exibir notificações toast personalizadas com suporte a 4 tipos (success, info, warning, error), auto-dismiss configurável e integração via Workflow.

![Toast Notification Demo](docs/toast-demo.png)

## 🚀 Quick Start

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run serve --port=8080
```

Depois, no WeWeb Editor:
1. Vá em **Dev** → **Add local Element**
2. Nome: `toast-notification`, Porta: `8080`
3. Aceite o certificado SSL

### Uso em Produção

1. Publique este repo no GitHub
2. No WeWeb Dashboard: adicione como **Source Code**
3. No WeWeb Editor: arraste o componente para sua página
4. Use **Execute Component Action** nos Workflows

## 📋 Documentação

- **[WORKFLOW-GUIDE.md](WORKFLOW-GUIDE.md)** - 🔥 **COMECE AQUI: Como usar via Workflow** (passo a passo)
- **[QUICK-FIX-INVALID-VALUE.md](QUICK-FIX-INVALID-VALUE.md)** - ⚡ **Fix rápido para erro "Invalid value"**
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - 🔧 Guia completo de resolução de problemas
- **[README-COMPONENT.md](README-COMPONENT.md)** - Documentação completa do componente (instalação, API, configuração)
- **[EXAMPLES.md](EXAMPLES.md)** - Exemplos práticos de payloads e casos de uso
- **[docs/](docs/)** - PRD, ADR e processo de desenvolvimento WeWeb

## 💡 Exemplo de Uso

```json
{
  "type": "success",
  "title": "Salvo com sucesso",
  "description": "Suas alterações foram salvas.",
  "durationMs": 5000
}
```

## 🎯 Features

- ✅ 4 tipos de toast: success, info, warning, error
- ✅ Auto-dismiss configurável (default: 5000ms, máx: 30s)
- ✅ Posicionamento flexível (4 posições no desktop)
- ✅ **Responsivo para mobile** (centralizado no topo, 90% width)
- ✅ Queue automática com limite de toasts
- ✅ Validação de payload com eventos de erro
- ✅ Renderização condicional (description opcional)
- ✅ Animações suaves adaptadas por dispositivo
- ✅ Totalmente integrado com Workflows WeWeb

## 📂 Estrutura do Projeto

```
toast_notification_vue/
├── src/
│   ├── wwElement.vue              # Componente host principal
│   └── components/
│       └── ToastItem.vue          # Item individual de toast
├── docs/
│   ├── prd.md                     # Product Requirements Document
│   ├── adr.md                     # Architectural Decision Record
│   ├── toast.md                   # Especificação do payload
│   └── weweb/
│       └── development_process.md # Processo de dev WeWeb
├── ww-config.js                   # Configuração WeWeb
├── package.json                   # Dependências e scripts
├── README.md                      # Este arquivo
├── README-COMPONENT.md            # Documentação completa
└── EXAMPLES.md                    # Exemplos práticos
```

## 🔧 Scripts Disponíveis

```bash
npm run serve          # Dev server (porta padrão: 8080)
npm run build          # Build de produção
```

## 📦 Payload API

### Campos Obrigatórios

| Campo | Tipo | Valores |
|-------|------|---------|
| `type` | String | `"success"`, `"info"`, `"warning"`, `"error"` |
| `title` | String | Qualquer string |

### Campos Opcionais

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `description` | String | Texto adicional (não renderiza se omitido) |
| `durationMs` | Number | Duração customizada em ms |

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 License

MIT

## 🔗 Links Úteis

- [WeWeb Developer Docs](https://developer.weweb.io/)
- [WeWeb Component Documentation](https://docs.weweb.io/components/)
- [Execute Component Actions](https://docs.weweb.io/workflows/actions/execute-component-action.html)

---

**Desenvolvido para WeWeb** | Componente reutilizável Vue 3
