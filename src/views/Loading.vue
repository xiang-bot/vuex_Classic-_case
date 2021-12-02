<template>
  <div>正在登录中...</div>
</template>
<script>
export default {
  created() {
    this.unWatch = this.$store.watch(
      () => this.$store.getters['loginUser/status'],
      (status) => {
        if (status !== 'loading') {
          this.$router.push(this.$route.query.returnurl || '/home')
            .catch(() => {});
        }
      },
      {
        immediate: true,
      },
    );
  },
  destroyed() {
    this.unWatch();
  },
};
</script>
