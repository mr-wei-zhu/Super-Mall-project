<template>
  <div v-if="Object.keys(rateInfo).length !== 0" class="comment-info">
    <div class="comment-title">
      <div>用户评价</div>
      <p>更多</p>
    </div>
    <div v-for="item in rateInfo" :key="item.index">
      <div class="user">
        <span>
          <img :src="item.user.avatar" alt="" class="user-img" />
        </span>
        <span>{{ item.user.uname }}</span>
      </div>
      <div class="user-content">
        <!-- //评价 -->
        <span>{{item.content}}</span>
      </div>
      <div  class="user-zong">
        <!-- //评论时间 -->
        <span class="user-created">{{item.created | showDate}}</span>
        <span >{{item.style}}</span>
      </div>
      
      <!-- <p>{{ item.content }}</p> -->
    </div>
  </div>
</template>

<script>
import {friendlyDate} from '../../../components/common/util'
export default {
  name: "DetailCommentInfo",
  props: {
    rateInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
			showDate(value) {
				//将时间戳转换成date对象
				const date = new Date(value * 1000);
				//将date进行格式化
				return friendlyDate(date, 'yyyy-MM-dd');
			}
		}
};
</script>

<style scoped>
.comment-info {
  padding: 0 8px;
  font-size: 14px;
  border-bottom: 4px solid #ececec;
}
.comment-title {
  border-bottom: 2px solid #ececec;
  /* padding-bottom: 10px; */
  display: flex;
  line-height: 40px;
}
.comment-title div {
  /* align-self: flex-start; */
  flex: 1;
}
/* .comment-title p {
  align-self: flex-end;
  flex: 1;
} */
.user {
  padding-top: 10px;
}
.user-img {
  width: 40px;
  border-radius: 100%;
  vertical-align: middle;
}
.user-content {
  padding: 10px 0 5px;
  line-height: 20px;
}
.user-zong {
  padding-bottom: 8px;
}
.user-created {
  margin-right: 10px;
}
</style>