


[remote "github"]
	url = https://github.com/sayazou/Blogs.git
	fetch = +refs/heads/*:refs/remotes/github/*
[remote "gitee"]
	url = https://gitee.com/sayazou/Blogs.git
	fetch = +refs/heads/*:refs/remotes/gitee/*


改为

[remote "origin"]
	url = https://github.com/sayazou/Blogs.git
	url = https://gitee.com/sayazou/Blogs.git
	fetch = +refs/heads/*:refs/remotes/origin/*

