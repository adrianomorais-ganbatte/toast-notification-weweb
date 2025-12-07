<template>
  <div :class="['toast-notification-host', `position-${content.position}`]">
    <transition-group name="toast-list" tag="div" class="toast-container">
      <toast-item
        v-for="toast in activeToasts"
        :key="toast.id"
        :ref="`toast-${toast.id}`"
        :toast="toast"
        :language="content.language"
        :show-timestamp="content.showTimestamp"
        :success-background-color="content.successBackgroundColor"
        :success-border-color="content.successBorderColor"
        :success-text-color="content.successTextColor"
        :success-icon-color="content.successIconColor"
        :info-background-color="content.infoBackgroundColor"
        :info-border-color="content.infoBorderColor"
        :info-text-color="content.infoTextColor"
        :info-icon-color="content.infoIconColor"
        :warning-background-color="content.warningBackgroundColor"
        :warning-border-color="content.warningBorderColor"
        :warning-text-color="content.warningTextColor"
        :warning-icon-color="content.warningIconColor"
        :error-background-color="content.errorBackgroundColor"
        :error-border-color="content.errorBorderColor"
        :error-text-color="content.errorTextColor"
        :error-icon-color="content.errorIconColor"
        :main-icon-size="content.mainIconSize"
        :close-icon-size="content.closeIconSize"
        @close="dismissToast(toast.id)"
      />
    </transition-group>
  </div>
</template>

<script>
import ToastItem from './components/ToastItem.vue';

export default {
  name: 'ToastNotificationHost',
  components: {
    ToastItem,
  },
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      activeToasts: [],
      toastCounter: 0,
    };
  },
  computed: {
    defaultDuration() {
      return this.content.defaultDuration || 5000;
    },
    maxToasts() {
      return this.content.maxToasts || 5;
    },
  },
  wwDefaultContent: {
    defaultDuration: 5000,
    position: 'top-right',
    maxToasts: 5,
    language: 'en',
    showTimestamp: true,
    // Success Colors
    successBackgroundColor: '#d1fae5',
    successBorderColor: '#10b981',
    successTextColor: '#064e3b',
    successIconColor: '#10b981',
    // Info Colors
    infoBackgroundColor: '#dbeafe',
    infoBorderColor: '#3b82f6',
    infoTextColor: '#1e3a8a',
    infoIconColor: '#3b82f6',
    // Warning Colors
    warningBackgroundColor: '#fef3c7',
    warningBorderColor: '#f59e0b',
    warningTextColor: '#78350f',
    warningIconColor: '#f59e0b',
    // Error Colors
    errorBackgroundColor: '#fee2e2',
    errorBorderColor: '#ef4444',
    errorTextColor: '#7f1d1d',
    errorIconColor: '#ef4444',
    // Icon Sizes
    mainIconSize: 20,
    closeIconSize: 16,
  },
  methods: {
    showSuccessToast(title, description, durationMs) {
      this.showToast({
        type: 'success',
        title: title || '',
        description: description || '',
        durationMs: durationMs || this.defaultDuration,
      });
    },

    showInfoToast(title, description, durationMs) {
      this.showToast({
        type: 'info',
        title: title || '',
        description: description || '',
        durationMs: durationMs || this.defaultDuration,
      });
    },

    showWarningToast(title, description, durationMs) {
      this.showToast({
        type: 'warning',
        title: title || '',
        description: description || '',
        durationMs: durationMs || this.defaultDuration,
      });
    },

    showErrorToast(title, description, durationMs) {
      this.showToast({
        type: 'error',
        title: title || '',
        description: description || '',
        durationMs: durationMs || this.defaultDuration,
      });
    },

    showToast(data) {
      // Data comes as an object from WeWeb action
      if (!data || typeof data !== 'object') {
        data = {};
      }

      // Validate payload
      const validationError = this.validatePayload(data);
      if (validationError) {
        this.$emit('toastInvalidPayload', {
          error: validationError,
          payload: data,
        });
        console.error('[Toast] Invalid payload:', validationError, data);
        return;
      }

      // Generate unique ID
      const toastId = `toast-${Date.now()}-${++this.toastCounter}`;

      // Create toast object
      const toast = {
        id: toastId,
        type: data.type,
        title: data.title,
        description: data.description || null,
        durationMs: data.durationMs || this.defaultDuration,
        news: data.news !== undefined ? data.news : false,
        createdAt: new Date(),
      };

      // Remove oldest toast if max limit reached
      if (this.activeToasts.length >= this.maxToasts) {
        this.dismissToast(this.activeToasts[0].id);
      }

      // Add to active toasts
      this.activeToasts.push(toast);

      // Emit event
      this.$emit('toastShown', { toast });

      // Auto-dismiss after duration
      setTimeout(() => {
        this.dismissToast(toastId);
      }, toast.durationMs);
    },

    dismissToast(toastId) {
      const index = this.activeToasts.findIndex(t => t.id === toastId);
      if (index === -1) return;

      // Trigger leaving animation
      const toastRef = this.$refs[`toast-${toastId}`];
      if (toastRef && toastRef[0]) {
        toastRef[0].startLeaving();
      }

      // Remove after animation
      setTimeout(() => {
        const currentIndex = this.activeToasts.findIndex(t => t.id === toastId);
        if (currentIndex !== -1) {
          this.activeToasts.splice(currentIndex, 1);
          this.$emit('toastDismissed', { toastId });
        }
      }, 300);
    },

    validatePayload(data) {
      if (!data || typeof data !== 'object') {
        return 'Payload must be an object';
      }

      if (!data.type) {
        return 'Missing required field: type';
      }

      const validTypes = ['success', 'info', 'warning', 'error'];
      if (!validTypes.includes(data.type)) {
        return `Invalid type: ${data.type}. Must be one of: ${validTypes.join(', ')}`;
      }

      if (!data.title || typeof data.title !== 'string') {
        return 'Missing or invalid required field: title (must be a string)';
      }

      if (data.description !== undefined && typeof data.description !== 'string') {
        return 'Invalid field: description (must be a string if provided)';
      }

      if (data.durationMs !== undefined) {
        if (typeof data.durationMs !== 'number' || data.durationMs < 0) {
          return 'Invalid field: durationMs (must be a positive number if provided)';
        }
      }

      if (data.news !== undefined && typeof data.news !== 'boolean') {
        return 'Invalid field: news (must be a boolean if provided)';
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-notification-host {
  position: fixed;
  z-index: 9999;
  pointer-events: none;

  // Desktop positioning
  &.position-top-right {
    top: 24px;
    right: 24px;
  }

  &.position-top-left {
    top: 24px;
    left: 24px;
  }

  &.position-bottom-right {
    bottom: 24px;
    right: 24px;
  }

  &.position-bottom-left {
    bottom: 24px;
    left: 24px;
  }

  // Mobile: sempre centralizado no topo
  @media (max-width: 768px) {
    top: 16px !important;
    left: 50% !important;
    right: auto !important;
    bottom: auto !important;
    transform: translateX(-50%);
    width: 90%;
    max-width: 90%;
  }
}

.toast-container {
  display: flex;
  flex-direction: column;
  pointer-events: auto;

  // Mobile: centralizar container
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
}

// Transition animations
.toast-list-enter-active,
.toast-list-leave-active {
  transition: all 0.3s ease;
}

.toast-list-enter-from {
  opacity: 0;
  transform: translateX(100%);

  @media (max-width: 768px) {
    transform: translateY(-20px);
  }
}

.toast-list-leave-to {
  opacity: 0;
  transform: translateX(100%);

  @media (max-width: 768px) {
    transform: translateY(-20px);
  }
}

.toast-list-move {
  transition: transform 0.3s ease;
}
</style>
