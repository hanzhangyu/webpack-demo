<template>
  <div>
    123123
  </div>
</template>

<script>
export default {
  name: "Hello",
  components: {},
  async mounted() {
    const a = () => "1";
    try {
      const res = await fetchSomeThing(a);
      console.log(res);
    } catch {
      console.log("error");
    }
  }
};
</script>

<style lang="css" scoped>
div {
    color: red;
}
</style>
