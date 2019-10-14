<script>
import { mButtonGroup } from "vuefront/lib/components/molecules/button-group";
export default {
  mixins: [mButtonGroup]
};
</script>
<style lang="scss">
//BUGFIX
.vf-m-button-group {
  border: 1px solid #d3dce6;
  border-radius: 5px;
  .btn {
    background: #fafbfe;
    &.active,
    &:hover {
      background: #d3dce6;
    }
  }
}
</style>