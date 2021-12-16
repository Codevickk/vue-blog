<template>
  <nav role="navigation" aria-label="Pagination navigation" class="pagination">
    <span class="pagination__stats"
      >{{ pagination.from }} - {{ pagination.to }} of
      {{ pagination.total }}</span
    >

    <ul class="pagination__list">
      <li class="pagination__item">
        <button
          v-if="pagination.prevPage"
          @click="$emit('prev')"
          aria-label="Go to previous page"
          class="pagination__button pagination__button--previous"
        >
          Prev
        </button>
        <button
          aria-label="Go to previous page"
          class="disabled pagination__button pagination__button--previous"
          v-else
        >
          Prev
        </button>
      </li>

      <li class="pagination__item">
        <button
          v-if="pagination.nextPage"
          @click="$emit('next')"
          aria-label="Go to previous page"
          class="pagination__button pagination__button--previous"
        >
          Next
        </button>
        <button
          aria-label="Go to previous page"
          class="disabled pagination__button pagination__button--previous"
          v-else
          disabled
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pagination"],
};
</script>