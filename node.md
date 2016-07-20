##node
#node应用组成
##
#引入 required 模块（功能未知,好像是引入什么东西的）
我们可以使用 require 指令来载入 Node.js 模块。
#创建服务器
服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
#接收请求与响应请求 
服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
##模块的分类
#核心模块
#文件模块
#第三方模块
##引用模块
文件名或者是模块名
##模块流程
#创建模块
#导出模块
#加载模块
#使用模块
##
url 统一资源定位符
uri 同一资源标识符

##API
#URL以及模块方法
#1、url.parse(url,Str[parseQueryString],[slashesDenoteHost])将地址解析成对象
 {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'nodejs.cn',
  port: null,
  hostname: 'nodejs.cn',
  hash: null,
  search: null,
  query: null,
  pathname: '/doc/node/url.html',
  path: '/doc/node/url.html',
  href: 'http://nodejs.cn/doc/node/url.html' }
  <br>  
  url.parse("http://www.baidu.com?name=zhangdan&user=lisi",true)
  区别的是 query值变为一个对象
  {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=zhangdan&user=lisi',
  query: { name: 'zhangdan', user: 'lisi' },
  pathname: '/',
  path: '/?name=zhangdan&user=lisi',
  href: 'http://www.baidu.com/?name=zhangdan&user=lisi' }
  <br><br>
  url.parse("//baidu.com/new/list",true,true);帮助解析主机名
   {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'baidu.com',
  port: null,
  hostname: 'baidu.com',
  hash: null,
  search: '',
  query: {},
  pathname: '/new/list',
  path: '/new/list',
  href: '//baidu.com/new/list' }
#2、format（obj）将一个对象解析成地址
  url.format(
    {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'nodejs.cn',
  port: null,
  hostname: 'nodejs.cn',
  hash: null,
  search: null,
  query: null,
  pathname: '/doc/node/url.html',
  path: '/doc/node/url.html',
  href: 'http://nodejs.cn/doc/node/url.html' }
)   ==>http://nodejs.cn/doc/node/url.html
#3、reslve('from','to');
url.resolve('http://example.com/', '/one') ==>http://example.com/one

 