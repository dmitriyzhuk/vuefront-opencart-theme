  <template>
  <section class="wishlist">
    <vf-a-heading :level="1" tag="h6" class="mb-2 font-weight-400">My Wishlist</vf-a-heading>

    <div class="wishlist__products" v-if="wishlist.length > 0">
      <vf-m-table :fields="fields" :items="wishlist" class="table-wishlist">
        <template #product="data">
          <vf-m-product-thumb-inline :product="data.item" />
        </template>
        <template #action="data">
          <vf-o-wishlist-actions :product="data.item" />
        </template>
      </vf-m-table>
    </div>
    <div v-else>
      <p>Your wishlist is empty.</p>
      <vf-a-button to="/">Continue shopping</vf-a-button>
    </div>
  </section>
</template>
<script>
export default {
  props: ["wishlist"],
  data() {
    return {
      fields: [
        {
          key: "product",
          label: this.$t("elements.store.wishlist.productColumn"),
          sortable: false
        },
        {
          key: "price",
          label: this.$t("elements.store.wishlist.priceColumn"),
          sortable: false
        },
        {
          key: "action",
          label: this.$t("elements.store.wishlist.actionColumn"),
          sortable: false
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.wishlist {
  &__action {
    cursor: pointer;
  }
}
</style>
