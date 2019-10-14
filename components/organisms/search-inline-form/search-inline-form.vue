<template>
  <vf-m-input-group size="md" class="vf-o-search-inline-form">
    <vf-a-input
      v-model="keyword"
      :placeholder="$t('elements.common.header.navSearch.placeholderText')"
      :hide-details="!$vuefront.isAMP"
      @keypress.stop="handleKeyPress"
      trim
    />
    <template v-slot:append>
      <vf-a-button color="light" @click="doSearch">
        <vf-a-icon icon="search" />
      </vf-a-button>
    </template>
  </vf-m-input-group>
</template>
<script>
import { oSearchInlineForm } from "vuefront/lib/components/organisms/search-inline-form";
export default {
  mixins: [oSearchInlineForm],
  methods: {
    //EXTRA
    //Method for searching on click
    doSearch() {
      this.$router.push(`/search/${this.keyword}`);
    }
  }
};
</script>
<style lang="scss">
//BUGFIX
//need to refactor the styles so they don't kill input-groups from bootstrap.
.vf-o-search-inline-form {
  .form-control {
    padding: 0.5rem 1rem;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    height: 39px;
  }
  .btn {
    padding: 0.5rem 1.4rem;
    color: #777;
    background-image: linear-gradient(to bottom, #eeeeee, #dddddd);
    border-color: #dddddd #dddddd #b3b3b3 #b7b7b7;
  }
}
</style>
