<template>
    <div>
       <van-nav-bar
  title="消息中心"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
    </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
        this.$router.push({name:'shouye'})
    },
    
  }
}
</script>