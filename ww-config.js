export default {
  editor: {
    label: {
      en: "Toast Notification Host",
      pt: "Host de Notificações Toast",
    },
    icon: "bell",
  },
  properties: {
    defaultDuration: {
      label: {
        en: "Default Duration (ms)",
        pt: "Duração Padrão (ms)",
      },
      type: "Number",
      section: "settings",
      defaultValue: 5000,
      bindable: true,
    },
    position: {
      label: {
        en: "Position",
        pt: "Posição",
      },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "top-right", label: { en: "Top Right", pt: "Cima Direita" } },
          { value: "top-left", label: { en: "Top Left", pt: "Cima Esquerda" } },
          { value: "bottom-right", label: { en: "Bottom Right", pt: "Baixo Direita" } },
          { value: "bottom-left", label: { en: "Bottom Left", pt: "Baixo Esquerda" } },
        ],
      },
      defaultValue: "top-right",
    },
    maxToasts: {
      label: {
        en: "Max Toasts",
        pt: "Máximo de Toasts",
      },
      type: "Number",
      section: "settings",
      defaultValue: 5,
      bindable: true,
    },
    language: {
      label: {
        en: "Language",
        pt: "Idioma",
      },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "en", label: { en: "English", pt: "Inglês" } },
          { value: "pt", label: { en: "Portuguese", pt: "Português" } },
        ],
      },
      defaultValue: "en",
    },
    showTimestamp: {
      label: {
        en: "Show Timestamp",
        pt: "Exibir Horário",
      },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
    },
    showEditorPlaceholder: {
      label: {
        en: "Show Editor Placeholder",
        pt: "Exibir Placeholder",
      },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
    },
    successBackgroundColor: {
      label: {
        en: "Success Background",
        pt: "Fundo Sucesso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#d1fae5",
      bindable: true,
    },
    successBorderColor: {
      label: {
        en: "Success Border",
        pt: "Borda Sucesso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#10b981",
      bindable: true,
    },
    successTextColor: {
      label: {
        en: "Success Text",
        pt: "Texto Sucesso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#064e3b",
      bindable: true,
    },
    successIconColor: {
      label: {
        en: "Success Icon",
        pt: "Ícone Sucesso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#10b981",
      bindable: true,
    },
    infoBackgroundColor: {
      label: {
        en: "Info Background",
        pt: "Fundo Info",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#dbeafe",
      bindable: true,
    },
    infoBorderColor: {
      label: {
        en: "Info Border",
        pt: "Borda Info",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#3b82f6",
      bindable: true,
    },
    infoTextColor: {
      label: {
        en: "Info Text",
        pt: "Texto Info",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#1e3a8a",
      bindable: true,
    },
    infoIconColor: {
      label: {
        en: "Info Icon",
        pt: "Ícone Info",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#3b82f6",
      bindable: true,
    },
    warningBackgroundColor: {
      label: {
        en: "Warning Background",
        pt: "Fundo Aviso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#fef3c7",
      bindable: true,
    },
    warningBorderColor: {
      label: {
        en: "Warning Border",
        pt: "Borda Aviso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#f59e0b",
      bindable: true,
    },
    warningTextColor: {
      label: {
        en: "Warning Text",
        pt: "Texto Aviso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#78350f",
      bindable: true,
    },
    warningIconColor: {
      label: {
        en: "Warning Icon",
        pt: "Ícone Aviso",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#f59e0b",
      bindable: true,
    },
    errorBackgroundColor: {
      label: {
        en: "Error Background",
        pt: "Fundo Erro",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#fee2e2",
      bindable: true,
    },
    errorBorderColor: {
      label: {
        en: "Error Border",
        pt: "Borda Erro",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#ef4444",
      bindable: true,
    },
    errorTextColor: {
      label: {
        en: "Error Text",
        pt: "Texto Erro",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#7f1d1d",
      bindable: true,
    },
    errorIconColor: {
      label: {
        en: "Error Icon",
        pt: "Ícone Erro",
      },
      type: "Color",
      section: "settings",
      defaultValue: "#ef4444",
      bindable: true,
    },
    mainIconSize: {
      label: {
        en: "Main Icon Size",
        pt: "Tamanho Ícone Principal",
      },
      type: "Number",
      section: "settings",
      defaultValue: 20,
      bindable: true,
    },
    closeIconSize: {
      label: {
        en: "Close Icon Size",
        pt: "Tamanho Ícone Fechar",
      },
      type: "Number",
      section: "settings",
      defaultValue: 16,
      bindable: true,
    },
  },
  actions: [
    {
      label: {
        en: "Show Success Toast",
        pt: "Exibir Toast Sucesso",
      },
      action: "showSuccessToast",
      args: [
        {
          name: "title",
          type: "Text",
          bindable: true,
        },
        {
          name: "description",
          type: "Text",
          bindable: true,
        },
        {
          name: "durationMs",
          type: "Number",
          bindable: true,
        },
      ],
    },
    {
      label: {
        en: "Show Info Toast",
        pt: "Exibir Toast Info",
      },
      action: "showInfoToast",
      args: [
        {
          name: "title",
          type: "Text",
          bindable: true,
        },
        {
          name: "description",
          type: "Text",
          bindable: true,
        },
        {
          name: "durationMs",
          type: "Number",
          bindable: true,
        },
      ],
    },
    {
      label: {
        en: "Show Warning Toast",
        pt: "Exibir Toast Aviso",
      },
      action: "showWarningToast",
      args: [
        {
          name: "title",
          type: "Text",
          bindable: true,
        },
        {
          name: "description",
          type: "Text",
          bindable: true,
        },
        {
          name: "durationMs",
          type: "Number",
          bindable: true,
        },
      ],
    },
    {
      label: {
        en: "Show Error Toast",
        pt: "Exibir Toast Erro",
      },
      action: "showErrorToast",
      args: [
        {
          name: "title",
          type: "Text",
          bindable: true,
        },
        {
          name: "description",
          type: "Text",
          bindable: true,
        },
        {
          name: "durationMs",
          type: "Number",
          bindable: true,
        },
      ],
    },
    {
      label: {
        en: "Show Toast (Advanced)",
        pt: "Exibir Toast (Avançado)",
      },
      action: "showToast",
      args: [
        {
          name: "data",
          type: "Object",
          bindable: true,
        },
      ],
    },
  ],
  triggerEvents: [
    {
      name: "toastShown",
      label: {
        en: "Toast Shown",
        pt: "Toast Exibido",
      },
      event: {
        toast: {},
      },
    },
    {
      name: "toastDismissed",
      label: {
        en: "Toast Dismissed",
        pt: "Toast Removido",
      },
      event: {
        toastId: "",
      },
    },
  ],
};
