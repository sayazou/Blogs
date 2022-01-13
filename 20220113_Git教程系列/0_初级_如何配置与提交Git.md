# 如何配置与提交至Git


## 创建仓库





## 




## 使用https协议时


## 使用SSH协议时

1. 从云端库上获取SSH地址，此链接会作为后续建立远程库时使用。
![](./pic/2022-01-13-22-57-09.png)


2. 在本地需要进行git管理代码的文件中，运行一下命令行.
```bash

git remote add git@github.com:sayazou/Blogs.git
```

3. 在本地执行一下命令行生成SSH公钥
```bash

ssh-keygen -t rsa -C "your_email@xxx.com"
# 所有提示点击回车
```

4. 再执行以下命令查看公钥
```bash

cat ~/.ssh/id_rsa.pub
# 复制显示的公钥
```

5. 到云端库的Setting->SSH and GPG keys中添加公钥
![](./pic/2022-01-13-23-20-43.png)

6. 添加成功以后，回到本地执行命令查看是否可以正常通信。如果看到是类似以下Successfully...就说明成功了。
![](./pic/2022-01-13-23-25-18.png)

7. 