


[remote "github"]
	url = [github link]
	fetch = +refs/heads/*:refs/remotes/github/*
[remote "gitee"]
	url = [gitee link]]
	fetch = +refs/heads/*:refs/remotes/gitee/*


改为

[remote "origin"]
	url = [github link]
	url = [gitee link]
	fetch = +refs/heads/*:refs/remotes/origin/*

