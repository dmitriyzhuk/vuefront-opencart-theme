<template>
  <section class="nav-menu-section">
    <div class="nav-menu-section__item" v-for="(item, index) in menuItems" :key="index">
      <vf-a-link :to="item.to" class="nav-menu-section__item_link">
        <div class="nav-menu-section__item_title body-2" v-b-toggle.menu-collapse>{{item.title}}</div>
        <vf-a-icon
          icon="angle-down"
          v-if="item.children && item.children.length > 0"
          class="nav-menu-section__item_icon"
        />
      </vf-a-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="nav-menu-section__sub_menu nav-menu-section__sub_menu--vertical"
      >
        <div class="nav-menu-section__item" v-for="(subItem, key) in item.children" :key="key">
          <vf-a-link
            :to="subItem.to"
            class="nav-menu-section__item_link nav-menu-section__item_link--size_big"
            v-b-toggle.menu-collapse
          >
            <div class="nav-menu-section__item_title subheading">{{subItem.title}}</div>
            <vf-a-icon
              v-if="subItem.children.length > 0"
              icon="angle-right"
              class="nav-menu-section__item_icon nav-menu-section__item_icon--float"
            />
          </vf-a-link>
          <div
            v-if="subItem.children.length > 0"
            class="nav-menu-section__sub_menu nav-menu-section__sub_menu--horizontal"
          >
            <div
              class="nav-menu-section__item"
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
              v-b-toggle.menu-collapse
            >
              <vf-a-link
                :to="value.to"
                class="nav-menu-section__item_link nav-menu-section__item_link--size_medium"
              >
                <div class="nav-menu-section__item_title subheading">{{value.title}}</div>
              </vf-a-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { eMenu } from "vuefront/lib/components/extensions/common/menu";
export default {
  mixins: [eMenu]
};
</script>
<style lang="scss">
.nav-menu-section {
  background-color: #229ac8;
  background-image: linear-gradient(to bottom, #23a1d1, #1f90bb);
  background-repeat: repeat-x;
  border-color: #1f90bb #1f90bb #145e7a;
  min-height: 40px;
  padding: 0px 15px;
  border-radius: 4px;
  border: 1px solid transparent;
  &__item {
    background: none;
    > .nav-menu-section__item_link {
      > .nav-menu-section__item_title,
      > .nav-menu-section__item_icon {
        color: #fff;
        font-size: 12px;
      }
    }
  }
  &__sub_menu {
    &--vertical {
      top: 39px;
    }
    .nav-menu-section__item {
      background: #fff;
    }
    .nav-menu-section__item_link {
      > .nav-menu-section__item_title,
      > .nav-menu-section__item_icon {
        color: #333;
        font-size: 12px;
      }
    }
  }
}
</style>
