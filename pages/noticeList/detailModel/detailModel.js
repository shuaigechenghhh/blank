Component({
  mixins: [],
  data: {},
  props: {
    isShow:false
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleDetail(){
      this.$page.closeDetailModel()
    }
  },
});
