<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card text-center">
          <div class="card-header"><h2>Vue Component in Laravel</h2></div>
          <div class="card-body">I'm tiny Vue component in Laravel app!</div>
          <div class="card-footer">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Vue Laravel Tailwind",
    };
  },
};
</script>
