# QuantumultX 本地脚本使用指南


创建者：@outerman

频道：@outershare

# 1.保存脚本到指定位置

•  下载脚本

•  把脚本保存到：文件->我的iPhone->QuantumultX->Scripts文件夹中

# 2.在quanX中引用脚本

•  打开quanX->点击右下角图标->配置文件->编辑

•  在[mitm]下添加主机名

•  在[filter_local]下添加正则和脚本路径

# 3.以kuwo脚本为例


[rewrite_local]

^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body Kuwo.js

[mitm]

hostname= *.kuwo.cn

# 完成
