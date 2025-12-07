<template>
  <div :class="['toast-item', `toast-${toast.type}`, { 'toast-entering': isEntering, 'toast-leaving': isLeaving }]" :style="toastStyle">
    <div class="toast-content">
      <div class="toast-left">
        <div class="toast-icon">
          <CheckCircle2 v-if="toast.type === 'success'" :size="mainIconSize" />
          <Info v-else-if="toast.type === 'info'" :size="mainIconSize" />
          <AlertTriangle v-else-if="toast.type === 'warning'" :size="mainIconSize" />
          <XCircle v-else-if="toast.type === 'error'" :size="mainIconSize" />
        </div>
        <div class="toast-body">
          <div class="toast-header">
            <span v-if="toast.news" class="toast-type-label">{{ newsLabel }}</span>
            <h4 class="toast-title">{{ toast.title }}</h4>
          </div>
          <p v-if="toast.description" class="toast-description">
            {{ toast.description }}
          </p>
          <span v-if="showTimestamp" class="toast-timestamp">{{ timestamp }}</span>
        </div>
      </div>
      <button class="toast-close" @click="$emit('close')" aria-label="Close">
        <X :size="closeIconSize" />
      </button>
    </div>
  </div>
</template>

<script>
import { CheckCircle2, Info, AlertTriangle, XCircle, X } from 'lucide-vue-next';

export default {
  name: 'ToastItem',
  components: {
    CheckCircle2,
    Info,
    AlertTriangle,
    XCircle,
    X,
  },
  props: {
    toast: {
      type: Object,
      required: true,
    },
    language: {
      type: String,
      default: 'en',
    },
    showTimestamp: {
      type: Boolean,
      default: true,
    },
    // Success Colors
    successBackgroundColor: {
      type: String,
      default: '#d1fae5',
    },
    successBorderColor: {
      type: String,
      default: '#10b981',
    },
    successTextColor: {
      type: String,
      default: '#064e3b',
    },
    successIconColor: {
      type: String,
      default: '#10b981',
    },
    // Info Colors
    infoBackgroundColor: {
      type: String,
      default: '#dbeafe',
    },
    infoBorderColor: {
      type: String,
      default: '#3b82f6',
    },
    infoTextColor: {
      type: String,
      default: '#1e3a8a',
    },
    infoIconColor: {
      type: String,
      default: '#3b82f6',
    },
    // Warning Colors
    warningBackgroundColor: {
      type: String,
      default: '#fef3c7',
    },
    warningBorderColor: {
      type: String,
      default: '#f59e0b',
    },
    warningTextColor: {
      type: String,
      default: '#78350f',
    },
    warningIconColor: {
      type: String,
      default: '#f59e0b',
    },
    // Error Colors
    errorBackgroundColor: {
      type: String,
      default: '#fee2e2',
    },
    errorBorderColor: {
      type: String,
      default: '#ef4444',
    },
    errorTextColor: {
      type: String,
      default: '#7f1d1d',
    },
    errorIconColor: {
      type: String,
      default: '#ef4444',
    },
    // Icon Sizes
    mainIconSize: {
      type: Number,
      default: 20,
    },
    closeIconSize: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      isEntering: true,
      isLeaving: false,
    };
  },
  computed: {
    newsLabel() {
      return this.language === 'pt' ? 'NOVIDADE' : 'NEWS';
    },
    timestamp() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const todayLabel = this.language === 'pt' ? 'Hoje' : 'Today';
      return `${todayLabel} ${hours}:${minutes}`;
    },
    toastColors() {
      const type = this.toast.type;
      const colorMap = {
        success: {
          backgroundColor: this.successBackgroundColor,
          borderColor: this.successBorderColor,
          textColor: this.successTextColor,
          iconColor: this.successIconColor,
        },
        info: {
          backgroundColor: this.infoBackgroundColor,
          borderColor: this.infoBorderColor,
          textColor: this.infoTextColor,
          iconColor: this.infoIconColor,
        },
        warning: {
          backgroundColor: this.warningBackgroundColor,
          borderColor: this.warningBorderColor,
          textColor: this.warningTextColor,
          iconColor: this.warningIconColor,
        },
        error: {
          backgroundColor: this.errorBackgroundColor,
          borderColor: this.errorBorderColor,
          textColor: this.errorTextColor,
          iconColor: this.errorIconColor,
        },
      };
      return colorMap[type] || colorMap.info;
    },
    toastStyle() {
      return {
        '--toast-bg-color': this.toastColors.backgroundColor,
        '--toast-border-color': this.toastColors.borderColor,
        '--toast-text-color': this.toastColors.textColor,
        '--toast-icon-color': this.toastColors.iconColor,
      };
    },
  },
  mounted() {
    setTimeout(() => {
      this.isEntering = false;
    }, 300);
  },
  methods: {
    startLeaving() {
      this.isLeaving = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-item {
  background: var(--toast-bg-color);
  border: 2px solid var(--toast-border-color);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 380px;
  max-width: 480px;
  position: relative;
  transition: all 0.3s ease;
  color: var(--toast-text-color);

  &.toast-entering {
    opacity: 0;
    transform: translateX(100%);
  }

  &.toast-leaving {
    opacity: 0;
    transform: translateX(100%);
  }

  // Mobile: 100% width, padding menor
  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    padding: 16px;
    margin-bottom: 10px;

    &.toast-entering {
      transform: translateY(-20px);
    }

    &.toast-leaving {
      transform: translateY(-20px);
    }
  }
}

.toast-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.toast-left {
  display: flex;
  gap: 12px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 10px;
  }
}

.toast-close {
  background: none;
  border: none;
  color: currentColor;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-radius: 4px;
  }
}

.toast-icon {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  padding-top: 2px;

  @media (max-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.toast-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
}

.toast-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.toast-type-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 10px;
  }
}

.toast-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
}

.toast-description {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.85;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.4;
  }
}

.toast-timestamp {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 2px;
  }
}

// Icon and label use the icon color
.toast-icon {
  color: var(--toast-icon-color);
}

.toast-type-label {
  color: var(--toast-icon-color);
}
</style>
