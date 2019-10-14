<template>
  <div class="vf-m-cart-link">
    <vf-a-button color="dark" block to="/store/cart">
      <vf-a-icon icon="shopping-cart" />
      <span class="d-none d-md-inline-block">{{$t('elements.common.header.nav.shoppingCartText')}}</span>
    </vf-a-button>
  </div>
</template>
<script>
import { mCartLink } from "vuefront/lib/components/molecules/cart-link";
export default {
  mixins: [mCartLink]
};
</script>
<style lang="scss">
//BUGFIX
//need to refactor the styles so they don't kill .btn color from bootstrap.
.vf-o-header {
  .vf-m-cart-link {
    .btn-dark,
    .btn-dark:hover {
      color: #fff;
    }
    .btn {
      font-size: 12px;
      line-height: 21px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>