<script setup>
import avatar1 from '@images/av.png';
const logOut = () => {
  localStorage.clear()
}
</script>

<template>
  <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success" bordered>
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success">
                  <VAvatar color="primary" variant="tonal">
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              Chen
            </VListItemTitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Settings -->
          <VListItem to="/setting/eqpt">
            <template #prepend>
              <VIcon class="me-2" icon="bx-cog" size="22" />
            </template>

            <VListItemTitle>{{ $t('设置') }}</VListItemTitle>
          </VListItem>

          <!-- 👉 FAQ -->
          <!-- <VListItem >
            <template #prepend>
              <VIcon class="me-2" icon="bx-help-circle" size="22" />
            </template>
            <VListItemTitle>{{ $t('帮助中心') }}</VListItemTitle>
          </VListItem> -->

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem to="/login" @click="logOut">
            <template #prepend>
              <VIcon class="me-2" icon="bx-log-out" size="22" />
            </template>

            <VListItemTitle>{{ $t('退出登录') }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
