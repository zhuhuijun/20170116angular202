# 参数可配置是否使用
`/** * Not all properties of an interface may be required. 
* Some exist under certain conditions or may not be there at all
 *并非需要一个接口的所有属性。
 在某些条件下的一些存在或可以不存在的。 
 *这句话说的是：就算你 SquareConfig 接口定义的变量是 color，到调用 createSquare 
 的时候 你给 color1 变量照样可以取出 z 值来 *这个值只不过是：默认的 newSquare 的 white 值，
 如果是一样的 color 变量他就会取出你给赋 格对象的 color(red) */`